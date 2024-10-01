import '@/styles/tailwind.css'
import '@radix-ui/themes/styles.css'
import { cn } from '@/lib/utils'
import { Theme } from '@radix-ui/themes'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={cn('min-h-screen bg-background font-sans antialiased')}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Theme accentColor="violet" grayColor="slate" radius="medium" scaling="100%">
          {children}
        </Theme>
      </body>
    </html>
  )
}
