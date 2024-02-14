async function fx1() {
    console.log("fx1 비동기 호출");
    //return 10; // 함수의 retunr 값이 아닌 resolve를 뜻함 -> .then 으로 호출 가능
    // async 사용시 function 은 함수가 아닌 Promise로 작동
    // 기본적으로 resolve를 포함함, 따로 명시 안해도 .then 호출 가능

    // async 안에서 reject 호출
    //throw new Error();
    return 10;
}

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num + "출력")
}

async function fx3() {
    let arg = 0;
    /**
    fx1().then((result) => {
        arg = result
        console.log(arg);
        fx2(arg);
    });
    */
    let fx1Result = await fx1(); //fx1Result에 fx1() 값 대입, await: 비동기를 동기로
    arg = fx1Result
    await fx2(arg);

}

async function handleSubmitClick2() {
    //async 사용시 리턴타입 Promise 
    //console.log(fx1()); // -> 10 호출 x, Promise가 호출됨 
    /**
    fx1().then((result) => { // retrun 10 호출 하려면 .then 사용 
        console.log("then 호출");
        //console.log(result);
    }).catch(() => { // reject 호출시 사용 가능 
        console.log("오류 생성")
    });

    console.log("동기 실행"); // -> 동기 처리 
    */
   await fx3();
}

function handleSubmitClick() {
    const p1 = new Promise((resolve, reject) => {
        console.log("p1 프로미스 실행");
        // resolve 호출 
        //resolve(); 
        reject(); // 예외처리에 쓰임 
    });
    
    // then -> Promise가 실행된 이후 (p1이 실행이 되야 함 -> resolve가 호출이 되어야 함)
    p1.then(()=> {
        console.log("p1 then 실행")
        return 10;
    }).then((num) => {
        console.log(num);
    }).then(() => {
        console.log("세번째 then"); // .then 을 통해 순서대로 사용 가능 
    }).catch(() => {
        console.log("오류"); // resolve 호출 x -> catch만 동작!
    }); // .then, .cateh 는 비동기 처리
 
    // reject 호출 시 catch 동작
    p1.catch(() => {
        console.log("오류");
    });

    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });
    
    console.log("동기 실행");
}
