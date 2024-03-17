import React from 'react'

function LoginBox({username, password, submit}) {
    return (
        <div>
            <h1>Please Login</h1>
                <div><input type="text" placeholder="Username" ref={username}/></div>
                <div><input type="password" placeholder="password" ref={password}/></div>

                <div><button onClick={submit}>Login</button></div>
        </div>
    )
}

export default LoginBox
