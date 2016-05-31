import React from 'react';
import Avatar from './Avatar';
import {timeAgo} from  './lib/lib';

export default class CommentHeader extends React.Component {
    render() {
        return (
            <div className="comment-header">
                <Avatar src={this.props.avatar} />
                <div>
                    <span className="comment-name">{this.props.authorName}</span>
                    <span className="comment-time">{timeAgo(new Date(), this.props.updatedAt)}</span>
                </div>
            </div>
        )
    }
}