import React, { createRef, PureComponent } from 'react'

class RefsDemo extends PureComponent {    
    constructor(props) {
        super(props)
        // First method
        this.inputRef = React.createRef()
        // Second Method
        this.inputCbRef = null
        this.setCbRef = element => {
           this.setCbRef = element
        } 
    }

    componentDidMount(){
        // First method
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        // Second method
            this.setCbRef.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.current.value + " " + this.setCbRef.value) 
        // const CountValue = this.inputRef.current.value.length
    //    if(CountValue >= 5) {
    //        alert('yes')
    //    } else if(CountValue <= 4) {
    //        alert('no')
    //    }
        this.callBack()
    }

    callBack() {
        console.log('callback')
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo