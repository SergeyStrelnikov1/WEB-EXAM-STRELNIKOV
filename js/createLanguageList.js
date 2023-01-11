function createLanguageList(guides) {                                        //Создание списка языков
    let newList = [];
    let list = document.querySelector(".language-list");
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", "#");
    a.classList.add("dropdown-item")
    a.textContent = "Язык экскурсии";
    li.append(a);
    list.append(li);
    for (let guide of guides) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", "#");
        a.classList.add("dropdown-item")
        a.textContent = guide.language;
        li.append(a);
        if (!newList.includes(guide.language)) {
            newList.push(guide.language);
            list.append(li);
        }
    }
}