import { Environment, Network, RecordSource, Store } from 'relay-runtime'

async function NetworkInterface(params, variables, _cacheConfig) {
    const response = await fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            operationName: params.name,
            query: params.text,
            variables,
        }),
    })

    return await response.json()
}

export default new Environment({
    network: Network.create(NetworkInterface),
    store: new Store(new RecordSource()),
})
