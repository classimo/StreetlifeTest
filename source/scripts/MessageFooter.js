import React from 'react';
import MessageTopicsList from './MessageTopicsList';

export default class MessageFooter extends React.Component {
    render() {
        return (
            <div className="message-footer">
                {this.props.topics.length > 0 ?
                    <MessageTopicsList topics={this.props.topics}/> : null
                }
                <span className="comments-count ">{this.props.commentsCount} comments</span>
            </div>
        )
    }
}