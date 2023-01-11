function downloadMainObjectsList(data) {                         //Создание списка достопримечательностей
    let dropList = document.querySelector(".main-objects-list");
    let newList = [];
    for (let drop of data) {
        let l = drop.mainObject.split("-");
        for (let newObj of l) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.classList.add("dropdown-item");
            a.setAttribute("href", "#");
            if (!newList.includes(newObj)) {
                let numOfChars = 0;
                let shortString = "";
                for (let char of newObj) {
                    if (numOfChars == 13) {
                        break;
                    }
                    numOfChars++;
                    shortString += char;
                }
                a.textContent = shortString + "...";
                a.setAttribute("data-bs-toggle", "tooltip");
                a.setAttribute("data-bs-placement", "top");
                a.setAttribute("data-bs-custom-class", "custom-tooltip");
                a.setAttribute("data-bs-title", newObj);
                newList.push(newObj);
                li.append(a);
                dropList.append(li);
            }
        }
    }
}