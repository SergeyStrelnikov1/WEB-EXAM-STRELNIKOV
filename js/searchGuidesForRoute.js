function searchGuidesForRoute(event) {                                     //Нажатие на "Да" в таблице маршрутов
    if (!event.target.classList.contains("btn-for-guides")) return;
    document.querySelector(".search-btn-guides").setAttribute("data-route-id", event.target.id);
    document.querySelector(".checkout-route").setAttribute("disabled", "");
    let nameOfRoute = document.querySelector(".guides").querySelector("p");
    nameOfRoute.textContent = "";
    nameOfRoute.scrollIntoView();
    let oldBtn = event.target.parentNode.parentNode.parentNode.querySelector(".btn-secondary");
    if (oldBtn) {
        oldBtn.classList.remove("btn-secondary");
        oldBtn.classList.add("btn-light");
    }
    
    event.target.classList.remove("btn-light");
    event.target.classList.add("btn-secondary");
    let str = "Доступные гиды по маршруту: ";
    let onClickRoute = event.target.parentNode.parentNode;
    nameOfRoute.textContent = str + onClickRoute.firstChild.getAttribute("data-bs-title");
    document.querySelector(".btn-language").textContent = "Язык экскурсии";
    searchingGuides(event.target.id);
}