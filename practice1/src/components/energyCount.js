import React, { PureComponent } from 'react'

class EnergyCount extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            energyCount: 0
        }
        this.addCount = this.addCount.bind(this)
    }

    addCount() {
        this.setState({
            energyCount: this.state.energyCount + 1
        })
    }

    minCount() {
        this.setState({
            energyCount: this.state.energyCount - 1
        })
    }

    resetCount() {
        this.setState({
            energyCount: 0
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.addCount}>add</button>
                <h1>Energy Count: {this.state.energyCount}</h1>
                <button onClick={() =>this.minCount()}>minus</button>

                <h5 onClick={()=> this.resetCount()}>Reset</h5>
            </div>
        )
    }
}

export default EnergyCount