import React, { Component } from 'react'

class Header extends Component {
    
    render() {
        return <div className="nav-bar">
        <ul>
            <li onClick='alert()'><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
    }
}


export default Header

