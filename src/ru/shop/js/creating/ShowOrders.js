function createOrderElements(divName, el, idSuffix){

    const orderInfo = document.createElement("div");
    orderInfo.setAttribute("id", "order-info" + idSuffix);
    orderInfo.style.borderBottom = "2px solid#333"

    const idField = document.createElement("p");
    idField.setAttribute("id", "p-id" + idSuffix);
    idField.textContent = "Id: ";

    const priceField = createPriceField(idSuffix);

    const statusField = document.createElement("p");
    statusField.setAttribute("id", "p-status" + idSuffix);
    statusField.textContent = "Status: "

    const link = document.createElement("a");
    link.href = "../user/order-info.html";
    link.textContent = el.id;
    link.setAttribute("onclick", `toOrderInfoPage(${el.id})`);

    const price = document.createElement("span");
    price.textContent = el.totalPrice;

    const status = document.createElement("span");
    status.textContent = el.orderStatus;

    document.querySelector("#" + divName).appendChild(orderInfo);
    document.querySelector("#" + orderInfo.getAttribute("id")).appendChild(idField);
    document.querySelector("#" + orderInfo.getAttribute("id")).appendChild(priceField);
    document.querySelector("#" + orderInfo.getAttribute("id")).appendChild(statusField);
    document.querySelector("#" + idField.getAttribute("id")).appendChild(link);
    document.querySelector("#" + priceField.getAttribute("id")).appendChild(price);
    document.querySelector("#" + statusField.getAttribute("id")).appendChild(status);
}

function toOrderInfoPage(orderId){
    localStorage.setItem("orderId", orderId);
}

function fillInfo(order){
    const totalPrice = document.querySelector("#total-price");
    totalPrice.textContent = order.totalPrice;

    const receiveMethod = document.querySelector("#receiveMethod");
    receiveMethod.textContent = order.receiving.receiveMethod;

    const address = document.querySelector("#address");
    address.textContent = order.receiving.address;

    const payMethod = document.querySelector("#paymentType");
    payMethod.textContent = order.paymentType;

    const orderStatus = document.querySelector("#orderStatus");
    orderStatus.textContent = order.orderStatus;

    const billStatus = document.querySelector("#billStatus");
    billStatus.textContent = order.billStatus;
}