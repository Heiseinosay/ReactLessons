import React, { PureComponent } from 'react'

class Conditional extends PureComponent {
    constructor(props) {
        let status = true;
        super(props)

        this.state = {
            login: 1
        }
    }

    changeStatus() {
       
        
    }
    render() {
        return (
            <div>
                {this.state.login && <h1>Welcome Jeleazar</h1>}
                <button onClick={this.changeStatus}>click</button>
            </div>
            
        )
    }
}

export default Conditional