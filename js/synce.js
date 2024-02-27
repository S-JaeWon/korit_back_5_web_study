main();

function main() {
    p1(3, "data1").then(result => console.log(result));
    setTimeout(() => p2("data2").then(result => console.log(result)), 4000);
    p2("data3").then(result => p3(result, 100).then(result => console.log(result)));
    p4("data4");
}

function p1(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, time*1000);
    });
}

async function p2(data) { // async 는 resolve 가 없기 때문에 return을 해줘야 함 
    return data;
}

async function p3(data, value) {
    return {
        [data]: value 
    }
}

async function p4(data) { 
    // const r1 = await p2(data);
    // const r2 = await p3(r1, 200);
    const r2 = await p3 (await p2(data), 200);
    console.log(r2);
}

