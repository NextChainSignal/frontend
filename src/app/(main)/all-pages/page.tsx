'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Search } from 'lucide-react'

// 定义页面路由类型
interface PageRoute {
  title: string
  path: string
  description?: string
  group: string
}

// 页面路由配置
const routes: PageRoute[] = [
  {
    title: '首页',
    path: '/',
    description: '网站主页',
    group: '基础页面',
  },
  {
    title: '注册',
    path: '/signup',
    description: '注册新账户',
    group: '基础页面',
  },
  {
    title: '个人信息',
    path: '/user/1',
    description: '查看个人信息',
    group: '基础页面',
  },
  {
    title: '登录',
    path: '/signin',
    description: '登录账户',
    group: '基础页面',
  },
  {
    title: '项目',
    path: '/project/1',
    description: '查看项目详细信息并进行跟单',
    group: '交易',
  },
  {
    title: '项目详情',
    path: '/project/join/1',
    description: '查看项目详细信息并进行跟单',
    group: '交易',
  },
  {
    title: '跟单项目',
    path: '/project/create',
    description: '创建跟单项目',
    group: '交易',
  },
]

export default function SitemapPage() {
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState('')

  // 按组分类路由
  const groupedRoutes = routes.reduce(
    (acc, route) => {
      if (!acc[route.group]) {
        acc[route.group] = []
      }
      acc[route.group].push(route)
      return acc
    },
    {} as Record<string, PageRoute[]>,
  )

  // 搜索过滤
  const filteredGroups = Object.entries(groupedRoutes).reduce(
    (acc, [group, routes]) => {
      const filteredRoutes = routes.filter(
        (route) =>
          route.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          route.description?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      if (filteredRoutes.length > 0) {
        acc[group] = filteredRoutes
      }
      return acc
    },
    {} as Record<string, PageRoute[]>,
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">网站导航</h1>

      {/* 搜索框 */}
      <div className="mb-8 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="搜索页面..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 分组显示路由 */}
      <div className="space-y-8">
        {Object.entries(filteredGroups).map(([group, routes]) => (
          <div key={group} className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">{group}</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`block p-4 rounded-lg border hover:border-blue-500 transition-colors ${
                    pathname === route.path ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">{route.title}</h3>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                  {route.description && <p className="mt-1 text-sm text-gray-500">{route.description}</p>}
                  <div className="mt-2 text-xs text-gray-400">{route.path}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 无搜索结果提示 */}
      {Object.keys(filteredGroups).length === 0 && (
        <div className="text-center py-8 text-gray-500">没有找到匹配的页面</div>
      )}
    </div>
  )
}
