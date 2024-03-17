import React, { PureComponent } from 'react'

class Calculator extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            answer: ""
        }
    }

    addFnc() {
        this.setState({
            
        })
    }

    render() {
        return (
            <div>
                <input type="tel" />

                <button onClick={() => this.addFnc()}>+</button>
                <button onClick={() => this.minFnc()}>-</button>
                <button onClick={() => this.mulFnc()}>x</button>
                <button onClick={() => this.divFnc()}>/</button>

                <button>calc</button>
                <h1>{this.state.answer}</h1>
            </div>
        )
    }
}

export default Calculator