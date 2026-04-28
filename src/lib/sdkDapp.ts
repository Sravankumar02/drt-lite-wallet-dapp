import { nativeAuth } from '@sravankumar02/sdk-dapp/services/nativeAuth/nativeAuth';
import { replyToDapp as originalReplyToDapp } from '@sravankumar02/js-sdk-web-wallet-io/out/replyToDapp/replyToDapp';
import { ExtendedReplyWithPostMessageType, ReplyWithRedirectType } from 'types';

export { getRewaLabel } from '@sravankumar02/sdk-dapp/utils/network/getRewaLabel';
export { getTransactions } from '@sravankumar02/sdk-dapp/apiCalls/transactions/getTransactions';
export { sendTransactions } from '@sravankumar02/sdk-dapp/services/transactions/sendTransactions';
export { sendBatchTransactions as sendBatchTransactionsSdkDapp } from '@sravankumar02/sdk-dapp/services/transactions/sendBatchTransactions';
export { refreshAccount } from '@sravankumar02/sdk-dapp/utils/account/refreshAccount';
export { logout } from '@sravankumar02/sdk-dapp/utils/logout';
export { signTransactions } from '@sravankumar02/sdk-dapp/services/transactions/signTransactions';
export { trimUsernameDomain } from '@sravankumar02/sdk-dapp/hooks/account/helpers';
export { getAccount } from '@sravankumar02/sdk-dapp/utils/account/getAccount';
export { getAddress } from '@sravankumar02/sdk-dapp/utils/account/getAddress';
export { newTransaction } from '@sravankumar02/sdk-dapp/models';
export { useLoginService } from '@sravankumar02/sdk-dapp/hooks/login/useLoginService';
export { decodeNativeAuthToken } from '@sravankumar02/sdk-dapp/services/nativeAuth/helpers/decodeNativeAuthToken';
export { getIsNativeAuthSingingForbidden } from '@sravankumar02/sdk-dapp/services/nativeAuth/helpers/getIsNativeAuthSingingForbidden';
export { decodeLoginToken } from '@sravankumar02/sdk-dapp/services/nativeAuth/helpers/decodeLoginToken';
export { getWebviewToken } from '@sravankumar02/sdk-dapp/utils/account/getWebviewToken';
export { getAccountProviderType } from '@sravankumar02/sdk-dapp/utils/account/getAccountProviderType';

