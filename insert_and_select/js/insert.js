async/**비동기 처리 */ function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    const data = { 
        name: dataInputs[0].value, //querySelectorAll 같은 클래스를 배열로 갖고옴
        age: dataInputs[1].value
    };

    console.log(data);
    const jsonData = JSON.stringify(data); // 객체를 json
    console.log(jsonData);
    // const dataObj = JSON.parse(jsonData); // json을 객채
    // console.log(dataObj);

    const option = { // post 요청
        // 키 : 밸류
        method: "post", 
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    };

    /**
    fetch("http://localhost:8080/insert_and_select/data/addition", option) //기본 요청 DoGet (오류:405), fetch api -> 요청 옵션 제공
    .then(response => {
        response.json()
        .then((json) => {
            console.log(json.data)
        });
    }).catch((error) => { 
        console.log("프로미스 에러 처리");
        console.log(error);
    });
    // 아래 코드와 성능 동일
    */ 
    
    try {
        const response = await fetch("http://localhost:8080/insert_and_select/data/addition", option) 

        if(!response.ok) {
            throw await response.json();
        }

        console.log(response);
        
        const json = response.json; // -> Promise

        console.log(json);


        console.log("test");
    } catch(error) {
        // console.log("에러 처리");
        // console.log(error);
        console.log(error);
        alert(error.errorMessage);
    }
    // 윗코드와 성능은 동일하지만 async function 함수를 써야 하므로 동기처리를 하고자하는 곳은 따로 처리해줘야됨!
}