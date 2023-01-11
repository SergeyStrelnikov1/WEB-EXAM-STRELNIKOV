function clickOnEye(event) 
{                                    
    if (!event.target.classList.contains("bi-eye-slash")) return;
    let modal = document.querySelector("#showTask");
    modal.querySelector("#exampleModalLabel").textContent = "Заявка номер " + event.target.parentNode.parentNode.id;

    let guideId = event.target.parentNode.parentNode.getAttribute("data-guide-id");
    let guideFio = modal.querySelector("#name");
    nameOfGuide(guideId).then((response) => guideFio.value = response);

    let routeName = modal.querySelector("#route");
    routeName.value = event.target.parentNode.parentNode.children[1].textContent;

    let date = modal.querySelector("#date");
    date.setAttribute("readonly", "");
    let strDate = event.target.parentNode.parentNode.children[2].textContent.split(".");
    let trueDate = new Date(strDate[2] + "-" + strDate[1] + "-" + strDate[0]);
    date.value = trueDate.toJSON().slice(0, 10);

    let time = modal.querySelector("#time");
    time.setAttribute("readonly", "");
    let timeRoute = event.target.parentNode.parentNode.getAttribute("data-time");
    time.value = timeRoute;

    let duration = modal.querySelector("#selectLength");
    duration.setAttribute("disabled", "");
    let durationRoute = event.target.parentNode.parentNode.getAttribute("data-duration");
    duration.value = durationRoute;

    let personsRange = modal.querySelector("#customRange2");
    personsRange.setAttribute("readonly", "");
    personsRange.setAttribute("disabled", "");

    let personsText = modal.querySelector("#number-people");
    personsText.setAttribute("readonly", "");
    personsText.setAttribute("disabled", "");
    let persons = event.target.parentNode.parentNode.getAttribute("data-persons");
    personsRange.value = persons;
    personsText.value = persons;

    let options = modal.querySelector(".options");
    options.innerHTML = "";
    options.textContent = "Дополнительные опции: ";
    let switches = modal.querySelectorAll(".form-switch");
    for (let swit of switches) {
        swit.innerHTML = "";
    }
    let option1 = document.createElement("input");
    option1.setAttribute("type", "text");
    option1.classList.add("form-control-plaintext");
    option1.setAttribute("readonly", "");
    option1.value = "Скидка школьников и студентов (15% скидка)";
    let routeOptionF = event.target.parentNode.parentNode.getAttribute("data-option1");
    if (routeOptionF == "true") options.append(option1);

    let option2 = document.createElement("textarea");
    option2.setAttribute("type", "text");
    option2.classList.add("form-control-plaintext");
    option2.setAttribute("readonly", "");
    option2.value = "Тематические сувениры для посетителей (+500 рублей за каждого посетителя)";
    let routeOptionS = event.target.parentNode.parentNode.getAttribute("data-option2");
    if (routeOptionS == "true") options.append(option2);

    let price = modal.querySelector("#price");
    let priceRoute = event.target.parentNode.parentNode.children[3].textContent;
    price.value = priceRoute;
    modal.querySelector(".back-btn").classList.add("d-none");
    let createBtn = modal.querySelector(".create-btn");
    createBtn.setAttribute("data-bs-dismiss", "modal");
    createBtn.classList.remove("create-change-task");
    createBtn.textContent = "Готово";
}