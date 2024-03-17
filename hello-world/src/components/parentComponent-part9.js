import React, { PureComponent } from 'react'
import ChildComponent from './childComponent-part9'

class ParentComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            parentName: "parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName, childAge) {
        // alert('hello ' + this.state.parentName)
        alert(`hello ${this.state.parentName} from ${childName} ${childAge} years old`)

    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent