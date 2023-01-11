function createElements(data) {                            //Создание списка заявок
    document.querySelector(".table-routes").innerHTML = "";
    let oldBtn = document.querySelector(".active");
    let pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";
    for (let i = 1; i < Math.ceil(data.length / 5) + 1; i++) {
        let li = document.createElement("li");
        li.classList.add("page-item");
        let a = document.createElement("a");
        a.classList.add("page-link");
        a.classList.add("bg-secondary");
        a.classList.add("text-warning");
        if (oldBtn.textContent == i) a.classList.add("active");
        a.setAttribute("href", "#");
        a.textContent = i;
        a.onclick = pageBtnHandler;
        li.append(a);
        pagination.append(li);
    }

    let currentPage = document.querySelector(".active").textContent;
    let start = currentPage * 5 - 5;
    let end = (start + 5) > data.length ? (start + data.length % 5) : start + 5;
    for (let i = start; i < end; i++) {
        createRoute(data[i], i + 1);
    }
}