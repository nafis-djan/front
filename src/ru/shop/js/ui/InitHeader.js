function initHeader(){
    const token = $.cookie("token");

    if(token !== undefined){
        showUserName();
    } else {
        showLogin();
    }
}

function showUserName(){
    // const user = getUserById($.cookie("userId"));
    const user = getUserById(1);
    user.then(data => {
        createElements(data);
    })
}

function createElements(user){
    const userName = document.createElement("a");
    userName.href = "account.html";
    userName.textContent = user.name;

    document.querySelector("#child-head").appendChild(userName);
}

function showLogin(){
    const userLogin = document.createElement("a");
    userLogin.href = "login-user.html";
    userLogin.textContent = "Log In";
    userLogin.id = "login-user";
    userLogin.style.marginRight = "100px";

    const employeeLogin = document.createElement("a");
    employeeLogin.href = "login-employee.html";
    employeeLogin.textContent = "For employee";
    employeeLogin.id = "login-employee";

    document.querySelector("#child-head").appendChild(userLogin);
    document.querySelector("#child-head").appendChild(employeeLogin);
}
