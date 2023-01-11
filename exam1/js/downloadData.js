let allRoutes;

function createTableRouteElements(allData) 
{                      
    console.log(allData);
    document.querySelector(".table-routes").innerHTML = "";
    let oldBtn = document.querySelector(".active");
    let pagination = document.querySelector(".pagination");
    if (allData.length != allRoutes.length) {
        pagination.innerHTML = "";
        let li = document.createElement("li");
        li.classList.add("page-item");
        let a = document.createElement("a");
        a.classList.add("page-link");
        a.classList.add("bg-secondary");
        a.classList.add("text-warning");
        if (oldBtn.textContent == "1") a.classList.add("active");
        a.setAttribute("href", "#");
        a.textContent = 1
        li.append(a);
        pagination.append(li);
    }

    if (pagination.children.length == 1) 
    {                      
        for (let i = 2; i < Math.ceil(allData.length / 10) + 1; i++) 
        {
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
    }

    let currentPage = document.querySelector(".active").textContent;
    let start = currentPage * 10 - 10;
    let end = (start + 10) > allData.length ? (start + allData.length % 10) : start + 10;
    for (let i = start; i < end; i++) 
    {
        createRoute(allData[i]);
    }
    let childs = document.querySelector(".table-routes").children;
    for (let child of childs) 
    {
        console.log(child.firstElementChild.getAttribute("data-bs-title"));
    }

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

async function downloadData() 
{                                 
    let nUrl = new URL(url + "routes");
    nUrl.searchParams.append("api_key", apiKey);
    try 
    {
        let response = await fetch(nUrl);
        let data = await response.json();
        allRoutes = JSON.parse(JSON.stringify(data));
        downloadMainObjectsList(data);
        createTableElementsOnDownload(data);
        showAlert("Чтобы посмотреть заявки перейдите в Личный кабинет", "alert-success");
    } catch (error) {
        showAlert(error.message, "alert-danger");
    }
}