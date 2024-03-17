import React from 'react';

const updatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + incrementNumber}
            })
        }
    
        decrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count - incrementNumber} 
                
            })
        }
    
        render() {
            console.log(this.props.name)
            return <OriginalComponent 
            incrementCount={this.incrementCount} 
            decrementCount={this.decrementCount}
            count={this.state.count}
            {...this.props}/>
        }
    }
    return NewComponent
}

export default updatedComponent