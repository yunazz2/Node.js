
const axios = require('axios')  // 모듈을 사용하기위해 작성

const url = 'https://httpbin.org/post'
const data = {name : 'joeun', age : 20}
const headers = {
    'ContentType' : 'application/json'
}

// axios POST 요청
axios.post(url, data, headers)
     .then(response => {
        console.log('Response : ', response.data);
     })
     .catch(error => {
        console.log('Error : ', error);
     })