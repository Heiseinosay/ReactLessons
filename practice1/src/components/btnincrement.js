import React, { PureComponent } from 'react'

class Btnincrement extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            number: 1
        }
    }

    incrementNumber() {
        this.setState({
            number: this.state.number + 1
        })

        if (this.state.number == 10) {
            alert('number is equal to 10    ')
        }
    }

    render() {
        return (
            <div>
                number:{this.state.number}
                <button onClick={() => this.incrementNumber()}>Click to add</button>
            </div>
        )
    }
}

export default Btnincrement