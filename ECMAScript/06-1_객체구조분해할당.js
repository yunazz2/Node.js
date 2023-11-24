const person = {
    name: 'aloha',
    age: 25,
    gender: 'female',
    height: 190,
  };
  
  // 객체의 구조 분해 할당(... : 나머지 매개변수)
  const { name, age, ...rest } = person;
  
  console.log(name); // 출력: 'aloha'
  console.log(age); // 출력: 25
  console.log(rest); // 출력: { gender: 'female', height: 190 }