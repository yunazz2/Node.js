// * 속성 축약
const name = 'aloha';
const age = 20;

// 기존 방식
const person1 = {
  name: name,
  age: age
};

// 향상된 객체 문법
const person2 = {
  name,
  age
};

console.log(person1); // { name: 'aloha', age: 20 }
console.log(person2); // { name: 'aloha', age: 20 }

// -------------------------------------------------------
// * 계산된 속성명
const key = 'gender';

const person = {
  name: 'aloha',
  age: 25,
  [key]: 'female'
};

console.log(person); // { name: 'aloha', age: 25, gender: 'female' }

// --------------------------------------------------------
// * 메소드 축약
// 기존 방식
const obj1 = {
    method1: function() {
      console.log('method1() - 기존 방식으로 메소드 정의')
    }
};
  
  // 향상된 객체 문법
const obj2 = {
    method1() {
        console.log('method2() - 향상된 방식으로 메소드 정의');
    }
};

obj1.method1()
obj2.method1()