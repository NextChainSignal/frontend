'use client'
import React, { useState } from 'react'
import { Copy, Share2, TrendingUp, Users, DollarSign, Percent, ArrowDownCircle } from 'lucide-react'
import { TradeProject } from './type'
import CopyTradeModal from './CopyTradeModal'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DataTable } from '@/components/DataTable'
import { formatDate, formatNumber } from '@/lib/utils/format'

interface ProjectDetailProps {
  project: TradeProject
}

export default function JoinProject({ project }: ProjectDetailProps) {
  const [showCopyModal, setShowCopyModal] = useState(false)

  const handleShare = () => {
    const shareLink = `https://example.com/trade/${project.id}`
    navigator.clipboard.writeText(shareLink)
    alert('分享链接已复制到剪贴板')
  }

  const handleCopyConfirm = (amount: number, stopLossPercentage: number) => {
    console.log('Copy confirmed:', { amount, stopLossPercentage, projectId: project.id })
    setShowCopyModal(false)
  }

  const status = [
    {
      label: '未实现盈亏',
      value: `$${project.unrealizedPnL.toLocaleString()}`,
      icon: TrendingUp,
      color: project.unrealizedPnL >= 0 ? 'text-green-500' : 'text-red-500',
    },
    {
      label: '跟单金额',
      value: `$${project.followAmount.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-blue-500',
    },
    {
      label: '跟单人数',
      value: project.followersCount.toString(),
      icon: Users,
      color: 'text-indigo-500',
    },
    {
      label: '资产管理规模',
      value: `$${project.aum.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-purple-500',
    },
    {
      label: '分润比例',
      value: `${project.profitSharingRatio}%`,
      icon: Percent,
      color: 'text-orange-500',
    },
    {
      label: '最小跟单金额',
      value: `$${project.minFollowAmount}`,
      icon: ArrowDownCircle,
      color: 'text-gray-500',
    },
  ]

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* 项目头部信息 */}
        <div className="px-6 py-8 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
              <div className="mt-2 flex items-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === '运行中' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {project.status}
                </span>
                <span className="ml-4 text-gray-500">交易币种: {project.currency}</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowCopyModal(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Copy className="w-4 h-4 mr-2" />
                跟单
              </button>
              <button
                onClick={handleShare}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Share2 className="w-4 h-4 mr-2" />
                分享
              </button>
            </div>
          </div>
        </div>

        {/* 统计数据网格 */}
        <div className="px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {status.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-lg p-6 transition-all duration-200 hover:shadow-md hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <div className={`rounded-md p-3 ${stat.color} bg-opacity-10`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                    <p className="mt-1 text-xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <Tabs defaultValue="holdings" className="w-full space-y-6">
          <TabsList className="w-full justify-start border-b">
            <TabsTrigger value="holdings" className="px-6">
              持有币种
            </TabsTrigger>
            <TabsTrigger value="trades" className="px-6">
              交易历史
            </TabsTrigger>
            <TabsTrigger value="followers" className="px-6">
              跟单者
            </TabsTrigger>
          </TabsList>

          <TabsContent value="holdings" className="mt-4">
            <DataTable columns={holdingsColumns} data={project.holdings} />
          </TabsContent>

          <TabsContent value="trades" className="mt-4">
            <DataTable columns={tradeHistoryColumns} data={project.trades} />
          </TabsContent>

          <TabsContent value="followers" className="mt-4">
            <DataTable columns={followersColumns} data={project.followers} />
          </TabsContent>
        </Tabs>
      </div>

      <CopyTradeModal isOpen={showCopyModal} onClose={() => setShowCopyModal(false)} onConfirm={handleCopyConfirm} />
    </div>
  )
}
