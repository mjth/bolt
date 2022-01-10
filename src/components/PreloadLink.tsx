import { Link, matchRoutes } from 'react-router-dom'
import { RoutesDefinition } from '~src/routes'

const preloadRouteComponent = (path) => {
    const matchingRoutes = matchRoutes(RoutesDefinition, path)
    const lazyInitFunction =
        matchingRoutes[0]?.route?.element?.type?._payload?._result || null
    if (typeof lazyInitFunction === 'function') {
        lazyInitFunction()
    }
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
