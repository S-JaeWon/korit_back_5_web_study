async function handleAddClick() {
    const contentList = document.querySelector(".content-list");
    const contentText = document.querySelector(".content-text");

    // contentText 값이 빈 문자열인지 확인
    if (contentText.value.length === 0) {
        // 만약 비어 있다면 아무 작업도 하지 않고 함수 종료
        return;
    }

    // 리스트에 추가
    contentList.innerHTML += `
        <li class="content-inputs">
            ${contentText.value} 
            <input type="checkbox" class="content-checkbox">
        </li>
    `;

    // 서버에 데이터 전송
    const content = {
        content: contentText.value
    };

    try {
        const response = await fetch("http://localhost:8080/todo_list/todo", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(content)
        });

        if (!response.ok) {
            throw await response.json();
        }

        const jsonResponse = await response.json();
        console.log(jsonResponse);
        alert("등록 완료");
    } catch (error) {
        console.error("에러 발생:", error?.errorMessage);
        alert("오류");
    }

    // 입력 필드 초기화
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

function handleInsertClick() {
    const contentText = document.querySelectorAll(".content-text");
    const content = {
        content: contentText[0].value

    };

    console.log(content);
    const jsonContent = JSON.stringify(content);
}