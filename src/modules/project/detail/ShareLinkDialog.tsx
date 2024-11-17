import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function ShareLinkDialog({ open, onOpenChange, project }) {
  const shareLink = `${window.location.origin}/project/${project.id}`

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Project</DialogTitle>
          <DialogDescription>Share this link with others to let them follow your project.</DialogDescription>
        </DialogHeader>
        <div className="flex space-x-2">
          <Input value={shareLink} readOnly />
          <Button onClick={handleCopy}>Copy</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
