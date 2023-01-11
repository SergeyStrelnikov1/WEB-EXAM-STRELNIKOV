function createRoute(data)
 {                    
    let table = document.querySelector(".table-routes");
    let row = document.createElement("tr");
    let th = createTooltipTh(data.name);               
    th.setAttribute("scope", row);
    let numOfChars = 0;
    let name = "";
    for (let char of data.name)
     {
        if (numOfChars == 30) 
        {
            name += "...";
            break;
        }
        name += char;
        numOfChars++
    }

    th.textContent = name;
    row.append(th);

    numOfChars = 0;
    let descWords = "";
    for (let char of data.description) 
    {
        if (numOfChars == 20) break;
        descWords += char;
        numOfChars++;
    }
    let desc = createTooltip(data.description);

    desc.textContent = descWords + "...";

    row.append(desc);

    numOfChars = 0;
    let mainObjects = "";
    for (let char of data.mainObject) {

        if (numOfChars == 20) break;
        mainObjects += char;
        numOfChars++;
    }
    let mainObj = createTooltip(data.mainObject);
    mainObj.textContent = mainObjects + "...";
    row.append(mainObj);

    let btnTd = document.createElement("td");              
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("btn-light");
    btn.classList.add("btn-for-guides");
    btn.setAttribute("type", "button");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("id", data.id);
    btn.textContent = "Выбрать";
    btnTd.append(btn);
    btnTd.onclick = searchGuidesForRoute;
    row.append(btnTd);

    table.append(row);
}