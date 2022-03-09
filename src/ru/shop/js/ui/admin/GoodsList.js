const page = 0;
const size = 15;

start();

function start(){
    const goods = getAllGoods(page, size);
    goods.then(page => {
       showGoods(page);
    });
}

function showGoods(data){
    const content = data.content;
    let idSuffix = 0;
    content.forEach(el => {
        const outBlock = createOutBlock(idSuffix);
        const blockImage = createLeftBlock(idSuffix);
        const blockInfo = createRightBlock(idSuffix);
        const nameField = createNameField(idSuffix);
        const priceField = createPriceField(idSuffix);

        const img = createImage(200, 200, idSuffix);
        img.src = el.imageUrl;

        const name = document.createElement("span");
        name.textContent = el.name;

        const price = document.createElement("span");
        price.textContent = el.price;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.setAttribute("onclick", `editGoods(${el.id})`);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("onclick", `removeGoods(${el.id})`);

        document.querySelector("#middle-block").appendChild(outBlock);
        document.querySelector("#" + outBlock.getAttribute("id")).appendChild(blockImage);
        document.querySelector("#" + outBlock.getAttribute("id")).appendChild(blockInfo);
        document.querySelector("#" + blockImage.getAttribute("id")).appendChild(img);
        document.querySelector("#" + blockInfo.getAttribute("id")).appendChild(nameField);
        document.querySelector("#" + blockInfo.getAttribute("id")).appendChild(priceField);
        document.querySelector("#" + blockInfo.getAttribute("id")).appendChild(editButton);
        document.querySelector("#" + blockInfo.getAttribute("id")).appendChild(deleteButton);
        document.querySelector("#" + nameField.getAttribute("id")).appendChild(name);
        document.querySelector("#" + priceField.getAttribute("id")).appendChild(price);

        ++idSuffix;
    });
}

function editGoods(id){
    localStorage.setItem("goodsId", id);
    window.location.href = "edit-goods.html";
}

function removeGoods(id){
    deleteGoods(id);
    window.history.back();
}