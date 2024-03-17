import React, { PureComponent } from 'react'

class EventBind extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            message: "hello"
        }
        this.clickhandler = this.clickhandler.bind(this)
    }
    clickhandler() {
        this.setState({
            message: "Goodbye"
        })
        console.log(this)
    }
    // fourth method
    // clickhandler = () => {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    //     console.log(this)
    // works with{this.clickhandler}
    // }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* first method <button onClick={this.clickhandler.bind(this)}>Click</button> there is some performance implication*/}
                {/* Second method - <button onClick={this.clickhandler.bind(this)}>Click</button> */}
                <button onClick={this.clickhandler}>Click</button>

            </div>
            
        )
    }
}

export default EventBind