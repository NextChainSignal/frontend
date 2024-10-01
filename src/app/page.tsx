import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, Menu, X } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <X className="h-8 w-8 text-primary" />
                <span className="ml-2 text-2xl font-bold">TradeCopy</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a
                  href="#"
                  className="border-primary text-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="border-transparent text-muted-foreground hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Traders
                </a>
                <a
                  href="#"
                  className="border-transparent text-muted-foreground hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  How It Works
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="ml-3 relative">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Copy Trades from</span>
              <span className="block text-primary">Top Performers</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Follow successful traders, copy their trades automatically, and earn profits. It&apos;s that simple.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Button size="lg">Get Started</Button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Top Traders</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Learn from the Best
            </p>
            <p className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto">
              These traders have consistently outperformed the market. Follow them and copy their success.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[1, 2, 3, 4].map((trader) => (
                <Card key={trader}>
                  <CardHeader>
                    <CardTitle>Trader {trader}</CardTitle>
                    <CardDescription>@trader{trader}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-semibold text-gray-900">+235%</span>
                      <span className="ml-2 text-sm font-medium text-green-600">↑ 22%</span>
                    </div>
                    <p className="mt-3 text-base text-muted-foreground">Profit in the last 30 days</p>
                    <Button className="mt-4" variant="outline">
                      Follow
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">A better way to trade.</h2>
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {[
              {
                name: 'Automated Copy Trading',
                description: 'Set it and forget it. Our platform automatically copies trades from your chosen traders.',
              },
              {
                name: 'Real-time Analytics',
                description: 'Track your performance and the performance of traders you follow in real-time.',
              },
              {
                name: 'Secure and Transparent',
                description: 'Your funds and data are always secure. All transactions are transparent and traceable.',
              },
            ].map((feature) => (
              <div key={feature.name}>
                <dt>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="bg-primary">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            <span className="block">Ready to start copying?</span>
            <span className="block">Create an account now.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-foreground/90">
            Join thousands of traders who are already benefiting from our platform. It&apos;s free to start!
          </p>
          <Button size="lg" variant="secondary" className="mt-8">
            Sign up for free
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {['Facebook', 'Instagram', 'Twitter', 'GitHub'].map((item) => (
              <a key={item} href="#" className="text-muted-foreground hover:text-gray-500">
                <span className="sr-only">{item}</span>
                <div className="h-6 w-6" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-muted-foreground">
              &copy; 2024 TradeCopy, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Home
