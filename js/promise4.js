main();

function main() {
    // let result = [];

    // new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve(1);
    //     }, 3000);
    // }).then((num1) => {
    //     result = [...result, num1]; 

    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(2);
    //         }, 2000);
    //     });
    // }).then((num2) => {
    //     result = [...result, num2];

    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(3);
    //         }, 1000);
    //     });
    // }).then((num3) => {
    //     result = [...result, num3];
    //     console.log(result); // [1, 2, 3] 출력
    // });

    let result1 = [];

    new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 3000);
    }).then((num) => {
        result1 = [...result1, num]; 

        new Promise((resolve) => {
            setTimeout(() => {
                resolve(2);
            }, 2000);
        })
        }).then(num => {
            result1 = [...result1, num];
            
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve(2);
                }, 2000);
            })
            }).then(num => {
                result1 = [...result1, num];

                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(3);
                    }, 1000);
                })
                });

    let result = [];

    new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(1);
            },3000);//정의 3초뒤에 resolve호출 num에 대입 밑에 있는 then 3초뒤에 실행
        }).then(num => {
            result = [...result, num]; // 3초뒤에 result에 1이 들어간다. then이 result에 값을 넣고 Promise 실행
            new Promise((resolve, reject) => {
                setTimeout(() => {
                resolve(2);
                },2000);//정의 2초뒤에 resolve호출 then실행
            }).then(num => {
                result = [...result, num]; // 3초뒤에 result에 1이 들어간다.
                new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(3);
                    },1000);//정의 1초뒤에 resolve호출 then실행
                }).then(num => {
                    result = [...result, num]; // 3초뒤에 result에 1이 들어간다.
                    return result;
                    }).then(r => console.log(r)); //result r로 받아서 Promise.all().then()과 같다.
                });
            });
    
    
}