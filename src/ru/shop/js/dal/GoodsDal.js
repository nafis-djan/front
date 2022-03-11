function getAllGoods(page, size){
    return $.ajax(`http://localhost:8080/goods`);
}

function getGoodsById(id){
    return $.ajax(`http://localhost:8080/goods/${id}`);
}

function createGoods(json, producerId, categoryId){
    return $.ajax({url : `http://localhost:8080/goods?producerId=${producerId}&categoryId=${categoryId}`,
        type : "POST",
        contentType : "application/json",
        dataType : "json",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*",
            "AUTHORIZATION" : `${$.cookie("token")}`},
        crossDomain: true});
}

function deleteGoods(id){
    return $.ajax({url : `http://localhost:8080/goods/${id}`,
        type : "DELETE",
        headers: {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}

function updateGoods(id, json){
    return $.ajax({url : `http://localhost:8080/goods/${id}`,
        type : "PATCH",
        contentType : "application/json",
        dataType : "json",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*",
            "AUTHORIZATION" : `${$.cookie("token")}`},
        crossDomain: true});
}