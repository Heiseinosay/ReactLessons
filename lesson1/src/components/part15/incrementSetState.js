import React, { PureComponent } from 'react'

class IncrementSetState extends PureComponent {
    constructor(props) {
        super(props)

        
        this.state = {
            count: 0
        }
    }

    incrementNumber() {
        this.setState({
            count: this.state.count + 1
        }, () => {console.log('callback function' + this.state.count)})
        // console.log(this.state.count)
    }


    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.incrementNumber()}>click to increment</button>
            </div>
        )
    }
}

export default IncrementSetState