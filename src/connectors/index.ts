import { Web3Provider } from '@ethersproject/providers'
import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react'
import { InjectedConnector } from '@web3-react/injected-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import UNISWAP_LOGO_URL from '../assets/svg/logo.svg'
import ClvParaIcon from '../assets/svg/clover_para.svg'
import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from '../constants/chains'
import getLibrary from '../utils/getLibrary'
import { FortmaticConnector } from './Fortmatic'
import { NetworkConnector } from './NetworkConnector'
import { CloverConnector } from '@clover-network/clover-connector'

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY
const FORMATIC_KEY = process.env.REACT_APP_FORTMATIC_KEY
const PORTIS_ID = process.env.REACT_APP_PORTIS_ID

if (typeof INFURA_KEY === 'undefined') {
  throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
}

export const NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.RINKEBY]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.ROPSTEN]: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.GOERLI]: `https://goerli.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.KOVAN]: `https://kovan.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.OPTIMISM]: `https://optimism-mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.OPTIMISTIC_KOVAN]: `https://optimism-kovan.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.ARBITRUM_ONE]: `https://arbitrum-mainnet.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.ARBITRUM_RINKEBY]: `https://arbitrum-rinkeby.infura.io/v3/${INFURA_KEY}`,
  [SupportedChainId.CLV]: `https://api-para.clover.finance`,
}

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 1024,
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
})

const SUPPORTED_CHAINIDS = [1, 3, 4, 56, 97, 1023, 1024]
export const clvConnector = new CloverConnector({ supportedChainIds: SUPPORTED_CHAINIDS })

export const gnosisSafe = new SafeAppConnector()

export const walletconnect = new WalletConnectConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
  rpc: NETWORK_URLS,
  qrcode: true,
})

// mainnet only
export const fortmatic = new FortmaticConnector({
  apiKey: FORMATIC_KEY ?? '',
  chainId: 1,
})

// mainnet only
export const portis = new PortisConnector({
  dAppId: PORTIS_ID ?? '',
  networks: [1],
})

// mainnet only
export const walletlink = new WalletLinkConnector({
  url: NETWORK_URLS[SupportedChainId.MAINNET],
  appName: 'Uniswap',
  appLogoUrl: UNISWAP_LOGO_URL,
})

export const CLOVER_PARACHAIN_NETWORK_EVM = {
  type: 'rpc',
  icon: ClvParaIcon,
  rpcUrl: 'https://api-para.clover.finance',
  chainId: '0x400',
  nickname: 'CLV P-Chain',
  ticker: 'CLV',
  paraId: 2002,
}

export const addWalletNetwork = async (provider: any, fromChain: any) => {
  if (fromChain?.chainId && provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: fromChain?.chainId,
            chainName: fromChain?.nickname,
            nativeCurrency: {
              name: fromChain?.ticker,
              symbol: fromChain?.ticker,
              decimals: 18,
            },
            rpcUrls: [fromChain?.rpcUrl],
          },
        ],
      })
      return true
    } catch (e) {
      return false
    }
  } else {
    return true
  }
}

export const changeWalletNetwork = async (provider: any, fromChain: any) => {
  if (fromChain?.chainId && provider) {
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: fromChain?.chainId }],
      })
      return true
    } catch (error: any) {
      if (error.code === 4902) {
        return await addWalletNetwork(provider, fromChain)
      }
      return false
    }
  } else {
    return true
  }
}
