let result;

function getJson(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    let json;
    if(phone !== ""){
        json = {
            "name" : name,
            "email" : email,
            "password" : password,
            "phone" : phone,
            "role" : "USER"
        }
    } else {
        json = {
            "name" : name,
            "email" : email,
            "password" : password,
            "role" : "USER"
        }
    }

    result = JSON.stringify(json);

    signUpUser();
}

function signUpUser(){
    const userToken = signUp(result);
    userToken.then(token => {
        toMainPage(token)
    });
}

function toMainPage(token){
    document.cookie = `token=${token}`;
    document.cookie = "userId=1";
    window.location.href = "main.html"
}