//timestamps (This is stored in UTC which means it's time zone independent )
// Jan 1st 1970 00:00:00 am ==> 0
// pozitive numbers head into the future while negative numbers like -1000 head into the past
// are stored in milliseconds

var moment = require('moment');

// var date = moment();
// date.add(199, 'year').subtract(9, 'months');
//in format method introducem pathernuri pentru output
// console.log(date.format('MMM Do, YYYY h:mm:ss a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);
var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
