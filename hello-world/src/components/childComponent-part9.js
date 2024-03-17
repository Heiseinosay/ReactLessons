import React from 'react'
import Props from './props-part4'

function ChildComponent(props) {
    return (
        <button onClick={() => props.greetHandler('Jeleazar', 18)}>Greet Parent</button>
    )
}

export default ChildComponent
