'use client'

import React, { useState } from 'react'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, ArrowDownRight, Newspaper } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Slider } from '@radix-ui/themes'

const FuturesDashboard = () => {
  const [symbol, setSymbol] = useState('BINANCE:BTCUSDT')
  const [tradeType, setTradeType] = useState('open')
  const [orderType, setOrderType] = useState('limit')
  const [amount, setAmount] = useState('')
  const [leverage, setLeverage] = useState(10)
  const marketOverview = [
    { symbol: 'BTCUSDT', price: '34,567.89', change: '+2.34%', volume: '1.2B' },
    { symbol: 'ETHUSDT', price: '2,345.67', change: '-1.23%', volume: '789M' },
    { symbol: 'BNBUSDT', price: '345.67', change: '+0.45%', volume: '234M' },
  ]

  const latestNews = [
    { title: 'Bitcoin Surges Past $35,000', time: '2 hours ago' },
    { title: 'Ethereum 2.0 Upgrade on Track', time: '5 hours ago' },
    { title: 'New Crypto Regulations in EU', time: '1 day ago' },
  ]
  const handleTrade = (direction: 'long' | 'short') => {
    console.log(`${tradeType === 'open' ? 'Opening' : 'Closing'} ${direction} position`)
    console.log(`Symbol: ${symbol}`)
    console.log(`Order Type: ${orderType}`)
    console.log(`Amount: ${amount}`)
    console.log(`Leverage: ${leverage}x`)
  }
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Select onValueChange={(value) => setSymbol(value)} defaultValue={symbol}>
              <SelectTrigger className="w-[180px] mb-4">
                <SelectValue placeholder="Select trading pair" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BINANCE:BTCUSDT">BTCUSDT</SelectItem>
                <SelectItem value="BINANCE:ETHUSDT">ETHUSDT</SelectItem>
                <SelectItem value="BINANCE:BNBUSDT">BNBUSDT</SelectItem>
              </SelectContent>
            </Select>
            <div className="h-[600px]">
              <AdvancedRealTimeChart
                theme="dark"
                symbol={symbol}
                interval="D"
                container_id="tradingview_chart"
                withdateranges={true}
                allow_symbol_change={false}
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Trade</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={tradeType} onValueChange={setTradeType}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="open">Open Position</TabsTrigger>
                  <TabsTrigger value="close">Close Position</TabsTrigger>
                </TabsList>
                <TabsContent value="open">
                  <Tabs value={orderType} onValueChange={setOrderType}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="limit">Limit</TabsTrigger>
                      <TabsTrigger value="market">Market</TabsTrigger>
                      <TabsTrigger value="stop">Stop</TabsTrigger>
                    </TabsList>
                    <TabsContent value="limit">
                      <div className="space-y-4 mt-4">
                        <div>
                          <Label>Price</Label>
                          <Input type="number" placeholder="Enter limit price" />
                        </div>
                        <div>
                          <Label>Amount</Label>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Leverage: {leverage}x</Label>
                          <Slider
                            value={[leverage]}
                            onValueChange={(value) => setLeverage(value[0])}
                            max={100}
                            step={1}
                          />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="market">
                      <div className="space-y-4 mt-4">
                        <div>
                          <Label>Amount</Label>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Leverage: {leverage}x</Label>
                          <Slider
                            value={[leverage]}
                            onValueChange={(value) => setLeverage(value[0])}
                            max={100}
                            step={1}
                          />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="stop">
                      <div className="space-y-4 mt-4">
                        <div>
                          <Label>Stop Price</Label>
                          <Input type="number" placeholder="Enter stop price" />
                        </div>
                        <div>
                          <Label>Limit Price</Label>
                          <Input type="number" placeholder="Enter limit price" />
                        </div>
                        <div>
                          <Label>Amount</Label>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Leverage: {leverage}x</Label>
                          <Slider
                            value={[leverage]}
                            onValueChange={(value) => setLeverage(value[0])}
                            max={100}
                            step={1}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
                <TabsContent value="close">
                  <Tabs value={orderType} onValueChange={setOrderType}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="limit">Limit</TabsTrigger>
                      <TabsTrigger value="market">Market</TabsTrigger>
                      <TabsTrigger value="stop">Stop</TabsTrigger>
                    </TabsList>
                    <TabsContent value="limit">
                      <div className="space-y-4 mt-4">
                        <div>
                          <Label>Price</Label>
                          <Input type="number" placeholder="Enter limit price" />
                        </div>
                        <div>
                          <Label>Amount</Label>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="market">
                      <div className="space-y-4 mt-4">
                        <div>
                          <Label>Amount</Label>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="stop">
                      <div className="space-y-4 mt-4">
                        <div>
                          <Label>Stop Price</Label>
                          <Input type="number" placeholder="Enter stop price" />
                        </div>
                        <div>
                          <Label>Limit Price</Label>
                          <Input type="number" placeholder="Enter limit price" />
                        </div>
                        <div>
                          <Label>Amount</Label>
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </TabsContent>
              </Tabs>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Button onClick={() => handleTrade('long')} className="bg-green-500 hover:bg-green-600">
                  {tradeType === 'open' ? 'Open Long' : 'Close Long'}
                </Button>
                <Button onClick={() => handleTrade('short')} className="bg-red-500 hover:bg-red-600">
                  {tradeType === 'open' ? 'Open Short' : 'Close Short'}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Market Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>24h Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {marketOverview.map((item) => (
                    <TableRow key={item.symbol}>
                      <TableCell>{item.symbol}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell className={item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                        {item.change.startsWith('+') ? (
                          <ArrowUpRight className="inline mr-1" size={16} />
                        ) : (
                          <ArrowDownRight className="inline mr-1" size={16} />
                        )}
                        {item.change}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Latest News</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {latestNews.map((news, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Newspaper className="mt-1 text-primary" size={16} />
                    <div>
                      <p className="font-medium">{news.title}</p>
                      <p className="text-sm text-muted-foreground">{news.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-4">
                View All News
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FuturesDashboard
