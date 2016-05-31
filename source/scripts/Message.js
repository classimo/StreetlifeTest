import React from 'react';
import MessageHeader from './MessageHeader';
import MessageBody from './MessageBody';
import MessageFooter from  './MessageFooter';
import MessageComments from './MessageComments';

export default class Message extends React.Component{
    render(){
        return(
            <div className="Message">
                <MessageHeader subject={this.props.subject}
                               avatar={this.props.avatar}
                               updatedAt={this.props.updatedAt}
                               authorName={this.props.authorName}
                />
                <MessageBody body={this.props.body}/>
                <MessageFooter topics={this.props.topics} commentsCount={this.props.commentsCount}/>
                <MessageComments comments={this.props.comments}/>
            </div>
        )
    }
}