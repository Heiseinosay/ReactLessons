import React, { Component } from 'react'

class RegularComponent extends Component {

    render() {
        console.log('Regular Component')
        return (
            <div>
                RegularComponent {this.props.name}
            </div>
        )
    }
}

export default RegularComponent