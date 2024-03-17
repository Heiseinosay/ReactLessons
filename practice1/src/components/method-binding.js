import React, { PureComponent } from 'react'
import MethodProps from './mothod-binding-props';

class Method extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            leaderName: "Jeleazar"
        }
    this.alertMessage = this.alertMessage.bind(this)
    }
    alertMessage(girlFreind, years) {
        alert(`Hello ${this.state.leaderName} and his gf ${girlFreind} ${years}`)
    }

    render() {
        return (
            <div>
                <MethodProps clickHandler={this.alertMessage}/>
            </div>
        )
    }
}

export default Method