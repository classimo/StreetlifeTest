import React from 'react';

export default class MessageHeader extends React.Component {
    render() {
        return (
            <div className="message-header">
                <canvas />
                <p>
                    <span className="message-subject">{this.props.subject}</span>
                    <span className="message-time">{this.props.updatedAt}</span>
                </p>
            </div>
        )
    }
}