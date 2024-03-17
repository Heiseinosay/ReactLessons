import React, { PureComponent } from 'react'

class Forms extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            comments:'',
            topic: 'react'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault()
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label> 
                    <input type='text'
                     value={this.state.username} 
                     onChange={this.handleUsernameChange}
                     />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                    value={this.state.comments} 
                    onChange={this.handleCommentChange} spellCheck='true'>
                    </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} 
                    onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="vue">vue</option>
                        <option value="angular">angular</option>
                    </select>
                    <button type='submit'>submit</button>
                </div>
            </form>
        )
    }
}

export default Forms