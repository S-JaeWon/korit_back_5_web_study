function handleSubmitClick() {
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
        "content-Type": "application/json"
        },
        body: jsonData
    };

    fetch("http://localhost:8080/insert_and_select/data/addition", option) //기본 요청 DoGet (오류:405), fetch api -> 요청 옵션 제공
    .then(response => {
        response.json()
        .then((json) => {
            console.log(json.data)
        });
    }); 
    console.log("test");
}