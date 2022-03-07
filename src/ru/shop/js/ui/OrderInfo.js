const orderId = window.localStorage.getItem("orderId");

initHeader();
showBasket();

function showBasket(){
    const order = getOrderById(orderId);
    order.then(order => {
        showSelectedProducts(order, "selected-products");
        fillInfo(order);
    });
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