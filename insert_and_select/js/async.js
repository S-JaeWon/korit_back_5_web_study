// 코드 러너 / 노드js 

// 동기 처리
console.log(1);
console.log(2);
console.log(3); 

// 비동기 처리

// setTimeout(() => { 
//     console.log(4);
//     setTimeout(() => {
//         console.log(5);
//         setTimeout(() => {
//             console.log(6);
//             setTimeout(() => {
//                 console.log(7);
//             }, 2000); 
//         }, 2000); 
//     }, 2000); 
// }, 3000);


// Promise 형태
// new Promise((resovle, reject) => {  
//     setTimeout(() => {
//         console.log("1번");
//     }, 2000);
//     resovle("3번");
// }).then((result) => {
//     console.log(result);
// }); 

// console.log("2번");


console.log("프로그램 시작"); 

const p = new Promise((resovle, reject) => {
    console.log("여기서");
    console.log("여기까지");
    if(0 === 0){
        resovle("?");
    } else {
        reject(new error);
    }
});

p.then(() => {
    console.log("3초 뒤에 출력");
}).catch(() => {
    console.log(error);
}).finally(() => {

});

console.log("여기가 먼저");