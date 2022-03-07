initHeader();

const goodsId = localStorage.getItem("goodsId");

const goods = getGoodsById(goodsId);
goods.then(showGoodsInfo);

function showGoodsInfo(goods){
    const name = document.querySelector("#name");
    name.textContent = goods.name;

    const price = document.querySelector("#price");
    price.textContent = goods.price;

    const producerName = document.querySelector("#producer-name");
    producerName.textContent = goods.producer.name;

    const producerCountry = document.querySelector("#producer-country");
    producerCountry.textContent = goods.producer.country;

    const category = document.querySelector("#category");
    category.textContent = goods.category.name;

    const count = document.querySelector("#count");
    count.textContent = goods.count;

    const image = document.querySelector("#image");
    image.src = goods.imageUrl;
}

function addGoodsToBasket(){
    const count = document.getElementById("goods-count").value;
    const json = {
        "count" : count
    };
    const created = createSelectedProduct(1, goodsId, JSON.stringify(json));
    created.then(data => {
        showSuccessText(data);
    })
}

function showSuccessText(data){
    const text = document.querySelector("#adding-text");
    text.textContent = "Goods added to basket successfully. Watch your basket in personal cabinet";
}