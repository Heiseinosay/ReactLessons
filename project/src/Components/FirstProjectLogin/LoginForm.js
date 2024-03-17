import React from 'react'
import './LoginFormStyle.css';


const LoginForm = ({username, password, handleUserNamechange, handlePassWordchange, handlenameInputAreaAnimation, inputUserName, labelUserName, focusOutUserName, inputPassword, labelPassword, handlepassWordAreaAnimation, focusOutPassWord, form, signUpLinkClick, signUpLink}) => {
    return (
        <div className="Login-Form" ref={form}>
            <form>
                <div className="Username-Password-Wrapper">
                    <div className="input-UserName-Container" onClick={handlenameInputAreaAnimation} >
                        <div className="Username-Label" ref={labelUserName}>Enter Your Name</div>
                        <input type="text" value={username} onChange={handleUserNamechange}     className="input-UseNname" 
                        ref={inputUserName} onBlur={focusOutUserName}/>
                    </div>
                    <div className="input-PassWord-Container">
                        <div className="Password-Label" ref={labelPassword} onClick={handlepassWordAreaAnimation}>
                            Enter Your Password
                        </div>
                        <input type="password" value={password} onChange={handlePassWordchange}
                        className="input-PassWord" ref={inputPassword} onBlur={focusOutPassWord}/>    
                    </div>
                </div>
                <button className="btn" type="button">Login</button>
            </form>

            <div><a href="#" ref={signUpLink} onClick={signUpLinkClick}>don't have an account? click here</a></div>
            
        </div>
    )
}

export default LoginForm
