const menu1= {
    path: "/test/menu",
    params: {
        page: 1,
        searchValue: "테스트"
    }
}

const result = "/test/menu?page=1&searchValue=테스트";

const result2 = menu1.path + "?"
console.log(result2);

const entries = Object.entries(menu1.params);
console.log(entries.map(([key, value]) => key + "=" + value));

const names = [""]
const name2 = names.join("&");

