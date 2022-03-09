const radioButtonName = "orderStatus";
const divForRadioButName = "order-statuses";
const orderStatusValueName = "orderStatus";
const page = 0;
const size = 10;

let orderStatus = localStorage.getItem("status");
let searchId = localStorage.getItem("searchId");
let editFlag = localStorage.getItem("editFlag");
let orderId = localStorage.getItem("orderId");
let orderStatuses;

start();

function start(){
    addHeaderButton();

    const list = getAllOrderStatuses();
    list.then(statuses => {
        orderStatuses = statuses;
        showOrderStatuses(statuses);

        if(editFlag === "true"){
            updateOrderStatus();
        }
    });

    if(searchId === null) {
        const ordersPage = getOrders(1, page, size);
        ordersPage.then(data => {
            showOrders(data, orderStatus);
        });
    } else {
        const order = getOrderById(searchId);
        order.then(order => {
            showOrder(order);
        });
    }
}

function addHeaderButton(){
    const button = document.createElement("button");
    button.textContent = "Exit";
    button.setAttribute("onclick", "exit()");

    document.querySelector("#child-head").appendChild(button);
}

function showOrderStatuses(orderStatuses){
    createRadioButton(orderStatuses, divForRadioButName, radioButtonName, orderStatusValueName, false);
}

function doFilter(){
    localStorage.setItem("status", $(`input[name=${radioButtonName}]:checked`).val());
    localStorage.removeItem("searchId");
    document.location.reload();
}

function showOrders(data, orderStatus){
    const content = data.content;
    let idSuffix = 0;
    content.forEach(el => {
        if(orderStatus !== null && el.orderStatus !== orderStatus) {
            return;
        }
        const edit = document.createElement("button");
        edit.id = "button-edit";
        edit.textContent = "Edit status";
        edit.setAttribute("onclick", `editOrder(${el.id})`);
        document.querySelector("#middle-block").appendChild(edit);
        createOrderElements("middle-block", el, idSuffix);

        ++idSuffix;
    });
}

function editOrder(id){
    localStorage.setItem("editFlag", "true");
    localStorage.setItem("orderId", id);
    document.location.reload();
}

function updateOrderStatus(){
    const id = document.createElement("p");
    id.textContent = "ID: " + `${orderId}`;
    document.querySelector("#right-block").appendChild(id);

    createRadioButton(orderStatuses, "right-block", "updateStatus", orderStatusValueName, true);

    const updateButton = document.createElement("button");
    updateButton.id = "updateButton";
    updateButton.textContent = "Update order status";
    updateButton.setAttribute("onclick", "doUpdate()");
    document.querySelector("#right-block").appendChild(updateButton);

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancelButton";
    cancelButton.textContent = "Cancel";
    cancelButton.setAttribute("onclick", "cancelEdit()");
    document.querySelector("#right-block").appendChild(cancelButton);
}

function doUpdate(){
    const data = {
        "orderStatus" : $(`input[name=updateStatus]:checked`).val()
    }

    const order = updateOrder(orderId, JSON.stringify(data));
    order.then(order => {
        cancelEdit();
    });
}

function cancelEdit(){
    localStorage.setItem("editFlag", "false");
    localStorage.removeItem("orderId");
    document.location.reload();
}

function showOrder(order){
    createOrderElements("middle-block", order, 0);
}

function cancelFilter(){
    localStorage.removeItem("status");
    localStorage.removeItem("searchId");
    document.location.reload();
}

function doSearch(){
    localStorage.setItem("searchId", document.getElementById("search-by-id").value);
    document.location.reload();
}

function exit(){
    localStorage.removeItem("status");
    localStorage.removeItem("searchId");
    localStorage.removeItem("editFlag");
    localStorage.removeItem("orderId");
    document.cookie = "token= ; path=/ ; expires=Thu, 01 Jan 1970 00:00:01 GMT";

    window.location.href = "../user/main.html";
}