function changeTotalPriceForPersons(event) {            //Измение поля количества человек
    document.querySelector("#number-people").value = event.target.value;
    let form = document.querySelector("#create-task-form");
    let price = (guideServiceCost() * hoursNumber() * isThisDayOff() + isItMorningOrEvening() + numberOfVisitors() + checkOptionSecond()) * checkOptionFirst();
    form.elements["price"].value = parseInt(price);
}