export default (poolId) => {
    const poolStats = ref(null)
    const error = ref(false)

    const fetchPoolStats = async () => {
        const res = await fetch(`https://js.adapools.org/pools/${poolId}/summary.json`)
        poolStats.value  = (await res.json()).data
    }

    return {
        poolStats: readonly(poolStats),
        fetchPoolStats
    }
}