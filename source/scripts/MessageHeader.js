import React from 'react';
import Avatar from './Avatar';

export default class MessageHeader extends React.Component {
    timeAgo(date) {
        var date = new Date(date);
        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = Math.floor(seconds / 31536000);

        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }
    render() {
        return (
            <div className="message-header">
                <Avatar src={this.props.avatar} />
                <div>
                    <span className="message-name">{this.props.authorName}</span>
                    <span className="message-time">{this.timeAgo(this.props.updatedAt)}</span>
                </div>
                <h5 className="message-subject">{this.props.subject}</h5>
            </div>
        )
    }
}