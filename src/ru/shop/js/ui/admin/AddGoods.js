function getJson(){
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const producer = document.getElementById("producer").value;
    const category = document.getElementById("category").value;
    const count = document.getElementById("count").value;
    const imageUrl = document.getElementById("image").value;

    const json = {
        "name" : name,
        "price" : price,
        "count" : count,
        "imageUrl" : imageUrl,
        "producer" : producer,
        "category" : category
    }

    const goods = createGoods(JSON.stringify(json));
    goods.then(data => {
        window.history.back();
    })
}