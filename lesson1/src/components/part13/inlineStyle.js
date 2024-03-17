import React from 'react'
import styleModule from './style.module.css';
const headerText = {
    color: 'Blue',
    fontSize: '100px'
}

function InlineStyle() {
    return (
        <div>
            <h1 style={headerText}>Inline</h1>
            <h1 className={styleModule.module}>Module</h1>
        </div>
    )
}

export default InlineStyle
