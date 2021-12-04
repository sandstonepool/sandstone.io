import { useFetch } from "#app"

export default async (poolId) => {
    const { data: poolStats } = await useFetch(`https://js.adapools.org/pools/${poolId}/summary.json`, {
        transform: payload => payload.data,
        pick: ['total_stake', 'tax_ratio', 'pledge', 'delegators']
    })

    return {
        poolStats: readonly(poolStats)
    }
}