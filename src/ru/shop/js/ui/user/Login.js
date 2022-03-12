let result;
let email;

function getJson(){
    email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const json = {
        "email" : email,
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
    const iu = token.token;
    document.cookie = `token=${iu}`;
    document.cookie = `user-email=${email}`;
    window.history.back();
}

function toSignUpPage(){
    window.location.href = "sign-up.html";
}