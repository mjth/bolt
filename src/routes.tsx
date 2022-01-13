import { RouteObject, useRoutes } from 'react-router-dom'
import ErrorBoundary from '~/src/logic/ErrorBoundary'
import { lazy, Suspense } from 'react'
import PageNotFound from '~/src/pages/404'
import ErrorPage from '~/src/pages/Error'
import LoadingPage from '~/src/pages/Loading'
import { useTitle } from 'hoofd'

const Home = lazy(() => import('./pages/Home'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const DataExamplePage = lazy(() => import('./pages/DataExample'))

//Pending react-router integration of preload
//This could be improved to preload queries on link click.
export const RoutesDefinition: RouteObject[] = [
    { index: true, element: <Home /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/data', element: <DataExamplePage /> },
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
