function handleAddClick() {
    const productInputs = document.querySelectorAll(".product-inputs");
    const product = {
        name: productInputs[0].value,
        price: productInputs[1].value,
        size: productInputs[2].value
    };

    console.log(product);
    const jsonProduct = JSON.stringify(product);
    console.log(jsonProduct);

    const option = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonProduct
    };

    fetch("http://localhost:8080/product/product", option)
    .then(response => {
        if (!response.ok) {
            // 상태 코드가 2xx(성공)가 아닌 경우에 reject 처리
            return response.json().then(error => Promise.reject(error));
        }
        return response.json();
    })
    .then(json => {
        console.log(json.product);
    })
    .catch(error => {
        console.log("에러");
        console.log(error);
        alert(error.errorMessage);
    });
}