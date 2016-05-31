import React from 'react';
import { findDOMNode } from 'react-dom';

export default class Mugshot extends React.Component{
    componentDidMount() {
        var canvas = findDOMNode(this);
        var context = canvas.getContext('2d');
        var imageObj = new Image();
        imageObj.src = this.props.src;
        imageObj.onload = function () {
            var sourceX, sourceY, sourceWidth, sourceHeight = 0;

            if (imageObj.width > imageObj.height) {
                sourceHeight = imageObj.height;
                sourceWidth = imageObj.height;
                sourceY = 0;
                sourceX = (sourceWidth - sourceHeight) / 2;
            } else {
                sourceHeight = imageObj.width;
                sourceWidth = imageObj.width;
                sourceY = (sourceHeight - sourceWidth) / 2;
                sourceX = 0
            }
            canvas.width = sourceWidth;
            canvas.height = sourceHeight;

            var destWidth = sourceWidth;
            var destHeight = sourceHeight;
            var destX = 0;
            var destY = 0;

            context.drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
        }
    }
    render(){
        return(
            <canvas />
        )
    }
}