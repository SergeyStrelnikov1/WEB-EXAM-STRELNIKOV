function checkoutRoute(event) {                       //Открытие модального окна с оформлением заявки
    let form = document.querySelector("#create-task-form");
    let checkedGuide = document.querySelector(".btn-guide");
    let guideInfo = checkedGuide.parentElement.parentElement.children;
    let route = document.querySelector(".guides").textContent.split(":");
    let date = new Date();
    date.setDate(date.getDate() + 1);
    form.querySelector("#date").value = date.toJSON().slice(0, 10);
    form.querySelector("#date").setAttribute("min", date.toJSON().slice(0, 10));
    let name = "";
    let price = 0;
    for (let guide of guideInfo) {
        if (guide.classList.contains("nameOfGuide")) name = guide.textContent;
        if (guide.classList.contains("priceOfGuide")) price = parseInt(guide.textContent);
    }
    form.elements["name"].value = name;
    form.elements["route"].value = route[1];
    price = (guideServiceCost() * hoursNumber() * isThisDayOff() + isItMorningOrEvening() + numberOfVisitors() + checkOptionSecond()) * checkOptionFirst();
    form.elements["price"].value = parseInt(price);
}