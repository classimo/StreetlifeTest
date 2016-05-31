import React from 'react';
import $ from 'jquery';
import Message from './Message';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

export default class NewsFeed extends React.Component{
    constructor(){
        super();
        this.state = {messages: []};
    }
    componentDidMount(){
        this.serverRequest = $.getJSON('https://s3-eu-west-1.amazonaws.com/streetlife-coding-challenge/newsfeed.json', function(data){
            var messages = data.messages;
            this.setState({messages: messages});

        }.bind(this));
    }
    componentWillUnmount(){
        this.serverRequest.abort();
    }
    render(){

        return(
            <div className="">
                <ReactCSSTransitionGroup transitionName={
                		{
                			enter: 'fade-in',
                		}
                	} transitionEnterTimeout={500} transitionLeaveTimeout={0}>
                    {this.state.messages.map((message) => {
                        return <Message
                            avatar={message.author.avatar}
                            authorName={message.author.display_name}
                            body={message.body}
                            key={message.id}
                            subject= {message.subject}
                            updatedAt={message.posted_at}
                            topics={message.topics}
                            commentsCount={message.comments_count}
                            comments={message.comments}
                        />
                    })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}