import React, { PureComponent } from 'react'

class RefsPractice extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            placeHolder: 'Enter Your Name',
            styling: this.inutRef
        }

        this.inputRef = React.createRef()

        this.MyContainer = (element) => {
            this.MyContainer = element
        }
    }

    componentDidMount() {
        const Input = this.inputRef.current;
        // Input.value = this.state.placeHolder;

        const Container = this.MyContainer;
        Container.style.color = "red"

        Container.setAttribute('class', 'Yes')
        let newElement = document.createElement('a')
        newElement.setAttribute('href', 'https://youtube.com')
        let txt = document.createTextNode('links');
        newElement.append(txt)
        Container.appendChild(newElement);

    }

    handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div ref={this.MyContainer}>asfas</div>
                <input type="text" ref={this.inputRef} 
                        onChange={this.handleChange} 
                        placeholder={this.state.placeHolder}
                        value={this.state.username} 
                        className={this.state.styling} />
            </div>
        )
    }
}

export default RefsPractice