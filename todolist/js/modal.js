/*window -> 페이지 전체*/
// window.onload /*페이지 로드시*/ = () => {
//     /* const day = ["일", "월", "화", "수", "목", "금", "토"];

//     let now = new Date();
//     console.log(now.getFullYear());
//     console.log(now.getMonth() + 1);
//     console.log(now.getDate());
//     console.log(day[now.getDay()]); */
//     let arr = new Array();

//     let obj1 = {
//         id: 1,
//         name: "심재원"
//     }

//     let obj2 = {
//         id: 2,
//         name: "철수"
//     }

//     arr.push(obj1);
//     arr.push(obj2);

//     console.log(arr);

//     console.log(JSON.stringify(arr));
//     console.log(JSON.stringify(obj1));
//     console.log(JSON.stringify(obj2));

//     let jsonArr = JSON.stringify(arr);

//     console.log(JSON.parse(jsonArr));
// }

window.onkeyup = (e) => {
    if(e.keyCode === 27) /*esc -> 27*/{
        handleCancelClick();
    }
}

function handleAddTodoModalOpen() {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "추가하기";
    todoInput.value = "";
    submitButton.onclick = handleAddTodoSubmit;

    todoInput.onkeydown = (e) => {
        if(e.ctrlKey && e.keyCode === 13) {
            submitButton.click();
        }
    }

    modal.classList.add("modal-show");
}

function handleEditTodoModalOpen(todoId) {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "수정하기";
    
    let todoListJson = localStorage.getItem("todoList"); //수정 하기
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array(); //수정 하기
   
    let findTodoByTodoId = todoList.filter(todo => todo.todoId === todoId)[0]; //수정 하기

    todoInput.value = findTodoByTodoId.content;
    submitButton.onclick = () => handleEditTodoSubmit(todoId);

    todoInput.onkeydown = (e) => { // 엔터키로 입력 , 쉬프트 엔터로 줄바꿈 
        if(e.keyCode === 13 && !e.shiftKey) {
            submitButton.click();
        }
    }

    modal.classList.add("modal-show");
}

function convertDateKor(currentDate) {
    const dayKor = ["일", "월", "화", "수", "목", "금", "토"];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const day = dayKor[currentDate.getDay()];
    return `${year}년 ${month}월 ${date}일 (${day})`
}

function handleAddTodoSubmit() {
    const modal = document.querySelector(".root-modal");
    const todoInput = modal.querySelector(".todo-input");
    modal.classList.remove("modal-show");

    
    let todoListJson = localStorage.getItem("todoList"); 
    /* 로컬스토리지에서 todoListJson 가져옴, 키값 todoList : value (추가하기에 타이핑한 내용)
        , 한번은 가져와야 함. 초기값 null*/
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();
    /* todoList 값 있다면 가져오고 없다면 새배열 만들기 */ 
    let lastTodoId = todoList.length === 0 ? 0 : todoList[todoList.length - 1].todoId;
    /* 마지막 인덱스 번호 = 배열 길이 - 1, 길이 0 -> 빈 배열, 0이 아니면 값이 들어있는 배열 */ 
    let todoObject = {
        todoId: lastTodoId + 1,
        content: todoInput.value,
        date: convertDateKor(new Date())
    }

    todoList.push(todoObject);

    localStorage.setItem("todoList", JSON.stringify(todoList));
    getTodoList(); //todo.js에 있는 함수지만 연결되어있음 
    
}

function handleEditTodoSubmit(todoId) {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");

    let todoListJson = localStorage.getItem("todoList"); 
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();
    
    let findIndex = -1;

    // 필터x 반복문으로 찾기
    for(let i = 0; i < todoList.length; i++) {
        if (todoList[i].todoId === todoId) {
            findIndex = i;
            break;
        }
    }

    if (findIndex === -1) {
        alert("수정오류!");
        return;
    }
    
    todoList[findIndex].content = document.querySelector(".todo-input").value;
    todoList[findIndex].date = convertDateKor(new Date());

    localStorage.setItem("todoList", JSON.stringify(todoList));
    getTodoList();
}

function handleCancelClick() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}