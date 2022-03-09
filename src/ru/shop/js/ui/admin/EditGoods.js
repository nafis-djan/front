const goodsId = localStorage.getItem("goodsId");

start();

function start(){
    const goods = getGoodsById(goodsId);
    goods.then(goods => {
        fillFields(goods);
    });
}

function fillFields(goods){
    const name = document.querySelector("#name");
    name.value =goods.name;

    const price = document.querySelector("#price");
    price.value =goods.price;

    const count = document.querySelector("#count");
    count.value =goods.count;

    const imageUrl = document.querySelector("#image");
    imageUrl.value =goods.imageUrl;
}

function editGoods(){
    const name = document.querySelector("#name").value;
    const price = document.querySelector("#price").value;
    const count = document.querySelector("#count").value;
    const imageUrl = document.querySelector("#image").value;

    const json = {
        "name" : name,
        "price" : price,
        "count" : count,
        "imageUrl" : imageUrl
    };

    const updated = updateGoods(goodsId, JSON.stringify(json));
    updated.then(data => {
        window.history.back();
    });
}