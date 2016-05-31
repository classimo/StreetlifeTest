import React from 'react';
import ReactDOM from 'react-dom';
import NewsFeed from '../source/scripts/NewsFeed';
import {timeAgo} from '../source/scripts/lib/lib';
// import { shallow, mount, render } from 'enzyme';
// import Message from '../source/scripts/Message';
// import MessageHeader from '../source/scripts/MessageHeader';
// import MessageBody from '../source/scripts/MessageBody';
// import MessageFooter from '../source/scripts/MessageFooter';
// import MessageComments from '../source/scripts/MessageComments';
//

describe('time ago function', function () {
    it('returns what it should return', function () {
        expect(timeAgo(new Date(2016, 4, 31, 16, 50, 0), '2016-05-31T16:40:00.000000+00:00')).toBe('10 minutes ago');
        expect(timeAgo(new Date(2016, 4, 31, 16, 41, 1), '2016-05-31T16:40:00.000000+00:00')).toBe('1 minute ago');
        expect(timeAgo(new Date(2016, 4, 31, 16, 40, 59), '2016-05-31T16:40:00.000000+00:00')).toBe('59 seconds ago');
        expect(timeAgo(new Date(2016, 4, 31, 16, 40, 1), '2016-05-31T16:40:00.000000+00:00')).toBe('1 second ago');
        expect(timeAgo(new Date(2016, 4, 31, 18, 40, 59), '2016-05-31T16:40:00.000000+00:00')).toBe('2 hours ago');
        expect(timeAgo(new Date(2016, 4, 31, 18, 41, 59), '2016-05-31T17:40:00.000000+00:00')).toBe('1 hour ago');
        expect(timeAgo(new Date(2016, 5, 1, 18, 41, 59), '2016-05-31T17:40:00.000000+00:00')).toBe('1 day ago');
        expect(timeAgo(new Date(2016, 5, 3, 18, 41, 59), '2016-05-31T17:40:00.000000+00:00')).toBe('3 days ago');
        expect(timeAgo(new Date(2016, 8, 10, 18, 41, 59), '2016-05-31T17:40:00.000000+00:00')).toBe('3 months ago');
        expect(timeAgo(new Date(2016, 6, 3, 18, 41, 59), '2016-05-31T17:40:00.000000+00:00')).toBe('1 month ago');
        expect(timeAgo(new Date(2017, 4, 31, 18, 41, 59), '2016-05-31T17:40:00.000000+00:00')).toBe('1 year ago');
        expect(timeAgo(new Date(2018, 4, 31, 18, 41, 59), '2016-05-31T17:40:00.000000+00:00')).toBe('2 years ago');
    })
});


describe('newsFeed', function () {
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
