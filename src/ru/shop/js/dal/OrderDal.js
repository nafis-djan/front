function getOrders(userId, page, size){
    return $.ajax({url : `http://localhost:8080/users/${userId}/orders?page=${page}&size=${size}`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}

function getOrderById(id){
    return $.ajax({url : `http://localhost:8080/orders/${id}`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}

function updateNewOrder(orderId, json, receiveId){
    return $.ajax({url : `http://localhost:8080/orders/${orderId}?receivingId=${receiveId}`,
        type : "PATCH",
        contentType : "application/json",
        dataType : "json",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*",
            "AUTHORIZATION" : `${$.cookie("token")}`},
        crossDomain: true});
}

function updateOrder(orderId, json){
    return $.ajax({url : `http://localhost:8080/orders/${orderId}`,
        type : "PATCH",
        contentType : "application/json",
        dataType : "json",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*",
            "AUTHORIZATION" : `${$.cookie("token")}`},
        crossDomain: true});
}

