function btnMainOnjectClick() {                                          //При изменении поля 1-я страница становится активной
    let oldBtn = document.querySelector(".active");
    oldBtn.classList.remove("active");
    document.querySelector(".pagination").firstChild.firstChild.classList.add("active");
}