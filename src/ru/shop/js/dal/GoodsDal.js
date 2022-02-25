function getAllGoods(page, size){
    return $.ajax(`http://localhost:8080/goods?page=${page}&size=${size}`);
}

function getGoodsById(id){
    return $.ajax(`http://localhost:8080/goods/${id}`);
}