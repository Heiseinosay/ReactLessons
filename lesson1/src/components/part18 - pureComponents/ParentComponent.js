import React, { Component } from 'react'
import RegularComponent from './RegularComponent';
import PureComp from './PureComponent';
import MemoComp from '../part19 - Memo/MemoComp';

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Jeleazar'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Jeleazar'
            })
        }, 2000)
    }

    render() {
        console.log('********** Parent Component **********')
        return (
            <div>
                ParentComponent
                <MemoComp name={this.state.name}/>
                {/* <RegularComponent name={this.state.name}/>
                <PureComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComponent