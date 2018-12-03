const url = require('url');

const URL = url.URL;

// WHATWG 방식의 url 생성
const myURL = new URL('http://gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');

console.log('new URL(): ', myURL);
console.log('-----------------------');
const parseURL = url.parse('http://gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse(): ', parseURL);
