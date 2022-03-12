let basketId;
let isBasketExist = false;
let isHaveOrder = false;

start();

function start() {
    showUserInfo();

    const ordersPage = getOrdersByUserEmail($.cookie("user-email"))
    ordersPage.then(data => {
        showOrders(data)
    });
}

function showUserInfo(){
    const user = getUserByEmail($.cookie("user-email"));
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

function showOrders(orders){
    let idSuffix = 0;
    orders.forEach(el => {
        if (el.orderStatus !== "CREATING") {
            isHaveOrder = true;
            createOrderElements("middle-block", el, idSuffix);
            ++idSuffix;
        } else {
            showBasket(el);
        }
    });

    if(!isHaveOrder) {
        const text = document.createElement("p");
        text.textContent = "No orders";

        document.querySelector("#middle-block").appendChild(text);
    }

    if(!isBasketExist){
        const text = document.createElement("p");
        text.textContent = "No basket";

        document.querySelector("#products").appendChild(text);
    }
}

function showBasket(basket){
    isBasketExist = true;
    basketId = basket._id;
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