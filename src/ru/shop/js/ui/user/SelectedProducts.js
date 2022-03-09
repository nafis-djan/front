let mainDivName;

function showSelectedProducts(basket, divName) {
    mainDivName = divName;
    let idSuffix = 0;

    basket.selectedProducts.forEach(el => {
        const selProduct = getSelectedProductById(el.id);
        selProduct.then(data => {
            createSelProdElements(data, ++idSuffix)
        });
    });
}

function createSelProdElements(selProduct, idSuffix){
    const outBlock = createOutBlock(idSuffix);
    const blockImage = createLeftBlock(idSuffix);
    const blockInfo = createRightBlock(idSuffix);
    const nameField = createNameField(idSuffix);
    const priceField = createPriceField(idSuffix);

    const img = createImage(200, 200, idSuffix);
    img.src = selProduct.goods.imageUrl;

    const link = document.createElement("a");
    link.href = "goods-info.html";
    link.textContent = selProduct.goods.name;
    link.setAttribute("onclick", `toGoodsInfoPage(${selProduct.goods.id})`);

    const price = document.createElement("span");
    price.textContent = selProduct.price;

    document.querySelector("#" + mainDivName).appendChild(outBlock);
    document.querySelector("#" + outBlock.getAttribute("id")).appendChild(blockImage);
    document.querySelector("#" + outBlock.getAttribute("id")).appendChild(blockInfo);
    document.querySelector("#" + blockImage.getAttribute("id")).appendChild(img);
    document.querySelector("#" + blockInfo.getAttribute("id")).appendChild(nameField);
    document.querySelector("#" + blockInfo.getAttribute("id")).appendChild(priceField);
    document.querySelector("#" + nameField.getAttribute("id")).appendChild(link);
    document.querySelector("#" + priceField.getAttribute("id")).appendChild(price);
}

function toGoodsInfoPage(goodsId){
    localStorage.setItem("goodsId", goodsId);
}