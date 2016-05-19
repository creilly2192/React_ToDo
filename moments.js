var moment = require('moment');

console.log(moment().format());

//jan 1st 1970 @ 12am

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1463670713;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YYYY @ h:mm a'));

//full month 3rd, 2016 @ 12:13 AM
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
