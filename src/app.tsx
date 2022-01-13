import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { AppUpdateRequired } from './atoms/AppUpdateRequired'
import { RelayEnvironmentProvider } from 'react-relay'
import RelayEnvironment from '~/src/relay'
import Routes from './routes'

//Default atoms to be initialised.
function InjectAtoms() {
    useRecoilValue(AppUpdateRequired)
    return <></>
}

export default function App() {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <RecoilRoot>
                <InjectAtoms />
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </RecoilRoot>
        </RelayEnvironmentProvider>
    )
}
