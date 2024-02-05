// 자바스크립트 객체 형태 = {key: value, key: value, ...}

let student = {
    name: "심재원",
    age: 29
}

console.log(student);
console.log(typeof(student));
console.log(student.name);

class Student {
    name;
    age;

    // 생성자
    constructor(name, age) {
        this.name = name;
        this.age =age;
    }
}

let s = new Student("홍길동", 10);
// s.name = "홍길동";
// s.age = 10;
console.log(s);

class User {
    #username; //# -> private
    password;

    set setUsername(username) {
        this.#username = username;
    }

    get username() {
        return this.#username;
    }
}

let user = new User();
user.setUsername = "jaewon"
console.log(user.username);

let dataMap = new Map();
dataMap.set("username", "jaewon");
dataMap.set("password", "1234");

console.log(dataMap);
console.log(dataMap.get("password"));