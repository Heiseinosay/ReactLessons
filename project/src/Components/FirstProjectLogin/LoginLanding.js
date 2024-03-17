import React, { Component } from 'react'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class LoginLanding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            signUpArea: false
        }

        this.usernameInput = React.createRef();
        this.usernameLabel = React.createRef();

        this.userPasswordInput = React.createRef();
        this.userPasswordLabel = React.createRef();

        this.form = React.createRef();
        this.signUpLink = React.createRef();
        
    }
    


    componentDidMount() {
        setTimeout(() => this.autoShowSignUp(), 2000)
       
    }
    showSignUp = (event) =>{
        event.preventDefault();
        this.setState({
            signUpArea: true
            
        })
        
    }

    autoShowSignUp = () => {
        this.setState({
            signUpArea: true
        })
       
    }

    handleUserNamechange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassWordchange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    nameInputAreaAnimation() {
        const usernameInput = this.usernameInput.current;
        const usernameLabel = this.usernameLabel.current;
        
        function focus() {
            usernameInput.focus();
        }
        usernameInput.style.cssText = "display:inline-table;"

        usernameLabel.style.cssText = "font-size: 12px; padding-top: 4px;"
        console.log(true)
        
        setTimeout(focus, 200)
    }

    passWordAreaAnimation() {
        const passWordInput = this.userPasswordInput.current;
        const labelpassWord = this.userPasswordLabel.current;
        
        function focus() {
            passWordInput.focus();
        }
        passWordInput.style.cssText = "display:inline-table;"

        labelpassWord.style.cssText = "font-size: 12px; padding-top: 4px;"
        
        setTimeout(focus, 200)
    }

    focusOutPassWord() {
        const passWordInput = this.userPasswordInput.current;
        const labelpassWord = this.userPasswordLabel.current;

            if(passWordInput.value.length == 0) {
                passWordInput.style.cssText = "width: 270px; height: 25px; outline: none; padding: 0 10px 0 10px; border: none; background-color: transparent; font-size: 18px;color: #000; letter-spacing: 1px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; display: none;"

                labelpassWord.style.cssText = "text-align: left;width: 273px; margin: 0 0 0 10px; font-size: 22px;color: #4b4949; letter-spacing: 1px; font-family: Arial, Helvetica, sans-serif; padding-left: 4px;padding-top: 18px; transition: all ease-in-out 0.2s;"
        } 
    }

    focusOutUserName() {
        const usernameInput = this.usernameInput.current;
        const labelUserName = this.usernameLabel.current;

            if(usernameInput.value.length == 0) {
            usernameInput.style.cssText = "width: 270px; height: 25px; outline: none; padding: 0 10px 0 10px; border: none; background-color: transparent; font-size: 18px;color: #000; letter-spacing: 1px; font-family: Arial, Helvetica, sans-serif; margin-top: 0px; display: none;"

            labelUserName.style.cssText = "text-align: left;width: 273px; margin: 0 0 0 10px; font-size: 22px;color: #4b4949; letter-spacing: 1px; font-family: Arial, Helvetica, sans-serif; padding-left: 4px;padding-top: 18px; transition: all ease-in-out 0.2s;"
        } 
    }

    render() {
        return (
            <div>
                <LoginForm username={this.state.username} password={this.state.password} 
                            handleUserNamechange={this.handleUserNamechange}
                            handlePassWordchange={this.handlePassWordchange} 
                            handlenameInputAreaAnimation={() => this.nameInputAreaAnimation()}
                            // Refs
                            inputUserName={this.usernameInput}
                            labelUserName={this.usernameLabel}
                            focusOutUserName={() => this.focusOutUserName()}
                            
                            inputPassword={this.userPasswordInput}
                            labelPassword={this.userPasswordLabel}
                            handlepassWordAreaAnimation={() => this.passWordAreaAnimation()}
                            focusOutPassWord={() => this.focusOutPassWord()}
                            form={this.form}
                            signUpLinkClick={this.showSignUp}
                            signUpLink={this.signUpLink}
                            />

                <SignUpForm 
                signUpAreaStatus={this.state.signUpArea}
                />
            </div>
        )
    }
}

export default LoginLanding