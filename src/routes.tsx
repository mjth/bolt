import { Route, Routes as ReactRouterRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import PageNotFound from '~/src/pages/404'
import LoadingPage from '~/src/pages/Loading'

const HelloWorld = lazy(() => import('./pages/HelloWorld'))

export default function PageRoutes() {
    return (
        <Suspense fallback={<LoadingPage />}>
            <ReactRouterRoutes>
                <Route index element={<HelloWorld />} />
                <Route path="*" element={<PageNotFound />} />
            </ReactRouterRoutes>
        </Suspense>
    )
}