const { getToken } = nativeAuth();
export { getToken };
export { loginWithExternalProvider } from '@sravankumar02/sdk-dapp/utils/account/loginWithExternalProvider';
export { addressIsValid } from '@sravankumar02/sdk-dapp/utils/account/addressIsValid';
export { getInterpretedTransaction } from '@sravankumar02/sdk-dapp/utils/transactions/getInterpretedTransaction';
export { formatAmount } from '@sravankumar02/sdk-dapp/utils/operations/formatAmount';
export { parseAmount } from '@sravankumar02/sdk-dapp/utils/operations/parseAmount';
export { getIsProviderEqualTo } from '@sravankumar02/sdk-dapp/utils/account/getIsProviderEqualTo';
export { removeTransactionsToSign } from '@sravankumar02/sdk-dapp/services/transactions/clearTransactions';
export { extractSessionId } from '@sravankumar02/sdk-dapp/hooks/transactions/helpers/extractSessionId';
export { checkIsValidSender } from '@sravankumar02/sdk-dapp/hooks/transactions/helpers/checkIsValidSender';
export { useAddressScreens } from '@sravankumar02/sdk-dapp/hooks/login/useAddressScreens';
export { useBatchTransactionsTracker } from '@sravankumar02/sdk-dapp/hooks/transactions/batch/tracker/useBatchTransactionsTracker';
export { useCheckBatch } from '@sravankumar02/sdk-dapp/hooks/transactions/batch/tracker/useCheckBatch';
export { useGetAccount } from '@sravankumar02/sdk-dapp/hooks/account/useGetAccount';
export { useGetAccountInfo } from '@sravankumar02/sdk-dapp/hooks/account/useGetAccountInfo';
export { useGetAccountProvider } from '@sravankumar02/sdk-dapp/hooks/account/useGetAccountProvider';
export { useGetActiveTransactionsStatus } from '@sravankumar02/sdk-dapp/hooks/transactions/useGetActiveTransactionsStatus';
export { useGetIsLoggedIn } from '@sravankumar02/sdk-dapp/hooks/account/useGetIsLoggedIn';
export { useGetIsWalletConnectV2Initialized } from '@sravankumar02/sdk-dapp/hooks/account/useGetIsWalletConnectV2Initialized';
export { useGetLastPendingTransactionHash } from '@sravankumar02/sdk-dapp/hooks/transactions/useGetLastPendingTransactionHash';
export { useGetLastSignedMessageSession } from '@sravankumar02/sdk-dapp/hooks/signMessage/useGetLastSignedMessageSession';
export { useGetSignMessageSession } from '@sravankumar02/sdk-dapp/hooks/signMessage/useGetSignMessageSession';
export { useGetLoginInfo } from '@sravankumar02/sdk-dapp/hooks/account/useGetLoginInfo';
export { useGetNetworkConfig } from '@sravankumar02/sdk-dapp/hooks/useGetNetworkConfig';
export { useGetPendingTransactions } from '@sravankumar02/sdk-dapp/hooks/transactions/useGetPendingTransactions';
export { useGetSignMessageInfoStatus } from '@sravankumar02/sdk-dapp/hooks/signMessage/useGetSignedMessageStatus';
export { useGetSignTransactionsError } from '@sravankumar02/sdk-dapp/hooks/transactions/useGetSignTransactionsError';
export { useGetSignedTransactions } from '@sravankumar02/sdk-dapp/hooks/transactions/useGetSignedTransactions';
export { useSendBatchTransactions } from '@sravankumar02/sdk-dapp/hooks/transactions/batch/useSendBatchTransactions';
export { useSignMessage } from '@sravankumar02/sdk-dapp/hooks/signMessage/useSignMessage';
export { useSignTransactions } from '@sravankumar02/sdk-dapp/hooks/transactions/useSignTransactions';
export { useSignTransactionsCommonData } from '@sravankumar02/sdk-dapp/hooks/transactions/useSignTransactionsCommonData';
export { useSignTransactionsWithDevice } from '@sravankumar02/sdk-dapp/hooks/transactions/useSignTransactionsWithDevice';
export { useSignTransactionsWithLedger } from '@sravankumar02/sdk-dapp/hooks/transactions/useSignTransactionsWithLedger';
export { useTrackTransactionStatus } from '@sravankumar02/sdk-dapp/hooks/transactions/useTrackTransactionStatus';
export { verifyMessage } from '@sravankumar02/sdk-dapp/hooks/signMessage/verifyMessage';
export { useTransactionsTracker } from '@sravankumar02/sdk-dapp/hooks/transactions/useTransactionsTracker';
export { useGetAccountFromApi } from '@sravankumar02/sdk-dapp/apiCalls/accounts/useGetAccountFromApi';
export {
  deleteTransactionToast,
  removeAllSignedTransactions,
  removeAllTransactionsToSign
} from '@sravankumar02/sdk-dapp/services/transactions/clearTransactions';
export {
  setTransactionsDisplayInfoState,
  setTransactionsToSignedState,
  updateSignedTransactionsState
} from '@sravankumar02/sdk-dapp/services/transactions/updateSignedTransactions';
export { sendBatchTransactions } from '@sravankumar02/sdk-dapp/services/transactions/sendBatchTransactions';
export { useAxiosInterceptorContext } from '@sravankumar02/sdk-dapp/wrappers/AxiosInterceptorContext';
export { storage } from '@sravankumar02/sdk-dapp/utils/storage';
export { addNewCustomToast } from '@sravankumar02/sdk-dapp/utils/toasts';
export {
  maxDecimals,
  stringIsFloat,
  stringIsInteger
} from '@sravankumar02/sdk-dapp/utils/validation';

export const replyToDapp: (
  props: {
    callbackUrl: string;
    webwiewApp?: HTMLIFrameElement | null;
    postMessageData?: ExtendedReplyWithPostMessageType;
    transactionData?: ReplyWithRedirectType['transactionData'];
  },
  extensionReplyToDapp?: (props: ExtendedReplyWithPostMessageType) => void
) => void = originalReplyToDapp as any; // use as any to allow extending input params
