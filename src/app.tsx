import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Routes from './routes'

export default function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </RecoilRoot>
    )
}
