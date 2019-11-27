import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (this.props.content.message !== null) ? (
            <div>
                <h1>{ this.props.content.message }</h1> 
            </div>
        ) : null
        
    }
}
 
export default Message;