import React from 'react'
import ReactDOM from 'react-dom';
const r2 = document.getElementById('root2')
function SignUpForm({signUpAreaStatus}) {
    return ReactDOM.createPortal(
        <>
            {signUpAreaStatus && <h1>Welcome</h1>}
        </>,r2
    )
}

export default SignUpForm
