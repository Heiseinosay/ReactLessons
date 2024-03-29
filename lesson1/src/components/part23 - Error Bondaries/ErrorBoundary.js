import React, { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        if(this.state.hasError) {
            return <h1>Something went Wrong!</h1>
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary