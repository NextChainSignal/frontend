import { mockProjects } from '@/__mocks__/joinProject'
import JoinProject from '@/modules/project/join/JoinProject'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '跟单项目',
  description: '查看和管理跟单交易项目',
}

export default function CopyTradingPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">跟单项目</h1>
      <JoinProject project={mockProjects[0]} />
    </main>
  )
}
