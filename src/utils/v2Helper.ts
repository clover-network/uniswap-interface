import { getCreate2Address } from '@ethersproject/address'
import { keccak256, pack } from '@ethersproject/solidity'
import { Token } from '@uniswap/sdk-core'
import * as v2sdk from '@uniswap/v2-sdk'
import { V2_FACTORY_ADDRESSES } from 'constants/addresses'

const INIT_CODE_HASH = '0x1892ee6b3b8f653471529d0b06a772bdc5588bb0b15607cb427c8148f70004a9'

export const computePairAddress = ({
  factoryAddress,
  tokenA,
  tokenB,
}: {
  factoryAddress: string
  tokenA: Token
  tokenB: Token
}): string => {
  const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA] // does safety checks
  return getCreate2Address(
    factoryAddress,
    keccak256(['bytes'], [pack(['address', 'address'], [token0.address, token1.address])]),
    INIT_CODE_HASH
  )
}

export function fixV2Sdk() {
  v2sdk.Pair.getAddress = function getAddress(tokenA, tokenB) {
    return computePairAddress({
      factoryAddress: V2_FACTORY_ADDRESSES[tokenA.chainId],
      tokenA,
      tokenB,
    })
  }
}
