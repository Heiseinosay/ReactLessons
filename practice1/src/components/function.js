import React, { PureComponent } from 'react'

class Function extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            message: 'i am',
            secondMessage: 'inevitable',
            element: <h1>afsdagasdg</h1>
        }
    }
    changeMessage() {
        this.setState({
            secondMessage: 'Ironman'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message} {this.state.secondMessage}</h1>
                <button onClick={() =>this.changeMessage()}>Click to change</button>
            </div>
        )
    }
}

export default Function
