import React, { PureComponent } from 'react'
import updatedComponent from './withCounter';

class ClickCounter extends PureComponent {

    render() {
        const { count, incrementCount } = this.props;
        return (
            <div> 
                <button onClick={incrementCount}>{this.props.name} Click {count} times</button>
            </div>
        )
    }
}

export default updatedComponent(ClickCounter, 5)