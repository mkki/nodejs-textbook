const { URL } = require('url');

const myURL = new URL('http://gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams: ', myURL.searchParams);
console.log('searchParams.getAll(): ', myURL.searchParams.getAll);
myURL.searchParams.append('filter', 'es5');
console.log('searchParams.toString(): ', myURL.searchParams.toString());
console.log('searchParams: ', myURL.searchParams);