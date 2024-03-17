import React, { PureComponent } from 'react'
import updatedComponent from './withCounter';

class HoverCounter extends PureComponent {


    render() {
        const { count, incrementCount, decrementCount } = this.props
        return (
            <div>
                <div onMouseOver={incrementCount}> Hover {count} Times</div>
                <button onClick={decrementCount}>Click to decrement</button>
            </div>
        )
    }
}

export default updatedComponent(HoverCounter, 10)