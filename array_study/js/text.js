let textList = [];

const textInput = document.querySelector(".text-input");
const textContentMain = document.querySelector(".text-content-main");

textInput.onkeyup = (e) => {
    if (e.keyCode === 13) {
        textContentMain.textContent = textInput.value;
        textInput.value = "";
        
    }
}

const editTextInput = document.querySelector(".edit-text-input");
const editButton = document.querySelector(".edit-button");

editButton.onclick = () => {
    textContentMain.textContent = editTextInput.value;
    editTextInput.value = "";
}

const removeButton = document.querySelector(".remove-button");

removeButton.onclick = () => {
    textContentMain.textContent = "";
}

// editTextInput.onkeyup = (e) => {
//     if (e.keyCode === 13) {
//         textContentMain.textContent = editTextInput.value;
//         editTextInput.value = "";
//     }
// }