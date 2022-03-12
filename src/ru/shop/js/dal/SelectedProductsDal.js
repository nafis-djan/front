function createSelectedProduct(userEmail, goodsId, json){
    return $.ajax({url : `http://localhost:8080/selected-products?userEmail=${userEmail}&goodsId=${goodsId}`,
        type : "POST",
        contentType : "application/json",
        dataType : "json",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*",
            "AUTHORIZATION" : `${$.cookie("token")}`},
        crossDomain: true});
}

function getSelectedProductById(id){
    return $.ajax({
        url: `http://localhost:8080/selected-products/${id}`,
        headers: {"AUTHORIZATION" : `${$.cookie("token")}`},
    })
}