import React from 'react'

function ParentChildCOnnectNow(props) {
    return (
        <button onClick={() => props.eventHandler('Male', 18)}>Click</button>
    )
}

export default ParentChildCOnnectNow
