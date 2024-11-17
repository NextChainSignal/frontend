'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { X, TrendingUp, Copy, DollarSign } from 'lucide-react'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', email, password)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Trading Copy Tool</CardTitle>
          <CardDescription className="text-center">Connect, copy, and profit from top traders</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-2 rounded-full">
                <X className="h-6 w-6 text-blue-500" />
              </div>
              <span className="text-sm mt-1">Track</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-2 rounded-full">
                <Copy className="h-6 w-6 text-green-500" />
              </div>
              <span className="text-sm mt-1">Copy</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-100 p-2 rounded-full">
                <TrendingUp className="h-6 w-6 text-yellow-500" />
              </div>
              <span className="text-sm mt-1">Trade</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-2 rounded-full">
                <DollarSign className="h-6 w-6 text-purple-500" />
              </div>
              <span className="text-sm mt-1">Profit</span>
            </div>
          </div>
          <form onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full mt-6">
              Log In
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center text-gray-600 mt-4 w-full">
            Don &apos;t have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
