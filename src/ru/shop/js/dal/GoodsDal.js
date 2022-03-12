function getAllGoods(){
    return $.ajax(`http://localhost:8080/goods`);
}

function getGoodsById(id){
    return $.ajax(`http://localhost:8080/goods/${id}`);
}

function createGoods(json){
    return $.ajax({url : `http://localhost:8080/goods`,
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
        type : "PUT",
        contentType : "application/json",
        dataType : "json",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*",
            "AUTHORIZATION" : `${$.cookie("token")}`},
        crossDomain: true});
}