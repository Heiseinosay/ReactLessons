import React, {Component} from 'react'
import ParentChildCOnnectNow from './parentChildCOnnectNow';

class ParentChildCOnnect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            greet: 'Hello',
            name: 'Jeleazar'    
        }

        this.greetNow = this.greetNow.bind(this)
    }
    greetNow(gender, age) {
        alert(`${this.state.greet} im ${this.state.name} and im ${gender} my age is ${age}`)
    }

    render() {
        return(
            <div>
                <ParentChildCOnnectNow eventHandler={this.greetNow} />
            </div>
        )
    }
}

export default ParentChildCOnnect