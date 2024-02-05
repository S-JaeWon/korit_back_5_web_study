const submitButton = document.querySelector(".input-submit");

// 이벤트 속성 (전 element에 들어있음)
submitButton.onclick = () => {
    //alert("알림창");
    const input = document.querySelector(".inputs");
    // alert(input.value); // input 안에 있는 값을 알림창으로 호출
    const dataList = document.querySelector(".data-list");
    
    dataList.innerHTML += `<li>${input.value}</li>`; // 태그 안에 자식 태그 생성
}

