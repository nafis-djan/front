const size = 10;
let page = 0;

start();

function start() {
    initHeader();

    const goodsPage = getAllGoods(page, size);
    goodsPage.then(data => {
        showGoods(data)
    });
}

function showGoods(data){
    let idSuffix = 0;
    data.forEach(el => {
        const outBlock = createOutBlock(idSuffix);
        const blockImage = createLeftBlock(idSuffix);
        const blockInfo = createRightBlock(idSuffix);
        const nameField = createNameField(idSuffix);
        const priceField = createPriceField(idSuffix);

        const img = createImage(200, 200, idSuffix);
        img.src = el.imageUrl;

        const link = document.createElement("a");
        link.href = "goods-info.html";
        link.textContent = el.name;
        link.setAttribute("onclick", `toGoodsInfoPage(${el._id})`);

        const price = document.createElement("span");
        price.textContent = el.price;

        document.querySelector("#middle-block").appendChild(outBlock);
        document.querySelector("#" + outBlock.getAttribute("id")).appendChild(blockImage);
        document.querySelector("#" + outBlock.getAttribute("id")).appendChild(blockInfo);
        document.querySelector("#" + blockImage.getAttribute("id")).appendChild(img);
        document.querySelector("#" + blockInfo.getAttribute("id")).appendChild(nameField);
        document.querySelector("#" + blockInfo.getAttribute("id")).appendChild(priceField);
        document.querySelector("#" + nameField.getAttribute("id")).appendChild(link);
        document.querySelector("#" + priceField.getAttribute("id")).appendChild(price);

        ++idSuffix;
    });
}

function toGoodsInfoPage(goodsId){
    localStorage.setItem("goodsId", goodsId);
}