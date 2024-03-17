import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Jeleazar'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name:'codevolution'
        })
    }
    render() {
        console.log('LifecycleA render')
        return (
            <div>
            <div>LifeCycle A</div>
            <button onClick={this.changeState}>Click</button>
            <LifecycleB />
            </div>
        )   
    }
}

export default LifecycleA