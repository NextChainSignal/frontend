'use client'
import '@/styles/tailwind.css'
import '@radix-ui/themes/styles.css'
import '@solana/wallet-adapter-react-ui/styles.css'
import { Theme } from '@radix-ui/themes'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Header from '@/components/header'
import { useMemo } from 'react'

const queryClient = new QueryClient()
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const network = WalletAdapterNetwork.Devnet

  const endpoint = useMemo(() => clusterApiUrl(network), [])
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    [],
  )
  return (
    <QueryClientProvider client={queryClient}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Theme accentColor="violet" grayColor="slate" radius="medium" scaling="100%">
              <Header />
              {children}
            </Theme>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </QueryClientProvider>
  )
}
