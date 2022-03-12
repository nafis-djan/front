const orderId = $.cookie("orderId");

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

    const receiving = getAllReceiving();
    receiving.then(page => {
        showReceiving(page);
    });

    const paymentType = getAllPaymentTypes();
    paymentType.then(list => {
        showPaymentType(list);
    });
}

function showReceiving(receivings){
    let idSuffix = 0;
    receivings.forEach(receiving => {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = "radio" + idSuffix;
        radio.name = "receive";
        radio.value = receiving._id;
        if(idSuffix === 0){
            radio.setAttribute("checked", "");
        }

        const label = document.createElement("label");
        label.for = radio.getAttribute("id");
        label.textContent = receiving.method + ". Address: " + receiving.address;

        const br = document.createElement("br");

        document.querySelector("#receiving").appendChild(radio);
        document.querySelector("#receiving").appendChild(label);
        document.querySelector("#receiving").appendChild(br);

        ++idSuffix;
    });
}

function showPaymentType(list){
    createRadioButton(list, "payment-type", "paymentType", true);
}

function doOrder(){
    const receiveId = $('input[name="receive"]:checked').val();
    const payType = $('input[name="paymentType"]:checked').val();
    let data;

    data = {
        "orderStatus" : "PENDING",
        "paymentType" : payType,
        "billStatus" : "COMPLETED",
        "receiving" : receiveId
    };

    updateOrder(orderId, JSON.stringify(data));

    window.location.href = "account.html";
}
