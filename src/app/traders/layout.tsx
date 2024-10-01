'use client'
import '@/styles/tailwind.css'
import '@radix-ui/themes/styles.css'
import { cn } from '@/lib/utils'
import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { wagmiConfig } from '@/wagmi.config'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={cn('min-h-screen bg-background font-sans antialiased')}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <WagmiProvider config={wagmiConfig}>
          <QueryClientProvider client={queryClient}>
            <Theme accentColor="violet" grayColor="slate" radius="medium" scaling="100%">
              {children}
            </Theme>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  )
}
