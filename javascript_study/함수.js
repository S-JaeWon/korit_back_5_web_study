function add(num1, num2) {
    console.log("num1: " + num1);
    console.log(`num2: ${num2}`); // EL표현식 -> 문자열 안에서 변수 대입 가능 
    return num1 + num2;
}

console.log(add(10, 20));

let addFunction = add;

console.log(add);
console.log(addFunction);
console.log(addFunction(30, 40));

let user = {
    username: "jaewon",
    password: "1234",
    addFunction: function add(a, b) {
        return a + b
    }
}

console.log(user.addFunction(10, 20));
console.log(user, user.addFunction(10, 20));

// 익명 함수, 변수에 함수를 담기
let sub = function /*aaa, 이름 생략 가능*/(a, b) {
    return a - b;
}

let result1 = sub(10, 5);
console.log(result1);

console.log(sub);

// 화살표함수(람다함수)
let div = (a, b) => {
    return a / b;
}

console.log(div(10, 5));

div = (a, b) => a / b;
console.log(div(20, 5));
console.log(div); 