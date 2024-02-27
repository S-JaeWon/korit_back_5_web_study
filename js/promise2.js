main();

function main() {
    //setTimeout(() => console.log(1), 3000); // 비동기, 3초후에 실행
    new Promise((resolve, reject) => {
        console.log(1);
        console.log(2);
        setTimeout(() => {
            console.log(4);
            resolve(100 /** 값, 객체, 매개변수, 함수 등등 */);
        }, 3000);
    }).then((num /** 100을 받아옴 */) => {
        console.log(5);
        console.log(num);
    });
    console.log(3);
}