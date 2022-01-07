import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { AppUpdateRequired } from './atoms/AppUpdateRequired'
import Routes from './routes'

//Default atoms to be initialised.
function InjectAtoms() {
    useRecoilValue(AppUpdateRequired)
    return <></>
}

export default function App() {
    return (
        <RecoilRoot>
            <InjectAtoms />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </RecoilRoot>
    )
}
