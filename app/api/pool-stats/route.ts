import { NextRequest, NextResponse } from 'next/server'

const CARDANOSCAN_API_BASE = 'https://api.cardanoscan.io/api/v1'
const CARDANOSCAN_API_KEY = process.env.CARDANOSCAN_API_KEY

export async function GET(request: NextRequest) {
  const poolId = request.nextUrl.searchParams.get('poolId')

  if (!poolId) {
    return NextResponse.json({ error: 'poolId is required' }, { status: 400 })
  }

  if (!CARDANOSCAN_API_KEY) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }

  const response = await fetch(
    `${CARDANOSCAN_API_BASE}/pool/stats?poolId=${poolId}`,
    {
      headers: {
        'apiKey': CARDANOSCAN_API_KEY
      },
      next: { revalidate: 300 }
    }
  )

  if (!response.ok) {
    return NextResponse.json(
      { error: `Failed to fetch pool stats: ${response.statusText}` },
      { status: response.status }
    )
  }

  const data = await response.json()
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  })
}
