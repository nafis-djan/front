let result;

function getJson(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const json = {
        "name" : name,
        "email" : email,
        "password" : password,
        "role" : "USER"
    }

    result = JSON.stringify(json);

    signUpEmployee();
}

function signUpEmployee(){
    const employeeToken = signUp(result);
    employeeToken.then(token => {
        window.history.back();
    });
}