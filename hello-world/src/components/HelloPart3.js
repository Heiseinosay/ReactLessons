import React, { createElement } from 'react'

const Hello = () => {
    // with JSX 
    // return (
    //     <div>
    //         <h1>Hello Jeleazar</h1>
    //     </div>
    // )
    // Without JSX
    return React.createElement(
        'div', 
        {id: 'hello', className: 'hello-Jeleazar-style'}, createElement('h1', null, 'Hello Jeleazar'))
}

export default Hello