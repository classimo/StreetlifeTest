import React from 'react';

export default class MessageBody extends React.Component {
    render() {
        return (
            <div className="message-body">
                {this.props.body}
            </div>
        )
    }
}