// const fs = require('fs')            // 콜백 기반
const fs = require('fs').promises      // Promise 기반

setInterval(() => {
    // 파일 삭제
    // fs.unlink('파일 경로', 에러 콜백 함수)

    // 콜백 방식
    // fs.unlink('./test.js', (err) => {
    //     if(err) {
    //         console.log(err);
    //     }
    // })
    
    // Promise 방식
    fs.unlink('./test.js').catch(console.error)
}, 1000)