async function nameOfGuide(idGuide) {                       //Узнать ФИО гида
    let nUrl = new URL(url + "guides/" + idGuide);
    nUrl.searchParams.append("api_key", apiKey);
    let nameGuide = "";
    try {
        let response = await fetch(nUrl);
        let guide = await response.json();
        document.querySelector(".table-routes").setAttribute("data-pricePerHour", guide.pricePerHour);
        nameGuide = guide.name;
    } catch (error) {
        console.log(error.message);
    }
    return nameGuide;
}
