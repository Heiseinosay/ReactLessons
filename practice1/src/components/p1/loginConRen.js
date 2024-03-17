import React, { PureComponent } from 'react'
import LoginBox from './loginBox';


class LoginConRen extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            username1: "Jeleazar",
            password1: "nikka",
            isLogIn: false
        }
        this.username = React.createRef()
        this.password = React.createRef()
        this.sample = React.createRef()
    }

    loginBtn() {
        // const username = this.username.current;
        // const password = this.password.current;
        // if(this.state.username1 == username && this.state.password1 == password) {
        //     alert("correct")
        // }
        alert(this.sample)
        
    }

    render() {

        
        return ( 
            <div className="Login-box">
                <h1 ref={this.sample}>asfas</h1>
                <LoginBox 
                //refs
                username={this.username}
                password={this.password}
                submit={this.loginBtn}/>
                
                
            </div>
        )
    }
}

export default LoginConRen