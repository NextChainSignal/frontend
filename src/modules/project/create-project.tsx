import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useState, useEffect } from 'react'

const formSchema = z.object({
  programName: z.string().min(1).max(30),
  coinPair: z.string().min(1),
  amount: z.number().int().min(10),
  profitShare: z.number().int().min(1).max(100),
  minimumFollowAmount: z.number().int().min(10),
})

export function CreateProjectForm() {
  const [coinPairs, setCoinPairs] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      programName: '',
      coinPair: '',
      amount: 10,
      profitShare: 20,
      minimumFollowAmount: 10,
    },
  })

  useEffect(() => {
    const fetchCoinPairs = async () => {
      try {
        const response = await fetch('https://api.binance.com/api/v3/exchangeInfo')
        const data = await response.json()
        const usdtPairs = data.symbols
          .filter((symbol: any) => symbol.quoteAsset === 'USDT')
          .map((symbol: any) => symbol.symbol)
        setCoinPairs(usdtPairs)
      } catch (error) {
        console.error('Error fetching coin pairs:', error)
        setCoinPairs(['BTCUSDT']) // Fallback option
      } finally {
        setIsLoading(false)
      }
    }

    fetchCoinPairs()
  }, [])

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Create New Project</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="programName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Program Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Describe your program" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="coinPair"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Coin Pair</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a trading pair" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-[200px]">
                      {isLoading ? (
                        <SelectItem value="loading">Loading...</SelectItem>
                      ) : (
                        coinPairs.map((pair) => (
                          <SelectItem key={pair} value={pair}>
                            {pair}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount (USDC)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="At least 10"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profitShare"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profit Share (%)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      max="100"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="minimumFollowAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minimum Follow Amount (USDC)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="At least 10"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Create Project
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
