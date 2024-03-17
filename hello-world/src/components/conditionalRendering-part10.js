import React, { PureComponent } from 'react'
// title: Four approaches to conitionally render UI
class ConditionalRendering extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // first method
        // if(this.state.isLoggedIn) {
        //     return <div>Welcome Jeleazar</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
        // second method uses variable element
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Jeleazar</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // 
        // return (
        //     <div>{message}</div>
        // )}
        // third method simple easy recommended ternary conditional operator
        // return (
        //     this.state.isLoggedIn ?
        //     <div>Welcome Jeleazar</div> : <div>WelCome Guest</div>
        // )
        // fourth method check if it true then return if flase no return
        return this.state.isLoggedIn && <div>Welcome Jeleazar</div>
        
        
    }
}

export default ConditionalRendering