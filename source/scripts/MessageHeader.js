import React from 'react';
import Avatar from './Avatar';
import {timeAgo} from  './lib/lib';

export default class MessageHeader extends React.Component {
    render() {
        return (
            <div className="message-header">
                <Avatar src={this.props.avatar} />
                <div>
                    <span className="message-name">{this.props.authorName}</span>
                    <span className="message-time">{timeAgo(new Date(), this.props.updatedAt)}</span>
                </div>
                <h5 className="message-subject">{this.props.subject}</h5>
            </div>
        )
    }
}