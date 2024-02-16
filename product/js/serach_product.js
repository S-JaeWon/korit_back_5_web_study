async function handleSearchClick() {
    try {
        const response = await fetch("http://localhost:8080/product/products"); // 기본요청이 get 이므로 option 추가 x
        if(!response.ok) {
            throw await response.json();
        } 

        const responseProduct = await response.json();

        const productList = document.querySelector(".product-list")
        productList.innerHTML = ``;

        for(let product of responseProduct.product) {
            productList.innerHTML += `
                <tr>
                    <td>${product.productId}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.size}</td>
                </tr>
            `;
        }
    } catch(error) {
        console.log(error);
    }
}
 /**
  * function handleSearchClick() {
    fetch("http://localhost:8080/product/products")
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => Promise.reject(error));
            }
            return response.json();
        })
        .then(responseProduct => {
            const productList = document.querySelector(".product-list");
            productList.innerHTML = ``;

            for (let product of responseProduct.product) {
                productList.innerHTML += `
                    <tr>
                        <td>${product.productId}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.size}</td>
                    </tr>
                `;
            }
        })
        .catch(error => {
            console.log(error);
        });
}

  */