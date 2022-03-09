function getJson(){
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const producerId = document.getElementById("producer-id").value;
    const categoryId = document.getElementById("category-id").value;
    const count = document.getElementById("count").value;
    const imageUrl = document.getElementById("image").value;

    const json = {
        "name" : name,
        "price" : price,
        "count" : count,
        "imageUrl" : imageUrl
    }

    const goods = createGoods(JSON.stringify(json), producerId, categoryId);
    goods.then(data => {
        window.history.back();
    })
}