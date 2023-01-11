function onClickGuide(event) {                                               //Нажатие на "Да" в списке гидов
    if (!event.target.classList.contains("btn")) return;
    let oldBtn = document.querySelector(".btn-guide");
    if (oldBtn) {
        oldBtn.classList.remove("btn-guide");
        oldBtn.classList.remove("btn-secondary");
        oldBtn.classList.add("btn-light");
    }
    event.target.classList.add("btn-guide");
    event.target.classList.remove("btn-light");
    event.target.classList.add("btn-secondary");
    document.querySelector(".checkout-route").removeAttribute("disabled");
    document.querySelector(".checkout-route").scrollIntoView();
}