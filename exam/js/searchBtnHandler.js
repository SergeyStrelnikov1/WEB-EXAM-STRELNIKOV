async function searchBtnHandler() {                                    //Поиск записей
    let searchField = document.querySelector(".search-field").value;
    let nUrl = new URL(url + "routes");
    nUrl.searchParams.append("api_key", apiKey);
    let mainObj = document.querySelector(".btn-main-object");
    let newRoutes = [];
    try {
        if (searchField == "" && mainObj.textContent == "Основной объект") downloadData(); //Поиск без фильтров
        else {
            let response = await fetch(nUrl);
            let data = await response.json();
            let str = mainObj.textContent.slice(0, -4);
            for (let route of data) {
                if (mainObj.textContent == "Основной объект") {             //Поиск по вводимому полю
                    if (route.name.includes(searchField)) newRoutes.push(route);
                }
                else if (searchField == "" && mainObj.textContent != "Основной объект") { //Поиск по достопримечательности
                    if (route.mainObject.includes(str)) newRoutes.push(route);
                }
                else if (route.name.includes(searchField) && (route.mainObject.includes(str)) && mainObj.textContent != "Основной объект") {
                    newRoutes.push(route);   //Поиск по обоим полям
                }
            }
            createTableRouteElements(newRoutes);
        }
    } catch (error) {
        showAlert(error.message, "alert-danger");
    }
}