const orderId = localStorage.getItem("orderId");

showBasket();

function showBasket(){
    const order = getOrderById(orderId);
    order.then(order => {
        showSelectedProducts(order, "selected-products");
        fillInfo(order);
    });
}