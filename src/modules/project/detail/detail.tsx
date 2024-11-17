import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AddFundsDialog } from '@/modules/project/detail/AddFundsDialog'
import { RemoveFundsDialog } from '@/modules/project/detail/RemoveFundsDialog'
import { StartProjectDialog } from '@/modules/project/detail/StartProjectDialog'
import { CloseProjectDialog } from '@/modules/project/detail/CloseProjectDialog'
import { ShareLinkDialog } from '@/modules/project/detail/ShareLinkDialog'
import { TradeDialog } from '@/modules/project/detail/TradeDialog'
import { formatNumber, formatDate } from '@/lib/utils/format'
import { DataTable } from '@/components/DataTable'

interface Project {
  id: string
  name: string
  status: 'open' | 'running' | 'closed'
  coinPair: string
  unrealizedPnL: number
  realizedPnL: number
  totalValue: number
  availableBalance: number
  aum: number
  followersCount: number
  profitShare: number
  minFollowAmount: number
  holdings: any[]
  trades: any[]
  balanceHistory: any[]
  followers: any[]
}

const statusColors = {
  open: 'bg-blue-500',
  running: 'bg-green-500',
  closed: 'bg-gray-500',
}

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isRemoveOpen, setIsRemoveOpen] = useState(false)
  const [isTradeOpen, setIsTradeOpen] = useState(false)
  const [isStartOpen, setIsStartOpen] = useState(false)
  const [isCloseOpen, setIsCloseOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)

  const holdingsColumns = [
    { accessorKey: 'asset', header: '资产' },
    {
      accessorKey: 'amount',
      header: '持有数量',
      cell: ({ row }) => formatNumber(row.original.amount),
    },
    {
      accessorKey: 'avgBuyPrice',
      header: '买入均价',
      cell: ({ row }) => formatNumber(row.original.avgBuyPrice),
    },
    {
      accessorKey: 'unrealizedPnL',
      header: '未实现盈亏',
      cell: ({ row }) => formatNumber(row.original.unrealizedPnL),
    },
    {
      accessorKey: 'realizedPnL',
      header: '已实现盈亏',
      cell: ({ row }) => formatNumber(row.original.realizedPnL),
    },
    {
      accessorKey: 'updatedAt',
      header: '更新时间',
      cell: ({ row }) => formatDate(row.original.updatedAt),
    },
  ]

  const tradeHistoryColumns = [
    {
      accessorKey: 'executedAt',
      header: '执行时间',
      cell: ({ row }) => formatDate(row.original.executedAt),
    },
    { accessorKey: 'pair', header: '交易对' },
    { accessorKey: 'direction', header: '方向' },
    {
      accessorKey: 'amount',
      header: '成交数量',
      cell: ({ row }) => formatNumber(row.original.amount),
    },
    {
      accessorKey: 'price',
      header: '成交价格',
      cell: ({ row }) => formatNumber(row.original.price),
    },
    {
      accessorKey: 'total',
      header: '总计',
      cell: ({ row }) => formatNumber(row.original.total),
    },
  ]

  const balanceHistoryColumns = [
    { accessorKey: 'coin', header: '币种' },
    {
      accessorKey: 'time',
      header: '时间',
      cell: ({ row }) => formatDate(row.original.time),
    },
    {
      accessorKey: 'amount',
      header: '数量',
      cell: ({ row }) => formatNumber(row.original.amount),
    },
    { accessorKey: 'fromWallet', header: '转出钱包' },
    { accessorKey: 'toWallet', header: '转入钱包' },
  ]

  const followersColumns = [
    { accessorKey: 'userId', header: '用户ID' },
    {
      accessorKey: 'amount',
      header: '金额',
      cell: ({ row }) => formatNumber(row.original.amount),
    },
    {
      accessorKey: 'unrealizedPnL',
      header: '未实现盈亏',
      cell: ({ row }) => formatNumber(row.original.unrealizedPnL),
    },
    {
      accessorKey: 'realizedPnL',
      header: '已实现盈亏',
      cell: ({ row }) => formatNumber(row.original.realizedPnL),
    },
    {
      accessorKey: 'roi',
      header: '收益率',
      cell: ({ row }) => `${formatNumber(row.original.roi)}%`,
    },
    { accessorKey: 'status', header: '跟单状态' },
  ]

  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">{project.name}</h1>
                <Badge className={`${statusColors[project.status]} text-white`}>{project.status.toUpperCase()}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">项目ID</p>
                  <p className="font-medium">{project.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">交易币种</p>
                  <p className="font-medium">{project.coinPair}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">分润比例</p>
                  <p className="font-medium">{project.profitShare}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">最小跟单金额</p>
                  <p className="font-medium">{formatNumber(project.minFollowAmount)} USDC</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">未实现盈亏</p>
                <p className={`font-medium ${project.unrealizedPnL >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {formatNumber(project.unrealizedPnL)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">已实现盈亏</p>
                <p className={`font-medium ${project.realizedPnL >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {formatNumber(project.realizedPnL)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">资产估值</p>
                <p className="font-medium">{formatNumber(project.totalValue)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">可用余额</p>
                <p className="font-medium">{formatNumber(project.availableBalance)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">资产管理规模</p>
                <p className="font-medium">{formatNumber(project.aum)} USDC</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">跟单人数</p>
                <p className="font-medium">{project.followersCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setIsAddOpen(true)} disabled={project.status === 'closed'}>
          Add
        </Button>
        <Button
          onClick={() => setIsRemoveOpen(true)}
          disabled={project.status === 'closed' || project.availableBalance <= 10}
        >
          Remove
        </Button>
        <Button onClick={() => setIsTradeOpen(true)} disabled={project.status !== 'running'}>
          Trade
        </Button>
        <Button onClick={() => setIsStartOpen(true)} disabled={project.status !== 'open'}>
          Start
        </Button>
        <Button onClick={() => setIsCloseOpen(true)} disabled={project.status === 'closed'}>
          Close
        </Button>
        <Button onClick={() => setIsShareOpen(true)} disabled={project.status === 'closed'}>
          Share Link
        </Button>
      </div>

      <Tabs defaultValue="holdings" className="w-full">
        <TabsList>
          <TabsTrigger value="holdings">持有币种</TabsTrigger>
          <TabsTrigger value="trades">交易历史</TabsTrigger>
          <TabsTrigger value="balance">余额历史</TabsTrigger>
          <TabsTrigger value="followers">跟单者</TabsTrigger>
        </TabsList>

        <TabsContent value="holdings">
          <DataTable columns={holdingsColumns} data={project.holdings} />
        </TabsContent>

        <TabsContent value="trades">
          <DataTable columns={tradeHistoryColumns} data={project.trades} />
        </TabsContent>

        <TabsContent value="balance">
          <DataTable columns={balanceHistoryColumns} data={project.balanceHistory} />
        </TabsContent>

        <TabsContent value="followers">
          <DataTable columns={followersColumns} data={project.followers} />
        </TabsContent>
      </Tabs>

      <AddFundsDialog open={isAddOpen} onOpenChange={setIsAddOpen} project={project} />
      <RemoveFundsDialog open={isRemoveOpen} onOpenChange={setIsRemoveOpen} project={project} />
      <TradeDialog open={isTradeOpen} onOpenChange={setIsTradeOpen} project={project} />
      <StartProjectDialog open={isStartOpen} onOpenChange={setIsStartOpen} project={project} />
      <CloseProjectDialog open={isCloseOpen} onOpenChange={setIsCloseOpen} project={project} />
      <ShareLinkDialog open={isShareOpen} onOpenChange={setIsShareOpen} project={project} />
    </div>
  )
}
