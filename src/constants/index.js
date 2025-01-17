import BNB from 'assets/bnb.svg';
import ETH from 'assets/eth.svg';

export const defaltChainId = 3;

export const NETWORK = {
  3: {
    chainId: 3,
    chainName: 'Ropsten Testnet',
    rpcUrls: ['https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
    blockExplorerUrls: ['https://ropsten.etherscan.io'],
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
      icon: ETH
    },
    contractAddress: '0x8c55458865D9e6054749Ad5932Ec66d540a7741a'
  },
  56: {
    chainId: 56,
    chainName: 'BSC Mainnet',
    rpcUrls: ['https://bsc-dataseed1.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com'],
    nativeCurrency: {
      name: 'Binance',
      symbol: 'BNB',
      decimals: 8,
      icon: BNB
    },
    contractAddress: '0xfdab2e5ddf0cac06414e852d7ca89566d2cabe2a'
  },
  97: {
    chainId: 97,
    chainName: 'BSC Testnet',
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    blockExplorerUrls: ['https://testnet.bscscan.com'],
    nativeCurrency: {
      name: 'Binance',
      symbol: 'BNB',
      decimals: 8,
      icon: BNB
    },
    contractAddress: '0x0E4C99742663aDe8B7034727BFdB6075243782E9'
  }
};