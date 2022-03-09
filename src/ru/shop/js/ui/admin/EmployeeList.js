start();

function start(){
    const employees = getAllEmployees();
    employees.then(list => {
        showList(list);
    })
}

function showList(list){
    const content = list.content;
    let idSuffix = 0;
    content.forEach(el => {
        const outBlock = createOutBlock(idSuffix);
        const blockInfo = createLeftBlock(idSuffix);
        const blockButton = createRightBlock(idSuffix);
        const nameField = createNameField(idSuffix);

        const nameSpan = document.createElement("span");
        nameSpan.id = "name-span";
        nameSpan.textContent = el.name;

        const idField = document.createElement("p");
        idField.setAttribute("id", "p-id" + idSuffix);
        idField.textContent = `ID: ${el.id}`;

        const emailField = document.createElement("p");
        emailField.setAttribute("id", "p-email" + idSuffix);
        emailField.textContent = `E-mail: ${el.email}`;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.setAttribute("onclick", `editEmployee(${el.id})`);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("onclick", `deleteEmpl(${el.id})`);

        document.querySelector("#middle-block").appendChild(outBlock);
        document.querySelector("#" + outBlock.getAttribute("id")).appendChild(blockInfo);
        document.querySelector("#" + outBlock.getAttribute("id")).appendChild(blockButton);
        document.querySelector("#" + blockInfo.getAttribute("id")).appendChild(idField);
        document.querySelector("#" + blockInfo.getAttribute("id")).appendChild(nameField);
        document.querySelector("#" + blockInfo.getAttribute("id")).appendChild(emailField);
        document.querySelector("#" + blockButton.getAttribute("id")).appendChild(editButton);
        document.querySelector("#" + blockButton.getAttribute("id")).appendChild(deleteButton);
        document.querySelector("#" + nameField.getAttribute("id")).appendChild(nameSpan);

        ++idSuffix;
    });
}

function editEmployee(id){
    localStorage.setItem("employeeId", id);
    window.location.href = "edit-employee.html";
}

function deleteEmpl(id){
    deleteEmployee(id);
    window.location.reload();
}