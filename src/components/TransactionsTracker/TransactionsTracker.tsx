import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
  refreshAccount,
  useBatchTransactionsTracker,
  useCheckBatch,
  useGetActiveTransactionsStatus,
  useGetPendingTransactions,
  useTrackTransactionStatus,
  useTransactionsTracker,
  updateSignedTransactionsState
} from 'lib';
import { triggerRefresh } from 'redux/slices';
import { TransactionBatchStatusesEnum } from 'localConstants/sdkDapp';

const SessionTracker = ({ sessionId }: { sessionId: string }) => {
  const dispatch = useDispatch();

  useTrackTransactionStatus({
    transactionId: sessionId,
    onSuccess: (id) => {
      console.log(`Session ${id} successfully completed via SessionTracker`);
      updateSignedTransactionsState({
        sessionId: id,
        status: TransactionBatchStatusesEnum.success
      });
      dispatch(triggerRefresh());
      refreshAccount();
    },
    onFail: (id, errorMessage) => {
      console.log(`Session ${id} failed via SessionTracker: ${errorMessage}`);
      updateSignedTransactionsState({
        sessionId: id,
        status: TransactionBatchStatusesEnum.fail,
        errorMessage: errorMessage ?? 'Transaction failed'
      });
      dispatch(triggerRefresh());
      refreshAccount();
    }
  });

  return null;
};

export const TransactionsTracker = () => {
  const dispatch = useDispatch();
  const { hasPendingTransactions, pendingTransactions } = useGetPendingTransactions();
  const { success } = useGetActiveTransactionsStatus();

  useCheckBatch();

  const pendingSessionIds = useMemo(
    () => Object.keys(pendingTransactions),
    [pendingTransactions]
  );

  useEffect(() => {
    if (success) {
      dispatch(triggerRefresh());
      refreshAccount();
    }
  }, [success]);

  useEffect(() => {
    if (hasPendingTransactions) {
      const interval = setInterval(() => {
        dispatch(triggerRefresh());
        refreshAccount();
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [hasPendingTransactions]);

  useTransactionsTracker({
    onSuccess: (sessionId: string) => {
      console.log(`Session ${sessionId} successfully completed`);
      updateSignedTransactionsState({
        sessionId,
        status: TransactionBatchStatusesEnum.success
      });
      const refresh = () => {
        dispatch(triggerRefresh());
        refreshAccount();
      };

      refresh();
      setTimeout(refresh, 2000);
      setTimeout(refresh, 5000);
    },
    onFail: (sessionId: string, errorMessage?: string) => {
      console.log(`Session ${sessionId} failed: ${errorMessage}`);
      updateSignedTransactionsState({
        sessionId,
        status: TransactionBatchStatusesEnum.fail,
        errorMessage: errorMessage ?? 'Transaction failed'
      });
      dispatch(triggerRefresh());
      refreshAccount();
    }
  });

  useBatchTransactionsTracker({
    onSuccess: (sessionId) => {
      console.log(`Batch with session ${sessionId} successfully completed`);
      updateSignedTransactionsState({
        sessionId,
        status: TransactionBatchStatusesEnum.success
      });
      const refresh = () => {
        dispatch(triggerRefresh());
        refreshAccount();
      };

      refresh();
      setTimeout(refresh, 2000);
      setTimeout(refresh, 5000);
    },
    onFail: (sessionId, errorMessage) => {
      console.log(`Batch ${sessionId} failed: ${errorMessage}`);
      updateSignedTransactionsState({
        sessionId,
        status: TransactionBatchStatusesEnum.fail,
        errorMessage: errorMessage ?? 'Batch transaction failed'
      });
      dispatch(triggerRefresh());
      refreshAccount();
    }
  });

  return (
    <>
      {pendingSessionIds.map((sessionId) => (
        <SessionTracker key={sessionId} sessionId={sessionId} />
      ))}
    </>
  );
};
