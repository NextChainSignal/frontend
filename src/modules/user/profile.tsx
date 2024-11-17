'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip } from '@/components/ui/tooltip'

export default function UserProfile() {
  const [walletAddress, setWalletAddress] = useState('')

  const handleBindWallet = () => {
    // 处理绑定钱包的逻辑
    console.log('Binding wallet:', walletAddress)
  }

  const handleWithdraw = () => {
    // 处理撤回的逻辑
    console.log('Withdrawing funds')
  }

  const handleTransfer = () => {
    // 处理转账的逻辑
    console.log('Transferring funds')
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>用户信息</CardTitle>
          <CardDescription>查看和管理您的账户信息</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-muted-foreground">用户ID: 123456</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>用户邮箱</Label>
              <p>user@example.com</p>
            </div>
            <div>
              <Label>用户名称</Label>
              <p>John Doe</p>
            </div>
            <div>
              <Label>余额</Label>
              <p>1000 USDT</p>
            </div>
            <div>
              <Label>钱包地址</Label>
              <p>0x1234...5678</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">绑定钱包地址</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>绑定钱包地址</DialogTitle>
                <DialogDescription>请输入您要绑定的钱包地址。</DialogDescription>
              </DialogHeader>
              <Input
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="输入钱包地址"
              />
              <DialogFooter>
                <Button onClick={handleBindWallet}>确认绑定</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button onClick={handleWithdraw}>
            <ArrowUpRight className="mr-2 h-4 w-4" /> 撤回
          </Button>
          <Button onClick={handleTransfer}>
            <ArrowDownLeft className="mr-2 h-4 w-4" /> 转账
          </Button>
        </CardFooter>
      </Card>

      <Tabs defaultValue="earnings" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="earnings">收益明细</TabsTrigger>
          <TabsTrigger value="history">余额历史</TabsTrigger>
        </TabsList>
        <TabsContent value="earnings">
          <Card>
            <CardHeader>
              <CardTitle>收益明细</CardTitle>
              <CardDescription>查看您参与的所有项目收益</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>资产</TableHead>
                    <TableHead>持有数量</TableHead>
                    <TableHead>买入均价</TableHead>
                    <TableHead>已实现盈亏</TableHead>
                    <TableHead>项目名称</TableHead>
                    <TableHead>分润金额</TableHead>
                    <TableHead>手续费</TableHead>
                    <TableHead>收益</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>BTC</TableCell>
                    <TableCell>0.5</TableCell>
                    <TableCell>$30,000</TableCell>
                    <TableCell>$2,500</TableCell>
                    <TableCell>
                      <Button variant="link" onClick={() => console.log('Navigate to project details')}>
                        比特币交易
                      </Button>
                    </TableCell>
                    <TableCell>$50</TableCell>
                    <TableCell>$25</TableCell>
                    <TableCell>$2,425</TableCell>
                  </TableRow>
                  {/* 可以添加更多行 */}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>余额历史</CardTitle>
              <CardDescription>您的账户余额变动历史</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>币种</TableHead>
                    <TableHead>时间</TableHead>
                    <TableHead>数量</TableHead>
                    <TableHead>钱包地址</TableHead>
                    <TableHead>转入钱包</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>USDT</TableCell>
                    <TableCell>2024-11-17 14:30:00</TableCell>
                    <TableCell>+100</TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="link">0x1234...5678</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="break-all">0x1234567890123456789012345678901234567890</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="link">0xabcd...efgh</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="break-all">0xabcdefabcdefabcdefabcdefabcdefabcdefabcd</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BTC</TableCell>
                    <TableCell>2024-11-16 09:15:00</TableCell>
                    <TableCell>-0.05</TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="link">0x1234...5678</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="break-all">0x1234567890123456789012345678901234567890</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="link">0x9876...5432</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="break-all">0x9876543210987654321098765432109876543210</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ETH</TableCell>
                    <TableCell>2024-11-15 18:45:00</TableCell>
                    <TableCell>+2</TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="link">0x1234...5678</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="break-all">0x1234567890123456789012345678901234567890</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                    <TableCell>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="link">0xijkl...mnop</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="break-all">0xijklmnopijklmnopijklmnopijklmnopijklmnop</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
