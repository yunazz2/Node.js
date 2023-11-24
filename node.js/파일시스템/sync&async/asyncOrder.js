// 순서를 유지하기 위한, 콜백 기반 비동기식 파일 입력
// 콜백 지옥~~~~~~~~~~~~~~~~~~ 에네르기 파~~~~~~~~~~~~~~~~~~
// 비동기식이지만 1번, 2번, 3번, ... 순서대로 나온다.
// => 그치만 가독성이 굉장히 떨어짐

const fs = require('fs');

console.log('시작');
fs.readFile('./test1.txt', (err, data) => {
    console.log('1번', data.toString());
    fs.readFile('./test1.txt', (err, data) => {
        console.log('2번', data.toString());
        fs.readFile('./test1.txt', (err, data) => {
            console.log('3번', data.toString());
            fs.readFile('./test1.txt', (err, data) => {
                console.log('4번', data.toString());
                fs.readFile('./test1.txt', (err, data) => {
                    console.log('5번', data.toString());
                    fs.readFile('./test1.txt', (err, data) => {
                        console.log('6번', data.toString());
                        fs.readFile('./test1.txt', (err, data) => {
                            console.log('7번', data.toString());
                            fs.readFile('./test1.txt', (err, data) => {
                                console.log('8번', data.toString());
                                fs.readFile('./test1.txt', (err, data) => {
                                    console.log('9번', data.toString());
                                    fs.readFile('./test1.txt', (err, data) => {
                                        console.log('10번', data.toString());
                                        console.log('끝');
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});