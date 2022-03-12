const orderId = localStorage.getItem("orderId");

showBasket();

function showBasket(){
    const order = getOrderById(orderId);
    order.then(order => {
        const receiving = getReceivingById(order.receiving)
        receiving.then(receiving => {
            showSelectedProducts(order, "selected-products");
            fillInfo(order, receiving);
        });
    });
}