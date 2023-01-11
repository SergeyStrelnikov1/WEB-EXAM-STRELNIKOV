function createTableElementsOnDownload(allData) {                       //Создание элементов при загрузке
    let oldBtn = document.querySelector(".active");
    document.querySelector(".table-routes").innerHTML = "";
    let pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";
    for (let i = 1; i < Math.ceil(allData.length / 10) + 1; i++) {      //Создание кнопок пагинации
        let li = document.createElement("li");
        li.classList.add("page-item");
        let a = document.createElement("a");
        a.classList.add("page-link");
        a.classList.add("bg-secondary");
        a.classList.add("text-warning");
        if (oldBtn.textContent == i) a.classList.add("active");
        a.setAttribute("href", "#");
        a.textContent = i;
        li.append(a);
        pagination.append(li);
    }
    let currentPage = document.querySelector(".active").textContent;
    let start = currentPage * 10 - 10;
    let end = (start + 10) > allData.length ? (start + allData.length % 10) : start + 10;
    for (let i = start; i < end; i++) {
        createRoute(allData[i]);
    }
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

}