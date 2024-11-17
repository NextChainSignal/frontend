'use client'
import { ProjectDetail } from '@/modules/project/detail/detail'
import { mockProjects } from '@/__mocks__/project'
const ProjectDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        <ProjectDetail project={mockProjects[0]} />
      </div>
    </div>
  )
}
export default ProjectDetailPage
