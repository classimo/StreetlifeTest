import React from 'react';

export default class MessageTopicsList extends React.Component {
    render(){
        return(
            <div className="message-topics">
                {this.props.topics.map((topic) => {
                    return <span className="topic" key={topic.slug}>{topic.name}
                    </span>
                })}
            </div>
        )
    }
}