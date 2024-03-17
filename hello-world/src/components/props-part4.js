import React, { Component } from 'react'

// const Props = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>function Hello {props.name} a.k.a {props.heroName}</h1> 
//             {props.children}
//         </div>
//     )
// }

class Props extends Component {
    render() {

        return <div>
        <h1>class {this.props.name} a.k.a {this.props.heroName}</h1>
        {this.props.children}
        </div>
    }
}
export default Props 