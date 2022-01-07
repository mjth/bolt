import { Route, Routes as ReactRouterRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import PageNotFound from '~/src/pages/404'

const HelloWorld = lazy(() => import('./pages/HelloWorld'))

export default function PageRoutes() {
    return (
        <ReactRouterRoutes>
            <Route>
                <Route
                    index
                    element={
                        <Suspense fallback={<>Loading</>}>
                            <HelloWorld />
                        </Suspense>
                    }
                />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </ReactRouterRoutes>
    )
}
