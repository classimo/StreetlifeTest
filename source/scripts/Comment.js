import React from 'react';
import CommentHeader from './CommentHeader';
import CommentBody from './CommentBody';
import CommentFooter from  './CommentFooter';

export default class Message extends React.Component{
    render(){
        return(
            <div className="Comment">
                <CommentHeader subject={this.props.subject}
                               avatar={this.props.avatar}
                               updatedAt={this.props.updatedAt}
                               authorName={this.props.authorName}
                />
                <CommentBody body={this.props.body}/>
                <CommentFooter/>

            </div>
        )
    }
}