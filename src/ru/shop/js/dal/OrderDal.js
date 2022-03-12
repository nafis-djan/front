function getOrdersByUserEmail(email){
    return $.ajax({url : `http://localhost:8080/orders/user-email/${email}`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}

function getOrderById(id){
    return $.ajax({url : `http://localhost:8080/orders/${id}`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}

function getAllOrders(){
    return $.ajax({url : `http://localhost:8080/orders`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}

function updateOrder(orderId, json){
    return $.ajax({url : `http://localhost:8080/orders/${orderId}`,
        type : "PUT",
        contentType : "application/json",
        dataType : "json",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*",
            "AUTHORIZATION" : `${$.cookie("token")}`},
        crossDomain: true});
}

