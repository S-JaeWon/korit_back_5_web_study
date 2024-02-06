const submitButton = document.querySelector(".button");

let index = 1;

submitButton.onclick = () => {
    const input1 = document.querySelector(".name");
    const input2 = document.querySelector(".age");
    const input3 = document.querySelector(".address");

    const dataList = document.querySelector(".table");

    
    dataList.innerHTML += `
        <tr>
            <td>${index}</td>
            <td>${input1.value}</td>
            <td>${input2.value}</td>
            <td>${input3.value}</td>
        </tr>
    `;
    index ++;
    
    input1.value = "";
    input2.value = "";
    input3.value = "";
}