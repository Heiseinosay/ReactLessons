import React, { Component } from 'react'

class ChangeText extends Component {
    constructor() {
        super()
        this.state = {
            message: "Replace this Text"
        }
    }
    Change() {
        this.setState({
            message: "Changed!"
        })
    }

    render() {
        return(
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.Change()}>ClickME</button>
            </div>
        )
    }
}
export default ChangeText
