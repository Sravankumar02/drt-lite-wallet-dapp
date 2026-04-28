import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useScrollToElement } from 'hooks';
import { refreshAccount, useGetAccountInfo } from 'lib';
import { RootState } from 'redux/store';
import { WidgetType } from 'types/widget.types';
import { AuthRedirectWrapper } from 'wrappers';
import { Widget } from './components';
import { Account, NFTs, Tokens, Transactions } from './widgets';

const WIDGETS: WidgetType[] = [
  {
    title: 'Tokens',
    widget: Tokens,
    description: 'Tokens for the connected account',
    reference:
      'http://localhost:3001/#/accounts/AccountController_getAccountTokens'
  },
  {
    title: 'NFTs',
    widget: NFTs,
    description: 'NFTs for the connected account',
    reference:
      'http://localhost:3001/#/accounts/AccountController_getAccountNfts'
  },
  {
    title: 'Transactions',
    widget: Transactions,
    description: 'Transactions list for the connected account',
    reference:
      'http://localhost:3001/#/accounts/AccountController_getAccountTransactions'
  }
];

export const Dashboard = () => {
  useScrollToElement();
  const { websocketEvent } = useGetAccountInfo();
  const refreshCount = useSelector(
    (state: RootState) => state.account.refreshCount
  );

 // src/pages/Dashboard/Dashboard.tsx

  useEffect(() => {
    console.log('Dashboard refreshing account info due to refreshCount:', refreshCount);
    refreshAccount();
  }, [websocketEvent, refreshCount]);


  return (
    <AuthRedirectWrapper>
      <div className='flex flex-col gap-6 max-w-3xl w-full'>
        <Account />
        {WIDGETS.map((element) => (
          <Widget key={element.title} {...element} />
        ))}
      </div>
    </AuthRedirectWrapper>
  );
};
