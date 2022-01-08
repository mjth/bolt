import { ReactNode, Component } from 'react'

interface Props {
    children: ReactNode
    fallback: ReactNode
}

interface State {
    hasError: boolean
    error: Error
}

class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false, error: null }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error,
        }
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback
        }
        return this.props.children
    }
}

export default ErrorBoundary
