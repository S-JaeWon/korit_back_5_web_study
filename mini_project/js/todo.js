function getTodoList() {
    const contentList = document.querySelector(".content-list")

    contentList.innerHTML = "";

    for(let content of contentList) {
        contentList.innerHTML += `
        <li class="content-inputs">${}<input type="checkbox" class="content-checkbox"></li>
        `;
    }
}