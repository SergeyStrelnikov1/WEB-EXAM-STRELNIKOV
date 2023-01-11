async function nameOfRoute(idRoute) {                      //Узнать название маршрута
    let nUrl = new URL(url + "routes/" + idRoute);
    nUrl.searchParams.append("api_key", apiKey);
    let nameRoute = "";
    try {
        let response = await fetch(nUrl);
        let route = await response.json();
        nameRoute = route.name;
    } catch (error) {
        console.log(error.message);
    }
    return nameRoute;
}
