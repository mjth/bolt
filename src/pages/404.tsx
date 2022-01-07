import { useTitleTemplate } from 'hoofd'

export default function PageNotFound() {
    useTitleTemplate('%s | 404')
    return (
        <>
            <h1>404</h1>
            <span>Page Not Found</span>
        </>
    )
}
