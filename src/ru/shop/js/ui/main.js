const size = 10;
let page = 0;

start();

function start() {
    const goodsPage = getAllGoods(page, size);
    goodsPage.then(data => {
        showGoods(data)
    });
}

function showGoods(data){
    const content = data.content;
    let idSuffix = 0;
    content.forEach(el => {
        const tableRow = document.createElement("tr");
        tableRow.setAttribute("id", "row" + idSuffix);
        const idRow = "#row" + idSuffix;

        const tableDataImage = document.createElement("td");
        tableDataImage.setAttribute("id", "td" + idSuffix);
        tableDataImage.setAttribute("width", "50%");
        const idTdImage = "#td" + idSuffix;

        const tableDataText = document.createElement("td");
        tableDataText.setAttribute("id", "td" + ++idSuffix);
        const idTdText = "#td" + idSuffix;

        const img = document.createElement("img");
        img.src = el.imageUrl;
        img.width = 200;
        img.height = 200;

        const link = document.createElement("a");
        link.href = "goods-info.html";
        link.textContent = "name: " + el.name;
        link.setAttribute("onclick", `toGoodsInfoPage(${el.id})`);

        const br = document.createElement("br");

        const price = document.createElement("p");
        price.textContent = "price: " + el.price;

        document.querySelector("#goods-table").appendChild(tableRow);
        document.querySelector(idRow).appendChild(tableDataImage);
        document.querySelector(idRow).appendChild(tableDataText);
        document.querySelector(idTdImage).appendChild(img);
        document.querySelector(idTdText).appendChild(link);
        document.querySelector(idTdText).appendChild(br);
        document.querySelector(idTdText).appendChild(price);

        ++idSuffix;
    });
}

function toGoodsInfoPage(goodsId){
    localStorage.setItem("goodsId", goodsId);
}

function toLoginPage(){
    window.location.replace("login-user.html");
}