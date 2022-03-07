showBasket();

function showBasket(){
    const order = getOrderById($.cookie("orderId"));
    order.then(order => {
        showSelectedProducts(order, "selected-products");
    });
}