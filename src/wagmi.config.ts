import { createClient } from 'viem'
import { createConfig, http } from 'wagmi'
import { linea, mainnet, sepolia } from 'wagmi/chains'
import { metaMask } from '@wagmi/connectors'
export const wagmiConfig = createConfig({
  chains: [linea, mainnet, sepolia],
  ssr: true,

  connectors: [metaMask()],
  client({ chain }) {
    return createClient({
      chain,
      transport: http(),
    })
  },
})
