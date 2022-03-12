function initHeader(){
    const token = $.cookie("token");

    if(token !== undefined){
        showUserName();
    } else {
        showLogin();
    }
}

function showUserName(){
    const user = getUserByEmail($.cookie("user-email"));
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
    employeeLogin.href = "../employee/login-employee.html";
    employeeLogin.textContent = "For employee";
    employeeLogin.id = "login-employee";
    employeeLogin.style.marginRight = "100px";

    const adminLogin = document.createElement("a");
    adminLogin.href = "../admin/login-admin.html";
    adminLogin.textContent = "For admin";
    adminLogin.id = "login-admin";

    document.querySelector("#child-head").appendChild(userLogin);
    document.querySelector("#child-head").appendChild(employeeLogin);
    document.querySelector("#child-head").appendChild(adminLogin);
}
