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

    loginEmployee();
}

function loginEmployee(){
    const employeeToken = login(result);
    employeeToken.then(token => {
        toStartPage(token)
    });
}

function toStartPage(token){
    document.cookie = `token=${token}; path=/`;
    document.cookie = `employee-email=${email}`;
    document.cookie = "employeeId=1";
    window.location.href = "orders.html";
}