import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function CloseProjectDialog({ open, onOpenChange, project }) {
  const handleClose = () => {
    // Handle close project logic here
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Close Project</DialogTitle>
          <DialogDescription>
            Are you sure you want to close this project? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <Button onClick={handleClose} className="w-full">
          Close Project
        </Button>
      </DialogContent>
    </Dialog>
  )
}
