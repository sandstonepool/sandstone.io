import { useFetch } from "#app"

export default (poolId) => {
    const { data: poolStats } = useFetch(`https://js.adapools.org/pools/${poolId}/summary.json`, {
        transform: payload => payload.data,
        pick: ['total_stake', 'tax_ratio', 'pledge', 'delegators']
    })

    return {
        poolStats: readonly(poolStats)
    }
}