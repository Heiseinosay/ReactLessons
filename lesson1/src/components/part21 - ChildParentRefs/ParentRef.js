import React, { Component } from 'react'
import ChildRef from './childRef';

class ParentRef extends Component {
    constructor(props) {
        super(props)

        this.componentRef = React.createRef()
    }

    clickFocus = () => {
        this.componentRef.current.inputFocus();
    }

    render() {
        return (
            <div>
                <ChildRef ref={this.componentRef}/>
                <button onClick={this.clickFocus}>Focus</button>
            </div>
        )
    }
}

export default ParentRef