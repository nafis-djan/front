let json;

function getJson(){
    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;

    json = {
        "username" : email,
        "password" : password
    }

    loginUser();
}

function loginUser(){
    const userToken = login(json);
    userToken.then(toMainPage)
}

function toMainPage(token){
    document.cookie = `token=${token}`;
    window.history.back();
}