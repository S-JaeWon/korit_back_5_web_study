main();

let complete = [false, false, false, false];

function main() {
    const promises = [
    call(0, 4, "철수"),
    call(1, 1, "영희"),
    call(2, 3, "민지"),
    call(3, 2, "예지")
    ];

    Promise.all(promises).then(result => {console.log(result)}); // promise가 다 실행될 때까지 기다리다 호출 시 모든 값을 배열에 담는다.
}

function call(index, time, name) {
    const P = new Promise((resolve, reject) => {
        console.log(`${name}: 다 한 사람!`)
        
        // resolve(() => {
        //     setTimeout(() => {
        //         console.log(`${name}: 네!`);
        //     }, time*  1000);
        // });

        setTimeout(() => {
            console.log(`${name}: 네!`);
            //complete = complete.map((value, cIndex) => cIndex !== index ? value : true);
            //resolve("완.료!");
            resolve(/**complete*/ true);
        }, time*  1000);

    });

    return P;

    // function resolve(result) {
    //     result();
    // }

    //P.then(resolve);

    // P.then((result)/** resolve 함수 */=> {
    //     result();
    //     return "완료";
    // }).then((result) => {
    //     console.log(result);
    // });

    // P.then((result) => { // 비동기가 끝나면 resolve 호출 
    //     console.log(result);
    // })
    // promise -> resolve 호출 / resolve -> return 호출 
}