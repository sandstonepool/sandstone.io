import type {IncomingMessage, ServerResponse} from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
    const fetched = await fetch('https://js.adapools.org/pools/40183423c226189d508db4b21bf94b790cf4d096134a9afbc2bd5318/summary.json', {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const {tax_ratio, pledge, delegators, total_stake} = (await fetched.json()).data
    res.statusCode = fetched.status
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
        tax_ratio,
        pledge,
        delegators,
        total_stake
    }))
}