import React from 'react'
import ReactDOM from 'react-dom';

const Portal = document.getElementById('portal-root');

function PortalDemo() {
    return ReactDOM.createPortal(
        // First Parameter JSX
        <h1>
            Portal Demo
        </h1>,
        // Second Parameter
        Portal
    )
}

export default PortalDemo
