import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ClassClick extends PureComponent {
    clickHandler() {
        alert('it works')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick