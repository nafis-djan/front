let result;
let email;

function getJson(){
    email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const json = {
        "username" : email,
        "password" : password
    }

    result = JSON.stringify(json);

    loginUser();
}

function loginUser(){
    const userToken = login(result);
    userToken.then(token => {
        toMainPage(token)
    });
}

function toMainPage(token){
    document.cookie = `token=${token}`;
    document.cookie = `user-email=${email}`;
    document.cookie = "userId=1";
    window.history.back();
}

function toSignUpPage(){
    window.location.href = "sign-up.html";
}