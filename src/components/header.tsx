'use client'

import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useEffect } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { useState } from 'react'

const Header = () => {
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  const [balance, setBalance] = useState(0)

  const checkBalance = async () => {
    if (publicKey == null) {
      return
    }
    const walletBalance = await connection.getBalance(publicKey, 'confirmed')
    const walletBalanceSOL = (walletBalance / LAMPORTS_PER_SOL).toFixed(2)
    setBalance(parseFloat(walletBalanceSOL))
    console.log(walletBalanceSOL)
    console.log(publicKey)
  }

  useEffect(() => {
    checkBalance()
  }, [publicKey])
  return (
    <div>
      <WalletMultiButton />
      <div>余额:&nbsp;{balance}&nbsp;SOL</div>
    </div>
  )
}
export default Header
