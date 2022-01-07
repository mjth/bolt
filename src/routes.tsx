import { Route, Routes as ReactRouterRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import PageNotFound from '~/src/pages/404'
import LoadingPage from '~/src/pages/Loading'

const Home = lazy(() => import('./pages/Home'))

export default function PageRoutes() {
    return (
        <Suspense fallback={<LoadingPage />}>
            <ReactRouterRoutes>
                <Route index element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </ReactRouterRoutes>
        </Suspense>
    )
}
