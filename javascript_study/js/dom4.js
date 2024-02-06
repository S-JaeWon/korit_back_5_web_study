const addBoxButton = document.querySelector(".add-box-button");
const boxcontainer2 = document.querySelector("#box2");


addBoxButton.onclick = () => {
    const boxcontainer = document.querySelector(".box-container");
    boxcontainer.innerHTML += `<div class="box"></div>`;
    // 박스 추가 기능
    
    const boxList = document.querySelectorAll(".box");
    // 추가한 박스 객체 호출

    for (const box of boxList) {
        box.onclick = () => {
            let isRedBox = box.classList.contains("red-box");
            let isBlueBox = box.classList.contains("blue-box")
            if (isBlueBox) {
                box.classList.remove("blue-box");
                box.classList.add("red-box");
            } else if (isRedBox) {
                boxcontainer.removeChild(box);
                boxcontainer2.appendChild(box);
            }  else {  
                box.classList.add("blue-box");
                
                // boxcontainer.appendChild();
                // //객체 추가하기
            }
        }
    }
    
}

