import React, { PureComponent } from 'react'

class ConRen extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            number: 10
        }

        
    }
    
    
    render() {
        let numberValue = parseInt(prompt('Enter Number'))
        let message
        if (numberValue >= this.state.number) {
            message = <div>Your Number is higher than {this.state.number}</div>
        } else {
            message = <div>Your Number is lower than {this.state.number}</div>
        }
        return (
            <div>
                
                {message}
            </div>
            
            )
    }
}

export default ConRen