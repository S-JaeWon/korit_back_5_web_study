// spread연산 
/**
let array = [1,2,3,4];
array.push(5); // 배열에 5추가
array = [...array, 5, 6, ...array]; // ...array: 배열 안에 있는 값 복사/ , value: 배열에 값 추가 

console.log(array); // (12) [1, 2, 3, 4, 5, 5, 6, 1, 2, 3, 4, 5] 

let obj = {
    name: "심재원",
    age: 29
}

let obj2 = { // ...obj: obj 값 복사 ex) name: "심재원", age: 29 값 복사 
    ...obj,
    name: "김철수", 
    name: "이영희"
    // 키값으로 이미 name이 있을 때, 뒷값으로 덮어씀
}
console.log(obj); // {name: '심재원', age: 29}
console.log(obj2); // {name: '심재원', age: 29}

// 비구조 할당 
let obj = {
    id: 1,
    name: "심재원",
    age: 29
}

//console.log(obj.id);

let {id, name, age} = obj; // 비구조 할당

console.log(id); // 각각 변수를 만들어줘서 obj. ~ 할 필요 없음
*/


let dataList = []; // 객체 생성 후 배열 생성 

window.onload = () => {
    getDataList(); // localstorage에 내용이 있다면 불러옴  
    
    const textInput = document.querySelector(".text-input");

    textInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            const inputValue = textInput.value;
            //console.log(inputText);

            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id; // 'dataList.length - 1' 는 마지막 인덱스
            // [id: 1, content: inputValue], id: 2, content: inputValue], id: 3, content: inputValue]
            // 여기서 lastId 는 마지막인 id가 3인값 불러옴

            const dataObj = { // id와 값(content)이 inputValue 객체 생성
                id: lastId + 1, // 배열에 값 추가 하려면 마지막 인덱스 보다 1 커야 함!
                content: inputValue
            }

            fetch("http://localhost:8080/data_array/data/addition", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataObj)
            });

            dataList = [...dataList, dataObj]; // spread연산으로 생성한 배열에 객체 푸쉬

            textInput.value = ""; // 이벤트 발생 후 칸 공백으로 만들어줌

            getDataList(); // 리스트 업데이트!
        }
    }
}

function ContentData(/*dataObj*/ {id, content}) { // 비구조 할당을 통해 ({id, content})을 넣어 dataObj. 생략 가능
    return `
        <li>
            <span>${/*dataObj.id*/id}번 </span>
            <span>${/*dataObj.content*/content} </span>
            <input type="text" class="edit-text-input" value="${content}">
            <button onclick="editData(${id})">수정</button>
            <button onclick="removeData(${id})">삭제</button>
        </li>
        `
}


function getDataList() { // ul 안에 li들이 복사되는 함수 생성 
    const contentList = document.querySelector(".content-list");

    contentList.innerHTML = ""; // 먼저 안에 있는 내용은 한번 비워줌! <li> ~ </li> 지워줌

    for(let dataObj of dataList) { // 배열값 하나씩 꺼내서 dataObj에 대입
        contentList.innerHTML += ContentData(dataObj);
        /**` 
            <li>
                <span>${dataObj.id}번 </span>
                <span>${dataObj.content} </span>
                <input type="text" class="edit-text-input" value="${dataObj.content}">
                <button onclick="editData(${dataObj.id})">수정</button>
                <button onclick="removeData(${dataObj.id})">삭제</button>
            </li>
        `;*/
    }

}

/**
function findId(dataObj) { //함수를 지역 변수로 만들어서 filter 안에 넣기
    return dataObj.id === 1;
}
*/ //밖에 있으면 id 값 비교 x 

function removeData(id) { // 제거 버튼 함수, 지워줄 매개변수 정해줌 ex)배열의 키값 혹은 인덱스 값 전달
    //const findId = function () {}; = const findId = () => {};

    /**
    const findId = (dataObj) => { // id 값을 받아서 비교 
        return dataObj.od === id;
    }
    */ 
    //const findId = (dataObj) => dataObj.id === id; // 위 함수를 람다식으로 변형 

    //{id:1, content: 값1}, {id:2, content: 값2}, {id:3, content: 값3}
    
    //dataList.filter(findId); // 매개변수를 함수로 받음
    dataList = dataList.filter((dataObj) => dataObj.id !== id); 
    // !== id -> true 면 배열에 값 넣기, false 면 값 넣기x , false인 값만 지워진 새배열 덮어쓰기 
    getDataList(); // 리스트 업데이트!
}

function editData(id) { // 수정 버튼 함수 
    let findIndex = -1;

    for(let i = 0; i < dataList.length; i++) {
        if(dataList[i].id === id) { // 반복을 통해 찾고자 하는 id의 인덱스 찾기 
            findIndex = i; // 같다면 i 값 담기
            break; // 찾은 시점에서 반복 종료
        }
    }

    /**
    let findObj = dataList.filter(dataObj => dataObj.id === id)[0]; 
    // [0]을 명시 안하면 id와 같은 값이 존재하는 '배열'이 생성됨. 명심함으로서 객체 생성
    findIndex = dataList.indexOf(findObj);
    */

    const editTextInput = document.querySelectorAll(".edit-text-input");

    dataList[findIndex].content = editTextInput[findIndex].value;

    getDataList(); // 리스트 업데이트!
}













