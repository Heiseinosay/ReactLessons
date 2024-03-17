import React, { PureComponent } from 'react'

class PropsPractice extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    alertMe() {
        alert('asfsa')
    }
    render() {
        const {name, pet, children} = this.props
        return (
            <div>
                <h1>{name}, {pet}</h1>
                <div onClick={this.alertMe}>{children}</div>
            </div>
        )
    }
}

export default PropsPractice