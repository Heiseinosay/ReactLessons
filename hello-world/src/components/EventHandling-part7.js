import React from 'react'

function FunctionClick() {
    function clickHandler() {
        alert('you click');
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
