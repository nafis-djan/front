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
        const outBlock = document.createElement("div")
        outBlock.setAttribute("id", "out-block" + idSuffix);
        const idOutBlock = "#out-block" + idSuffix;

        const blockImage = document.createElement("div");
        blockImage.setAttribute("id", "block-image" + idSuffix);
        const idBlockImage = "#block-image" + idSuffix;
        blockImage.style.textAlign = "center";
        blockImage.style.float = "left";
        blockImage.style.width = "50%";
        blockImage.style.overflow = "hidden";

        const blockInfo = document.createElement("div");
        blockInfo.setAttribute("id", "block-info" + idSuffix);
        const idBlockInfo = "#block-info" + idSuffix;
        blockInfo.style.width = "50%";
        blockInfo.style.float = "right";
        blockInfo.style.marginTop = "50px";
        blockInfo.style.height = "200px";

        const pName = document.createElement("p");
        pName.setAttribute("id", "p-name" + idSuffix);
        const idPName = "#p-name" + idSuffix;
        pName.textContent = "Name: "

        const pPrice = document.createElement("p");
        pPrice.setAttribute("id", "p-price" + idSuffix);
        const idPPrice = "#p-price" + idSuffix;
        pPrice.textContent = "Price: "

        const img = document.createElement("img");
        img.src = el.imageUrl;
        img.width = 200;
        img.height = 200;

        const link = document.createElement("a");
        link.href = "goods-info.html";
        link.textContent = el.name;
        link.setAttribute("onclick", `toGoodsInfoPage(${el.id})`);

        const price = document.createElement("span");
        price.textContent = el.price;

        document.querySelector("#middle-block").appendChild(outBlock);
        document.querySelector(idOutBlock).appendChild(blockImage);
        document.querySelector(idOutBlock).appendChild(blockInfo);
        document.querySelector(idBlockImage).appendChild(img);
        document.querySelector(idBlockInfo).appendChild(pName);
        document.querySelector(idBlockInfo).appendChild(pPrice);
        document.querySelector(idPName).appendChild(link);
        document.querySelector(idPPrice).appendChild(price);

        ++idSuffix;
    });
}

function toGoodsInfoPage(goodsId){
    localStorage.setItem("goodsId", goodsId);
}