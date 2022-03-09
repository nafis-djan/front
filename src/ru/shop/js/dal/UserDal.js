function login(json){
    return $.ajax({url : `http://localhost:8080/auth/login`,
        type : "POST",
        contentType : "application/json",
        dataType : "text",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*"},
        crossDomain: true});
}

function signUp(json){
    return $.ajax({url : `http://localhost:8080/auth/sign-up`,
        type : "POST",
        contentType : "application/json",
        dataType : "text",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*"},
        crossDomain: true});
}

function getUserById(id){
    return $.ajax({url : `http://localhost:8080/users/${id}`,
    headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}

function getAllEmployees(){
    return $.ajax({url : `http://localhost:8080/users`,
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}

function deleteEmployee(id){
    $.ajax({url : `http://localhost:8080/users/${id}`,
        type : "DELETE",
        headers : {"AUTHORIZATION" : `${$.cookie("token")}`}
    });
}

function updateUser(id, json){
    return $.ajax({url : `http://localhost:8080/users/${id}`,
        type : "PATCH",
        contentType : "application/json",
        dataType : "json",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*",
            "AUTHORIZATION" : `${$.cookie("token")}`},
        crossDomain: true});
}