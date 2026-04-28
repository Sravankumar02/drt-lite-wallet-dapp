import { EnvironmentsEnum } from 'types';
import { sharedNetorks } from './sharedNetworks';
import { NetworkType } from '../redux/slices';

export * from './sharedConfig';

export const networks: NetworkType[] = [
  ...sharedNetorks,
  {
    default: true,
    id: EnvironmentsEnum.devnet,
    name: 'Gateway',
    apiAddress: '',
    gatewayUrl: 'https://certificate-vsnet-vice-consumers.trycloudflare.com',
    extrasApi: 'http://localhost:3000',
    sampleAuthenticatedDomains: [''],
    sovereignContractAddress: '',
    walletAddress: 'https://devnet-wallet.dharitri.org',
    WREWAid: ''
  }
];
