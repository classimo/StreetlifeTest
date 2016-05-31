import React from 'react';
import ReactDOM from 'react-dom';
import NewsFeed from '../source/scripts/NewsFeed';
// import { shallow, mount, render } from 'enzyme';
// import Message from '../source/scripts/Message';
// import MessageHeader from '../source/scripts/MessageHeader';
// import MessageBody from '../source/scripts/MessageBody';
// import MessageFooter from '../source/scripts/MessageFooter';
// import MessageComments from '../source/scripts/MessageComments';
//


describe('welcome', function () {
    it('loads without problems', function () {
        var html = document.getElementsByTagName('html')[0];
        var divCanvas = document.createElement('div');
        var divAppCointainer = document.createElement('div');
        divAppCointainer.id = 'app-container';
        divCanvas.appendChild(divAppCointainer);
        ReactDOM.render(<NewsFeed/>, divAppCointainer);
        document.body.appendChild(divCanvas);
    })
});
