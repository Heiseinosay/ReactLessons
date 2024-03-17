import React from 'react'

function Calc() {
    let caption;
    function compute() {
        let v1 = parseInt(prompt('Enter 1st value'));
        let v2 = parseInt(prompt('Enter 2nd value'));

        let plus = v1 + v2;
        let min = v1 - v2;
        let mul = v1 * v2;
        let div = v1 / v2;

        // caption.append(plus, min, mul, div)
        console.log(plus, min, mul, div)
    }

    return (
        <div>
            <button onClick={compute}>click to calculate</button>
            <h1 id={caption}></h1>
        </div>
    )
}

export default Calc
