import React from 'react';
// import $ from 'jquery';
import Comment from './Comment';

export default class MessageComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {comments: props.comments};
    }
    //
    //  I couldn't find any ID that correlates between news feed and comments feed so I left with comments from news feed
    //
    // getAllComments(){
    //     this.serverRequest = $.getJSON('https://s3-eu-west-1.amazonaws.com/streetlife-coding-challenge/comments.json', function(data){
    //         var comments = data.comments;
    //         this.setState({comments: comments});
    //
    //     }.bind(this));
    // }
    render(){
        return(
            <div>
                {this.state.comments.length > 0 ? this.state.comments.map((comment) => {
                    if(comment.body){ // return only comments that has a body
                        return <Comment
                            avatar={comment.author.avatar}
                            authorName={comment.author.display_name}
                            body={comment.body}
                            key={comment.id}
                            updatedAt={comment.posted_at}
                        />
                    }
                }) : null}
            </div>
        )
    }
}