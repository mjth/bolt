import { Route, Routes as ReactRouterRoutes } from 'react-router-dom'
import ErrorBoundary from '~/src/logic/ErrorBoundary'
import { lazy, Suspense } from 'react'
import PageNotFound from '~/src/pages/404'
import ErrorPage from '~/src/pages/Error'
import LoadingPage from '~/src/pages/Loading'
import { useTitle } from 'hoofd'

const Home = lazy(() => import('./pages/Home'))

export default function Routes() {
    useTitle(process.env.APP_NAME)
    return (
        <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<LoadingPage />}>
                <ReactRouterRoutes>
                    <Route index element={<Home />} />
                    <Route path="*" element={<PageNotFound />} />
                </ReactRouterRoutes>
            </Suspense>
        </ErrorBoundary>
    )
}
