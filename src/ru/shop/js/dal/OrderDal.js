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

