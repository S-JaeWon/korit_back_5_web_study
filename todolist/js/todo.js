// window.onload /*화면 띄어졌을 때 */= () => 

window.onload = () => {
    getTodoList();

    const todoInput = document.querySelector(".todo-input");

    let ckey = 0;
    let ekey = 0;

 
    todoInput.onkeydown = (e) => {
        if(e.ctrlKey && e.keyCode === 13) {
            alert("test")
        }
    }
    // let arr = [1,2,3,4,5,6,7,8,9,10];
    // console.log(arr);
    // let newArr = [];

    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i]%2 === 0) {
    //         newArr.push(arr[i]);
    //     }
    // }

    // console.log(newArr);

    // let newArr2 = arr.filter(num => num % 2 === 0); // 배열안에 함수 가능

    // console.log(newArr2);

} // 새로고침 없이 입력시 바로 출력 

function getTodoList() { 
    const todoContenList = document.querySelector(".todo-content-list");
    
    const todoListJson = localStorage.getItem("todoList");
    const todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    todoContenList.innerHTML = ""; // 아래 반복이 돌기전에 한번 비워주는 명령어

    for(let todo of todoList) {
        todoContenList.innerHTML += `
            <li class="todo-content-box">
                <div class="todo-content-header">
                    <span>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <span class="todo-content-date">
                        ${todo.date}
                    </span>
                </div>
                <div class="todo-content-main">
                    <pre class="todo-content">${todo.content}</pre>
                </div>
                <div class="todo-content-footer">
                    <button class="todo-edit-button" onclick="handleEditTodoModalOpen(${todo.todoId})">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button class="todo-remove-button" onclick="handleRemoveTodoClick(${todo.todoId})">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </li>
        `;
    }
}

function handleRemoveTodoClick(todoId) {
    let selected = confirm("정말로 삭제하시겠습니까?");
    if(!selected) {
        return;
    }
    const todoListJson = localStorage.getItem("todoList");
    const todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();
    const newTodoList = todoList.filter(todo => todo.todoId !== todoId);
    
    localStorage.setItem("todoList",JSON.stringify(newTodoList));
    getTodoList();
}
