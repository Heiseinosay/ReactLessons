import React from 'react'

function MethodProps(props) {
    return (
        <button onClick={() => props.clickHandler('nikka', 5)}>Click me</button>
    )
}

export default MethodProps