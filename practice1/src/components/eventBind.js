import React from 'react'

function EventBind() {
    

    return (
        <div>
            <h1 id={changeTxt}>hello</h1>
            <button onClick={changClick}>click</button>
        </div>
    )
    
    let getContainer
    let status = true
    function changClick() {
        let v1 = "hello"
        let v2 = "goodbye"
        if (status == true) {
            getContainer = document.getElementById('changeTxt').innerHTML = "v2"
            status = false
        } else if (status == false) {
            getContainer = document.getElementById('changeTxt').innerHTML = "v1"
            status = true
        }
    }
}

export default EventBind
