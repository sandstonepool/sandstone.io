'use client'

import { useState, useEffect, useRef } from 'react'
import { PoolStats } from '../types/cardano'

const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
const FETCH_TIMEOUT = 10_000 // 10 seconds

const cache = new Map<string, { data: PoolStats; timestamp: number }>()

export function usePoolStats(poolId: string) {
  const [data, setData] = useState<PoolStats | null>(() => {
    const cached = cache.get(poolId)
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      return cached.data
    }
    return null
  })
  const [loading, setLoading] = useState(!data)
  const [error, setError] = useState<Error | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const cached = cache.get(poolId)
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
      setData(cached.data)
      setLoading(false)
      return
    }

    abortRef.current = new AbortController()
    const timeoutId = setTimeout(() => abortRef.current?.abort(), FETCH_TIMEOUT)

    async function loadStats() {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(`/api/pool-stats?poolId=${poolId}`, {
          signal: abortRef.current!.signal,
        })
        if (!response.ok) {
          throw new Error(`Failed to fetch pool stats: ${response.statusText}`)
        }
        const stats: PoolStats = await response.json()
        cache.set(poolId, { data: stats, timestamp: Date.now() })
        setData(stats)
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          setError(err as Error)
        }
      } finally {
        setLoading(false)
      }
    }

    loadStats()

    return () => {
      clearTimeout(timeoutId)
      abortRef.current?.abort()
    }
  }, [poolId])

  return { data, loading, error }
}
