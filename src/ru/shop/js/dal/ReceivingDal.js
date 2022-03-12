function getReceivingById(id){
    return $.ajax({url : `http://localhost:8080/receivings/${id}`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}

function getAllReceiving(){
    return $.ajax({url : `http://localhost:8080/receivings`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}