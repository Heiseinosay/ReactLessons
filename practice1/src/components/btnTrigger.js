import React, {Component} from 'react';

class BasicsOfReact extends Component {
    constructor() {
        super() 
        
        this.state = {
            name: 'Jeleazar',
            age: 17,
            greet: 'Hello'
        }
        this.greetHandler = this.greetHandler.bind(this)
    }

    greetHandler() {
        this.setState({
            greet: 'Goodbye'
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.greet}</h1>

                <button onClick={this.greetHandler}>click</button>
            </div>
        )
    }
}

export default BasicsOfReact