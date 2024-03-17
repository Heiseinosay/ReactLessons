import React, { Component } from 'react'
// functional component
// const Destructuring = ({name, heroName}) =>{
//     return (
//         <div>
//             <h1>Hello {name} A.K.A {heroName}</h1>
//         </div>
//     )
// } 
// 2nd Way
// const Destructuring = props =>{
//     const {name, heroName} = props
//     return (
//         <div>
//             <h1>Hello {name} A.K.A {heroName}</h1>
//         </div>
//     )
// } 
// class component
class Destructuring extends Component {
    render() {
        const {name, heroName} = this.props
        // using state
        // const {state1, state2} = this.state
        return(
            <div>
                <h1>Hello {name} A.K.A {heroName}</h1>
            </div>
        )
    }
}

export default Destructuring