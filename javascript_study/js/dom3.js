const submitButton = document.querySelector(".button");
let index = 1;
submitButton.onclick = () => {
    const input1 = document.querySelector(".name");
    const input2 = document.querySelector(".age");
    const input3 = document.querySelector(".address");

    const dataList = document.querySelector(".table");

    
    dataList.innerHTML += `
        <tr>${index}</tr>
        <tr>${input1.value}</tr>
        <tr>${input2.value}</tr>
        <tr>${input3.value}</tr>
    `;
    index ++;
    
}