let allData;

function pageBtnHandler(event) {                              //Переключение по страницам (пагинация)
    if (!event.target.classList.contains("page-link")) return;
    let oldBtn = document.querySelector(".active");
    oldBtn.classList.remove("active");
    event.target.classList.add("active");
    createElements(allData);
}

async function downloadData() {                  //Загрузка заявок
    let nUrl = new URL(url + "orders");
    nUrl.searchParams.append("api_key", apiKey);

    try {
        let response = await fetch(nUrl);
        let data = await response.json();
        allData = JSON.parse(JSON.stringify(data));
        createElements(data);
    } catch (error) {
        console.log(error.message);
    }
}