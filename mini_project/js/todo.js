function handleAddClick() {
    const contentList = document.querySelector(".content-list")
    const contentText = document.querySelector(".content-text")
    
    contentList.innerHTML += `
        <li class="content-inputs">
            ${contentText.value} 
            <input type="checkbox" class="content-checkbox">
        </li>
    `;

    contentText.value = "";
}

function handleRemoveClick() {
    const contentList = document.querySelector(".content-list");
    const checkboxes = document.querySelectorAll(".content-checkbox");

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            // 체크된 경우 해당 li 요소를 찾아서 삭제합니다.
            const listItem = checkbox.closest(".content-inputs");
            contentList.removeChild(listItem);
        }
    });
}