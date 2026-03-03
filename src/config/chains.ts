import { AppKitNetwork, sepolia, defineChain } from '@reown/appkit/networks';
import { sepolia as sepoliaViem } from 'viem/chains';

export const DEFAULT_CHAIN = sepolia;
export const DEFAULT_CHAIN_VIEM = sepoliaViem;

const horizen = defineChain({
  id: 26514,
  caipNetworkId: 'eip155:26514',
  chainNamespace: 'eip155',
  name: 'Horizen',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://horizen.calderachain.xyz/http'],
    },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://horizen.calderaexplorer.xyz' },
  },
  contracts: {},
});

export const CHAINS: [AppKitNetwork, ...AppKitNetwork[]] = [sepolia, horizen];

export const CHAIN_IDS: (number | string)[] = CHAINS.map((chain) => chain.id);
