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

    loginAdmin();
}

function loginAdmin(){
    const adminToken = login(result);
    adminToken.then(token => {
        toStartPage(token)
    });
}

function toStartPage(token){
    document.cookie = `token=${token}; path=/`;
    document.cookie = `admin-email=${email}`;
    document.cookie = "adminId=1";
    window.location.href = "admin-main.html";
}