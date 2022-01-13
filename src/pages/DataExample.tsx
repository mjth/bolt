import { useTitleTemplate } from 'hoofd'
import { Suspense } from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import Country from '~src/components/Country'

import type { DataExampleQuery } from './__generated__/DataExampleQuery.graphql'

const Query = graphql`
    query DataExampleQuery {
        country(code: "AU") {
            ...CountryFragment
        }
    }
`

function DataExampleInner(props) {
    const data = useLazyLoadQuery<DataExampleQuery>(Query, props.preload)
    return (
        <div>
            <Country country={data.country} />
        </div>
    )
}

export default function DataExample(props) {
    useTitleTemplate('Data Example | %s')

    return (
        <Suspense fallback={<>Loading Page Data</>}>
            <DataExampleInner {...props} />
        </Suspense>
    )
}
