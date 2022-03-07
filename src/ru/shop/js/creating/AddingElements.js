function createOutBlock(idSuffix){
    const outBlock = document.createElement("div")
    outBlock.setAttribute("id", "out-block" + idSuffix);
    outBlock.style.borderBottom = "2px solid#333";
    outBlock.style.height = "220px";

    return outBlock;
}

function createBlockImage(idSuffix){
    const blockImage = document.createElement("div");
    blockImage.setAttribute("id", "block-image" + idSuffix);
    blockImage.style.textAlign = "center";
    blockImage.style.float = "left";
    blockImage.style.width = "50%";
    blockImage.style.overflow = "hidden";

    return blockImage;
}

function createBlockInfo(idSuffix){
    const blockInfo = document.createElement("div");
    blockInfo.setAttribute("id", "block-info" + idSuffix);
    blockInfo.style.width = "50%";
    blockInfo.style.float = "right";

    return blockInfo;
}

function createNameField(idSuffix){
    const name = document.createElement("p");
    name.setAttribute("id", "p-name" + idSuffix);
    name.textContent = "Name: ";

    return name;
}

function createPriceField(idSuffix){
    const price = document.createElement("p");
    price.setAttribute("id", "p-price" + idSuffix);
    price.textContent = "Price: "

    return price;
}

function createImage(width, height, idSuffix){
    const img = document.createElement("img");
    img.setAttribute("id", "img" + idSuffix);
    img.width = width;
    img.height = height;

    return img;
}