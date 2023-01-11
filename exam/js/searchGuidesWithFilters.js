async function searchGuidesWithFilters(event) {                  //Поиск гидов с фильтрами
    let language = document.querySelector(".btn-language");
    let minInput = document.querySelector("#work-min-experience");
    let maxInput = document.querySelector("#work-max-experience");
    let nUrl = new URL(url + "routes/" + event.target.getAttribute("data-route-id") + "/guides");
    nUrl.searchParams.append("api_key", apiKey);

    try {
        let response = await fetch(nUrl);
        let data = await response.json();
        createGuidesTable(data, language.textContent, minInput.value, maxInput.value);
    } catch (error) {
        showAlert("Не найдено", "alert-warning");
    }
}