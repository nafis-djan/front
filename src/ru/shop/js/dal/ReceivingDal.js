function getAllReceiving(){
    return $.ajax({url : `http://localhost:8080/receivings`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}