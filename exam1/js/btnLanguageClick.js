function btnLanguageClick(event) {                           //Смена языка
    if (!event.target.classList.contains("dropdown-item")) return;
    document.querySelector(".btn-language").textContent = event.target.textContent;
    searchGuidesWithLanguageClick();
}