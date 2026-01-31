'use client'

import { useState, useEffect } from 'react'
import { fetchPoolStats } from '../api/cardano'
import { PoolStats } from '../types/cardano'

export function usePoolStats(poolId: string) {
  const [data, setData] = useState<PoolStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let mounted = true

    async function loadStats() {
      try {
        setLoading(true)
        setError(null)
        const stats = await fetchPoolStats(poolId)
        if (mounted) {
          setData(stats)
        }
      } catch (err) {
        if (mounted) {
          setError(err as Error)
        }
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    loadStats()

    return () => {
      mounted = false
    }
  }, [poolId])

  return { data, loading, error }
}
