function clickOnPen(event) 
{                            
    if (!event.target.classList.contains("bi-pencil")) return;
    let modal = document.querySelector("#showTask");
    modal.querySelector("#exampleModalLabel").textContent = "Редактирование заявки";
    let guideId = event.target.parentNode.parentNode.getAttribute("data-guide-id");
    let taskId = event.target.parentNode.parentNode.id;
    modal.querySelector(".create-btn").setAttribute("data-task-id", taskId);
    let guideFio = modal.querySelector("#name");
    let priceHour = document.querySelector(".table-routes");
    nameOfGuide(guideId).then((response) => guideFio.value = response);

    let routeName = modal.querySelector("#route");
    routeName.value = event.target.parentNode.parentNode.children[1].textContent;

    let date = modal.querySelector("#date");
    date.removeAttribute("readonly");
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + 1);
    date.setAttribute("min", newDate.toJSON().slice(0, 10));
    let strDate = event.target.parentNode.parentNode.children[2].textContent.split(".");
    let trueDate = new Date(strDate[2] + "-" + strDate[1] + "-" + strDate[0]);
    date.value = trueDate.toJSON().slice(0, 10);

    let time = modal.querySelector("#time");
    time.removeAttribute("readonly");
    let timeRoute = event.target.parentNode.parentNode.getAttribute("data-time");
    time.value = timeRoute;

    let duration = modal.querySelector("#selectLength");
    duration.removeAttribute("disabled");
    let durationRoute = event.target.parentNode.parentNode.getAttribute("data-duration");
    duration.value = durationRoute;

    let personsRange = modal.querySelector("#customRange2");
    personsRange.removeAttribute("readonly");
    personsRange.removeAttribute("disabled");
    personsRange.oninput = changeTotalPriceForPersons;
    let personsText = modal.querySelector("#number-people");
    let persons = event.target.parentNode.parentNode.getAttribute("data-persons");
    personsRange.value = persons;
    personsText.value = persons;

    modal.querySelector(".options").innerHTML = "";
    
    let option1 = modal.querySelector(".form-switch-option1");
    option1.innerHTML = "";
    let switchInput1 = document.createElement("input");
    switchInput1.classList.add("form-check-input");
    switchInput1.setAttribute("type", "checkbox");
    switchInput1.setAttribute("role", "switch");
    switchInput1.setAttribute("id", "option1");
    switchInput1.oninput = changeTotalPrice;
    let switchLabel1 = document.createElement("label");
    switchLabel1.classList.add("form-check-label");
    switchLabel1.setAttribute("for", "option1");
    switchLabel1.textContent = "Использовать скидку для школьников и студентов";
    let routeOptionF = event.target.parentNode.parentNode.getAttribute("data-option1");
    if (routeOptionF == "true") {
        switchInput1.checked = true;
        switchInput1.setAttribute("readonly", "");
        switchInput1.setAttribute("disabled", "");
    } else {
        switchInput1.checked = false;
        switchInput1.removeAttribute("readonly");
        switchInput1.removeAttribute("disabled");
    } 
    option1.append(switchInput1);
    option1.append(switchLabel1);

    let option2 = modal.querySelector(".form-switch-option2");
    option2.innerHTML = "";
    let switchInput2 = document.createElement("input");
    switchInput2.classList.add("form-check-input");
    switchInput2.setAttribute("type", "checkbox");
    switchInput2.setAttribute("role", "switch");
    switchInput2.setAttribute("id", "option2");
    switchInput2.oninput = changeTotalPrice;
    let switchLabel2 = document.createElement("label");
    switchLabel2.classList.add("form-check-label");
    switchLabel2.setAttribute("for", "option2");
    switchLabel2.textContent = "Тематические сувениры для посетителей";
    let routeOptionS = event.target.parentNode.parentNode.getAttribute("data-option2");
    if (routeOptionS == "true") {
        switchInput2.checked = true;
        switchInput2.setAttribute("readonly", "");
        switchInput2.setAttribute("disabled", "");
    } else {
        switchInput2.checked = false;
        switchInput2.removeAttribute("readonly");
        switchInput2.removeAttribute("disabled");
    } 
    option2.append(switchInput2);
    option2.append(switchLabel2);

    let price = document.querySelector("#price");
    let priceRoute = event.target.parentNode.parentNode.children[3].textContent;
    price.value = priceRoute;

    modal.querySelector(".back-btn").classList.remove("d-none");
    let createBtn = modal.querySelector(".create-btn");
    createBtn.removeAttribute("data-bs-dismiss");
    createBtn.textContent = "Сохранить";
    createBtn.classList.add("create-change-task");
}