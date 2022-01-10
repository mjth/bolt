import HelloWorld from '~/src/components/HelloWorld'
import { useMeta, useTitleTemplate } from 'hoofd'
import AppUpdateNotice from '~src/components/AppUpdateNotice'
import PreloadLink from '~src/components/PreloadLink'

export default function Home() {
    useMeta({ name: 'ogTitle', content: 'Home' })
    useTitleTemplate('Home | %s')
    return (
        <>
            <h1>{process.env.APP_NAME}</h1>
            <HelloWorld />
            <AppUpdateNotice />
            <PreloadLink to="/second-page">Second Page</PreloadLink>
        </>
    )
}
