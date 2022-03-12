function login(json){
    return $.ajax({url : `http://localhost:8080/auth/login`,
        type : "POST",
        contentType : "application/json",
        dataType : "json",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*"},
        crossDomain: true});
}

function signUp(json){
    return $.ajax({url : `http://localhost:8080/auth/sign-up`,
        type : "POST",
        contentType : "application/json",
        dataType : "json",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*"},
        crossDomain: true});
}

function getUserById(id){
    return $.ajax({url : `http://localhost:8080/users/${id}`,
    headers : {"authorization" : `${$.cookie("token")}`}
    });
}

function getUserByEmail(email){
    return $.ajax({url : `http://localhost:8080/users/email/${email}`,
        headers : {"authorization" : `${$.cookie("token")}`}
    });
}

function getAllEmployees(){
    return $.ajax({url : `http://localhost:8080/users/role/EMPLOYEE`,
        headers : {"authorization" : `${$.cookie("token")}`}
    });
}

function deleteEmployee(id){
    $.ajax({url : `http://localhost:8080/users/${id}`,
        type : "DELETE",
        headers : {"authorization" : `${$.cookie("token")}`}
    });
}

function updateUser(id, json){
    return $.ajax({url : `http://localhost:8080/users/${id}`,
        type : "PUT",
        contentType : "application/json",
        dataType : "json",
        data: json,
        headers: {"Access-Control-Allow-Origin": "*",
            "authorization" : `${$.cookie("token")}`},
        crossDomain: true});
}