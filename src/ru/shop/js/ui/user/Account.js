const size = 10;
const page = 0;
let basketId;
let isBasketExist = false;

start();

function start() {
    showUserInfo();

    const ordersPage = getOrders(1,page, size);
    ordersPage.then(data => {
        showOrders(data)
    });
}

function showUserInfo(){
    const user = getUserById($.cookie("userId"));
    user.then(user => {
        const name = document.querySelector("#name");
        name.textContent = user.name;

        const email = document.querySelector("#email");
        email.textContent = user.email;

        const phone = document.querySelector("#phone");
        if(user.phone !== undefined){
            phone.textContent = user.phone;
        } else {
            phone.textContent = "no";
        }

    })
}

function showOrders(data){
    const content = data.content;
    let idSuffix = 0;
    content.forEach(el => {
        if(el.orderStatus !== "CREATING") {
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
            link.href = "order-info.html";
            link.textContent = el.id;
            link.setAttribute("onclick", `toOrderInfoPage(${el.id})`);

            const price = document.createElement("span");
            price.textContent = el.totalPrice;

            const status = document.createElement("span");
            status.textContent = el.orderStatus;

            document.querySelector("#middle-block").appendChild(orderInfo);
            document.querySelector("#" + orderInfo.getAttribute("id")).appendChild(idField);
            document.querySelector("#" + orderInfo.getAttribute("id")).appendChild(priceField);
            document.querySelector("#" + orderInfo.getAttribute("id")).appendChild(statusField);
            document.querySelector("#" + idField.getAttribute("id")).appendChild(link);
            document.querySelector("#" + priceField.getAttribute("id")).appendChild(price);
            document.querySelector("#" + statusField.getAttribute("id")).appendChild(status);

            ++idSuffix;
        } else {
            showBasket(el);
        }
    });

    if(isBasketExist === false){
        const text = document.createElement("p");
        text.textContent = "No basket";

        document.querySelector("#products").appendChild(text);
    }
}

function toOrderInfoPage(orderId){
    localStorage.setItem("orderId", orderId);
}

function showBasket(basket){
    isBasketExist = true;
    basketId = basket.id;
    let idSuffix = 0;

    const totalPriceField = document.createElement("p");
    totalPriceField.setAttribute("id", "p-total-price" + idSuffix);
    totalPriceField.textContent = "Total price: " + basket.totalPrice;
    totalPriceField.style.textAlign = "center";

    const billStatusField = document.createElement("p");
    billStatusField.setAttribute("id", "p-bill-status" + idSuffix);
    billStatusField.textContent = "Bill status: " + basket.billStatus;
    billStatusField.style.textAlign = "center";

    const title = document.createElement("h2");
    title.setAttribute("id", "p-title" + idSuffix);
    title.textContent = "Selected products:";
    title.style.textAlign = "center";

    document.querySelector("#products").appendChild(totalPriceField);
    document.querySelector("#products").appendChild(billStatusField);
    document.querySelector("#products").appendChild(title);

    showSelectedProducts(basket, "products");
    showOrderButton();
}

function showOrderButton(){
    const button = document.createElement("button");
    button.textContent = "Do order";
    button.setAttribute("onclick", "toNewOrderPage()");

    document.querySelector("#order-button-block").appendChild(button);
}

function toNewOrderPage(){
    document.cookie = `orderId=${basketId}`;
    window.location.href = "new-order.html";
}

function exitFromAccount(){
    $.removeCookie("token");

    window.location.href = "main.html";
}