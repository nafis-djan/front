function getAllPaymentType(){
    return $.ajax({url : `http://localhost:8080/payment-types`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}