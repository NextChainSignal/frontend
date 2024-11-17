import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export function RemoveFundsDialog({ open, onOpenChange, project }) {
  const [amount, setAmount] = useState('')
  const maxAmount = Math.max(0, project.availableBalance - 10)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle remove funds logic here
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Remove Funds</DialogTitle>
          <DialogDescription>Remove funds from your project. Maximum amount is {maxAmount} USDC.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="amount">Amount (USDC)</Label>
            <Input
              id="amount"
              type="number"
              min="0"
              max={maxAmount}
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
          <Button type="submit" className="w-full">
            Confirm
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
