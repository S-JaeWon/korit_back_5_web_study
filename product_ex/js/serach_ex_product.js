async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/product_ex/ex/products");
        // 있는 데이터 출력이므로 response.ok 확인 x 
        const responseProduct = await response.json();

        const productList = document.querySelector(".product-list");
        productList.innerHTML = "";

        for(let product of responseProduct) {
            productList.innerHTML += ProductInfoTr(product);
        }

    } catch(error) {
        console.log(error);
    }
}

function ProductInfoTr({productId, productName, productPrice, productSize}) {
    return`
        <tr>
            <td>${productId}</td>
            <td>${productName}</td>
            <td>${productPrice}</td>
            <td>${productSize}</td>
        </tr>
    `;
}