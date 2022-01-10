import { RouteObject, useRoutes } from 'react-router-dom'
import ErrorBoundary from '~/src/logic/ErrorBoundary'
import { lazy, Suspense } from 'react'
import PageNotFound from '~/src/pages/404'
import ErrorPage from '~/src/pages/Error'
import LoadingPage from '~/src/pages/Loading'
import { useTitle } from 'hoofd'

const Home = lazy(() => import('./pages/Home'))
const LoginPage = lazy(() => import('./pages/LoginPage'))

export const RoutesDefinition: RouteObject[] = [
    { index: true, element: <Home /> },
    { path: '/login', element: <LoginPage /> },
    { path: '*', element: <PageNotFound /> },
]

export default function Routes() {
    useTitle(process.env.APP_NAME)
    const RouteElement = useRoutes(RoutesDefinition)

    return (
        <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<LoadingPage />}>{RouteElement}</Suspense>
        </ErrorBoundary>
    )
}
