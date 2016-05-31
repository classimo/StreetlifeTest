import React from 'react';

export default class CommentBody extends React.Component {
    render() {
        return (
            <div className="comment-body" dangerouslySetInnerHTML={{__html: this.props.body}}>
            </div>
        )
    }
}