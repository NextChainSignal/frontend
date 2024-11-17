import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function StartProjectDialog({ open, onOpenChange, project }) {
  const handleStart = () => {
    // Handle start project logic here
    onOpenChange(false)
  }

  const canStart = project.availableBalance >= 10 && project.followers.length >= 1

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Start Project</DialogTitle>
          <DialogDescription>
            Are you sure you want to start this project? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {!canStart && (
            <p className="text-red-500">
              {project.availableBalance < 10 && 'Insufficient balance. '}
              {project.followers.length < 1 && 'Need at least one follower.'}
            </p>
          )}
          <Button onClick={handleStart} disabled={!canStart} className="w-full">
            Start Project
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
