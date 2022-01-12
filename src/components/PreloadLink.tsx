import { Link, matchRoutes } from 'react-router-dom'
import { RoutesDefinition } from '~src/routes'

const preloadRouteComponent = (path) => {
    const matchingRoutes = matchRoutes(RoutesDefinition, path)

    //Could be multipled nested routes.
    matchingRoutes.forEach(({ route }) => {
        //@ts-ignore
        const lazyInitFunction = route?.element?.type?._payload?._result || null
        if (typeof lazyInitFunction === 'function') {
            lazyInitFunction()
        }
    })
}

export default function PreloadLink({ to, ...rest }) {
    return (
        <Link
            to={to}
            onMouseEnter={() => preloadRouteComponent(to)}
            {...rest}
        />
    )
}
