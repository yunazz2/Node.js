// fetch 함수로 get 방식으로 비동기 요청을 날림
async function fetchData() {
    const response = await fetch('https://httpbin.org/get');
    const data = await response.json();
    return data;
}

fetchData()
.then((result) => {
console.log(result);
})

.catch((error) => {
console.log(error);
})