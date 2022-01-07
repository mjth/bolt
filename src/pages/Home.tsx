import HelloWorld from '~/src/components/HelloWorld'
import { useMeta, useTitleTemplate } from 'hoofd'

export default function Home() {
    useMeta({ name: 'ogTitle', content: 'Home' })
    useTitleTemplate('Home | %s')
    return (
        <>
            <h1>{process.env.APP_NAME}</h1>
            <HelloWorld />
        </>
    )
}
