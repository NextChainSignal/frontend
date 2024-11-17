import React, { useState } from 'react'
import { X } from 'lucide-react'

interface CopyTradeModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (amount: number, stopLossPercentage: number) => void
}

export default function CopyTradeModal({ isOpen, onClose, onConfirm }: CopyTradeModalProps) {
  const [amount, setAmount] = useState('')
  const [stopLossPercentage, setStopLossPercentage] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onConfirm(Number(amount), Number(stopLossPercentage))
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4">复制交易设置</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">跟单金额</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">止损比例 (%)</label>
            <input
              type="number"
              value={stopLossPercentage}
              onChange={(e) => setStopLossPercentage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            确认
          </button>
        </form>
      </div>
    </div>
  )
}
