const employeeEmail = localStorage.getItem("employee-email");

start();

function start(){
    const employee = getUserByEmail(employeeEmail);
    employee.then(empl => {
        fillFields(empl);
    });
}

function fillFields(employee){
    const name = document.querySelector("#name");
    name.value =employee.name;

    const email = document.querySelector("#email");
    email.value =employee.email
}

function updateEmployee(){
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    const json = {
        "name" : name,
        "email" : email
    }

    const updated = updateUser(employeeEmail, JSON.stringify(json));
    updated.then(data => {
        window.history.back();
    });
}