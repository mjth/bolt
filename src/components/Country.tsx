import { graphql, useFragment } from 'react-relay'
import type { CountryFragment$key } from './__generated__/CountryFragment.graphql'

const fragment = graphql`
    fragment CountryFragment on Country {
        name
    }
`
type Props = {
    country: CountryFragment$key
}

export default function Country(props: Props) {
    const data = useFragment(fragment, props.country)
    return <div>{data.name}</div>
}
