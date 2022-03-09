function getAllPaymentTypes(){
    return $.ajax({url : `http://localhost:8080/payment-types`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}

function getAllOrderStatuses(){
    return $.ajax({url : `http://localhost:8080/order-statuses`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}