import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        console.log("Message props:");
        console.log(this.props);
        console.log("Will it render?");
        console.log( (this.props.content && this.props.content.message && this.props.content.isSuccess) )
        return (this.props.content && this.props.content.message) ? (
            <div>
                <h1>{ (this.props && this.props.content && this.props.content.isSuccess) ? "Success!" : "Problem:" }</h1>
                <p>{ this.props.content.message }</p>
            </div>
        ) : null
        
    }
}
 
export default Message;