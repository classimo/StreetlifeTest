export function timeAgo(dateNow, dateToCompare) {
    var date = new Date(dateToCompare);
    date = date.getTime() + date.getTimezoneOffset() * 60000; //convert to local time
    var seconds = Math.floor((dateNow - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
        return interval > 1 ? interval + " years ago" : interval + " year ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval > 1 ? interval + " months ago" : interval + " month ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval > 1 ? interval + " days ago" : interval + " day ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval > 1 ? interval + " hours ago" : interval + " hour ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval > 1 ? interval + " minutes ago" : interval + " minute ago";
    }
    return Math.floor(seconds) > 1 ? Math.floor(seconds) + " seconds ago" : Math.floor(seconds) + " second ago";
}