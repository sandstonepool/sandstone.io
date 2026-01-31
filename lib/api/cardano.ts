import { PoolStats } from '../types/cardano'

const CARDANOSCAN_API_BASE = 'https://api.cardanoscan.io/api/v1'
const CARDANOSCAN_API_KEY = process.env.NEXT_PUBLIC_CARDANOSCAN_API_KEY || process.env.CARDANOSCAN_API_KEY

export async function fetchPoolStats(poolId: string): Promise<PoolStats> {
  if (!CARDANOSCAN_API_KEY) {
    throw new Error('Cardanoscan API key is not configured')
  }

  const response = await fetch(
    `${CARDANOSCAN_API_BASE}/pool/stats?poolId=${poolId}`,
    {
      headers: {
        'apiKey': CARDANOSCAN_API_KEY
      },
      next: { revalidate: 300 } // Cache for 5 minutes
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch pool stats: ${response.statusText}`)
  }

  const data: PoolStats = await response.json()
  return data
}
