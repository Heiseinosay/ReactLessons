import React, { PureComponent } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class Heart extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            heart: 0
        }
        this.HeartRef = React.createRef()
        this.textRef = React.createRef()
    }

    clickHeart() {
        this.setState({
            heart: this.state.heart + 1
        })
    }

    holdHeart() {
        // const heartIcon = this.HeartRef.current;
        // this.HeartRef.current.style.color = "red"

        const text = this.textRef.current
        text.value = "asdf"
       
    }

    render() {
        return (
            <div>
                <h1 ref={this.textRef}></h1>
            
               
                <FontAwesomeIcon icon="heart"  
                    onClick={() => this.holdHeart()} 
                    className="hearIcon"
                    ref={this.HeartRef}/>
            </div>
        )
    }
}

export default Heart