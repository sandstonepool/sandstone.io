export default (poolId) => {
    const poolStats = ref(null)
    const fetching = ref(false)

    const fetchPoolStats = async () => {
        try {
            fetching.value = true
            const res = await fetch(`https://js.adapools.org/pools/${poolId}/summary.json`)
            poolStats.value = (await res.json()).data
        } finally {
            fetching.value = false
        }
    }

    return {
        poolStats: readonly(poolStats),
        fetchPoolStats,
        fetching
    }
}