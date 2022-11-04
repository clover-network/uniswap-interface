import { Currency } from '@uniswap/sdk-core'
import { ExtendedEther, isClv } from 'constants/tokens'
import React, { useMemo } from 'react'
import styled from 'styled-components/macro'
import EthereumLogo from '../../assets/images/CLV_token.svg'
import ClvTokenLogo from '../../assets/images/CLV_token.svg'
import ClvBNBLogo from '../../assets/images/clv/BNB.png'
import ClvBUSDLogo from '../../assets/images/clv/BUSD.png'
import ClvDAILogo from '../../assets/images/clv/DAI.png'
import ClvMULTILogo from '../../assets/images/clv/MULTI.png'
import ClvUSDCLogo from '../../assets/images/clv/USDC.png'
import ClvUSDTLogo from '../../assets/images/clv/USDT.png'
import ClvWBTCLogo from '../../assets/images/clv/WBTC.png'
import ClvWETHLogo from '../../assets/images/clv/WETH.png'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/wrappedTokenInfo'
import Logo from '../Logo'

export const getCLVTokenLogoURL = (symbol: string) => {
  switch (symbol) {
    case 'BNB':
      return [ClvBNBLogo]
    case 'BUSD':
      return [ClvBUSDLogo]
    case 'DAI':
      return [ClvDAILogo]
    case 'MULTI':
      return [ClvMULTILogo]
    case 'USDC':
      return [ClvUSDCLogo]
    case 'USDT':
      return [ClvUSDTLogo]
    case 'WBTC':
      return [ClvWBTCLogo]
    case 'WETH':
      return [ClvWETHLogo]
    default:
      return []
  }
}

export const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/${address}/logo.png`

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  background-color: ${({ theme }) => theme.white};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
  ...rest
}: {
  currency?: Currency | null
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (!currency || currency.isNative) return []

    if (isClv(currency.chainId)) {
      if (currency.address === ExtendedEther.onChain(currency.chainId).wrapped.address) {
        return [ClvTokenLogo]
      } else if (currency.symbol) {
        return getCLVTokenLogoURL(currency.symbol)
      }
    }
    if (currency.isToken) {
      const defaultUrls = currency.chainId === 1 ? [getTokenLogoURL(currency.address)] : []
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, ...defaultUrls]
      }
      return defaultUrls
    }
    return []
  }, [currency, uriLocations])

  if (currency?.isNative) {
    return <StyledEthereumLogo src={EthereumLogo} alt="ethereum logo" size={size} style={style} {...rest} />
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} {...rest} />
}
