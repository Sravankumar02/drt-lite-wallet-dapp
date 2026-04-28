import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Loader } from 'components';
import { getRewaLabel, refreshAccount, useGetAccountInfo } from 'lib';
import { DataTestIdsEnum } from 'localConstants';
import {
  useGetFaucetSettingsQuery,
  useRequestFundsMutation
} from 'redux/endpoints';
import { triggerRefresh } from 'redux/slices';
import { FaucetError } from '../FaucetError';
import { FaucetScreen } from '../FaucetScreen';
import { FaucetSuccess } from '../FaucetSuccess';

export const FaucetContent = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [getFunds, { isSuccess }] = useRequestFundsMutation();
  const [fundsReceived, setFundsReceived] = useState(false);
  const [requestFailed, setRequestFailed] = useState('');
  const { websocketEvent } = useGetAccountInfo();
  const { data: settings, error: settingsError } = useGetFaucetSettingsQuery();
  const rewaLabel = getRewaLabel();

  useEffect(() => {
    if (isSuccess && fundsReceived) {
      refreshAccount();
    }
  }, [isSuccess, fundsReceived, websocketEvent]);
  console.log(settings);


  const handleRequestClick = async (captcha: string) => {
    const response = await getFunds(captcha);
    console.log(response);

    if ('error' in response) {
      setRequestFailed(
        (response.error as any).data.message ||
          'The faucet is available once every 24 hours.'
      );
       // src/pages/Faucet/components/FuacetContent/FaucetContent.tsx

    } else {
      // Immediate refresh
      dispatch(triggerRefresh());
      refreshAccount();

      // Poll every 5 seconds for 30 seconds to catch the status/balance update
      const pollInterval = setInterval(() => {
        console.log('Polling for faucet update...');
        dispatch(triggerRefresh());
        refreshAccount();
      }, 5000);

      // Clear the interval after 30 seconds
      setTimeout(() => clearInterval(pollInterval), 30000);
    }


    if (ref.current !== null) {
      setFundsReceived(true);
    }
  };

  if (settingsError) {
    return <FaucetError message='Faucet not available. Try again later.' />;
  }

  if (!settings?.token) {
    return (
      <div className='flex flex-col'>
        <h1
          className='text-2xl whitespace-nowrap mt-2'
          data-testid={DataTestIdsEnum.faucetTitle}
        >
          {rewaLabel} Faucet
        </h1>
        <Loader />
      </div>
    );
  }

  if (requestFailed) {
    return <FaucetError message={requestFailed} />;
  }

  console.log(isSuccess);
  console.log(fundsReceived);
  const showFaucetScreen = !fundsReceived && !isSuccess;


  return (
    <div ref={ref} className='flex flex-col flex-grow'>
      {showFaucetScreen ? (
        <FaucetScreen settings={settings} onRequestClick={handleRequestClick} />
      ) : (
        <FaucetSuccess token={settings.token} />
      )}
    </div>
  );
};
