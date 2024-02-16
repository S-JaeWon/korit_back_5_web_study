async function handleAddClick() {
    const productInputs = document.querySelectorAll(".product-inputs");

    const product = {
        productName: productInputs[0].value,
        productPrice: parseInt(productInputs[1].value),
        productSize: productInputs[2].value
    }


    try {
        const response = await fetch ("http://localhost:8080/product_ex/ex/product", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        });

        if(!response.ok) {
            throw await response.json();
        }

        const responseProduct = await response.json();
        console.log(responseProduct);
        alert(`${responseProduct.successCount}건의 상품 추가 완료`);
    } catch(error) {
        alert(error?.errorMessage); // 객체가 null, 참조 할 수 없는 경우 작동 안함 (undefined)
    }

    

}