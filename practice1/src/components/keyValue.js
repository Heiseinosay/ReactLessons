import React, { PureComponent } from 'react'

class KeyValue extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', (key) => {
            if (key.keyCode == '49') {
                alert('You click 1')
            }
        })
        window.addEventListener('keydown', (key) => {
            if (key.keyCode == '50') {
                alert('You click 2') 
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Try test</h1>
            </div>
        )
    }
}

export default KeyValue