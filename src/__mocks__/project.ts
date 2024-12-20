export const mockProjects = [
  {
    id: 'proj-001',
    name: 'BTC Trading Strategy',
    status: 'running',
    coinPair: 'BTC/USDC',
    unrealizedPnL: 1250.5,
    realizedPnL: -320.25,
    totalValue: 15000.0,
    availableBalance: 5000.0,
    aum: 25000.0,
    followersCount: 5,
    profitShare: 20,
    minFollowAmount: 100,
    holdings: [
      {
        asset: 'BTC',
        amount: 0.5,
        avgBuyPrice: 35000.0,
        unrealizedPnL: 750.0,
        realizedPnL: -150.0,
        updatedAt: '2024-01-15T10:30:00Z',
      },
    ],
    trades: [
      {
        executedAt: '2024-01-15T09:00:00Z',
        pair: 'BTC/USDC',
        direction: 'buy',
        amount: 0.5,
        price: 35000.0,
        total: 17500.0,
      },
    ],
    balanceHistory: [
      {
        coin: 'USDC',
        time: '2024-01-14T08:00:00Z',
        amount: 10000.0,
        fromWallet: '0x1234...5678',
        toWallet: 'Platform Wallet',
      },
    ],
    followers: [
      {
        userId: 'user001',
        amount: 5000.0,
        unrealizedPnL: 250.0,
        realizedPnL: -80.0,
        roi: 3.4,
        status: 'running',
      },
    ],
  },
  {
    id: 'proj-002',
    name: 'ETH Trading Bot',
    status: 'open',
    coinPair: 'ETH/USDC',
    unrealizedPnL: 0,
    realizedPnL: 0,
    totalValue: 10000.0,
    availableBalance: 10000.0,
    aum: 10000.0,
    followersCount: 0,
    profitShare: 15,
    minFollowAmount: 50,
    holdings: [],
    trades: [],
    balanceHistory: [
      {
        coin: 'USDC',
        time: '2024-01-15T14:00:00Z',
        amount: 10000.0,
        fromWallet: '0x9876...4321',
        toWallet: 'Platform Wallet',
      },
    ],
    followers: [],
  },
  {
    id: 'proj-003',
    name: 'SOL Trading Strategy',
    status: 'closed',
    coinPair: 'SOL/USDC',
    unrealizedPnL: 0,
    realizedPnL: 2500.75,
    totalValue: 0,
    availableBalance: 0,
    aum: 0,
    followersCount: 3,
    profitShare: 25,
    minFollowAmount: 200,
    holdings: [],
    trades: [
      {
        executedAt: '2024-01-10T10:00:00Z',
        pair: 'SOL/USDC',
        direction: 'buy',
        amount: 100,
        price: 95.5,
        total: 9550.0,
      },
      {
        executedAt: '2024-01-14T15:30:00Z',
        pair: 'SOL/USDC',
        direction: 'sell',
        amount: 100,
        price: 120.75,
        total: 12075.0,
      },
    ],
    balanceHistory: [
      {
        coin: 'USDC',
        time: '2024-01-09T09:00:00Z',
        amount: 10000.0,
        fromWallet: '0x5555...7777',
        toWallet: 'Platform Wallet',
      },
      {
        coin: 'USDC',
        time: '2024-01-14T16:00:00Z',
        amount: 12500.75,
        fromWallet: 'Platform Wallet',
        toWallet: '0x5555...7777',
      },
    ],
    followers: [
      {
        userId: 'user003',
        amount: 5000.0,
        unrealizedPnL: 0,
        realizedPnL: 1250.37,
        roi: 25.01,
        status: 'closed',
      },
      {
        userId: 'user004',
        amount: 3000.0,
        unrealizedPnL: 0,
        realizedPnL: 750.22,
        roi: 25.01,
        status: 'closed',
      },
    ],
  },
]
