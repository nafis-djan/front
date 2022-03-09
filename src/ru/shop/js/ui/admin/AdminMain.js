start();

function start(){
    const button = document.createElement("button");
    button.textContent = "Exit";
    button.setAttribute("onclick", "exit()");

    document.querySelector("#child-head").appendChild(button);
}

function exit(){
    localStorage.removeItem("goodsId");
    localStorage.removeItem("employeeId");
    document.cookie = "token= ; path=/ ; expires=Thu, 01 Jan 1970 00:00:01 GMT";

    window.location.href = "../user/main.html";
}