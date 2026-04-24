import { EnvironmentsEnum } from 'types';
import { NetworkType } from '../redux/slices';

export const sharedNetorks: NetworkType[] = [
  {
    default: false,
    id: EnvironmentsEnum.devnet,
    name: 'Devnet',
    apiAddress: 'http://localhost:3001',
    gatewayUrl: '',
    extrasApi: 'http://localhost:3000',
    // extrasApi: 'https://devnet-extras-api.dharitri.org',
    sampleAuthenticatedDomains: ['http://localhost:3001'],
    sovereignContractAddress: '',
    walletAddress: 'https://devnet-wallet.dharitri.org',
    faucet: true,
    WREWAid: '',
    socketAddress: 'ws://localhost:6002' // Explicit port mapping for stability
  },
  {
    default: false,
    id: EnvironmentsEnum.mainnet,
    name: 'Mainnet',
    apiAddress: 'https://api.dharitri.org',
    gatewayUrl: '',
    extrasApi: 'https://extras-api.dharitri.org',
    sampleAuthenticatedDomains: ['https://api.dharitri.org'],
    sovereignContractAddress: '',
    walletAddress: 'https://wallet.dharitri.org'
  },
  {
    default: false,
    id: EnvironmentsEnum.testnet,
    name: 'Testnet',
    apiAddress: 'https://testnet-api.dharitri.org',
    gatewayUrl: '',
    extrasApi: 'https://testnet-extras-api.dharitri.org',
    sampleAuthenticatedDomains: ['https://testnet-api.dharitri.org'],
    sovereignContractAddress: '',
    walletAddress: 'https://testnet-wallet.dharitri.org'
  },
  {
    default: false,
    id: 'sovereign',
    name: 'Sovereign',
    apiAddress: 'https://localhost:3002',
    gatewayUrl: '',
    extrasApi: 'https://localhost:3001',
    sampleAuthenticatedDomains: ['https://localhost:3002'],
    sovereignContractAddress: '',
    walletAddress: 'https://localhost:3000',
    WREWAid: 'WREWA-bd4d79',
    hrp: 'drt',
    faucet: true,
    hasRegisterToken: true,
    hasSovereignTransfer: true
  }
];
