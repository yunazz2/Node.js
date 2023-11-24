// 동기식 파일 입력
// - readFileSync()
// 실행시켜보면 1번, 2번, 3번이 항상 순서대로 나오나, 시간이 오래 걸린다.

const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./test1.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./test2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./test3.txt');
console.log('3번', data.toString());
console.log('끝');