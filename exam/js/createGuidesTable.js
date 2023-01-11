function createGuidesTable(guides, lang, minInput, maxInput) 
{                  
    let guidesTable = document.querySelector(".table-guides");
    guidesTable.innerHTML = "";
    document.querySelector(".language-list").innerHTML = "";
    createLanguageList(guides);
    for (let guide of guides) 
    {
        let row = document.createElement("tr");
        row.classList.add("fs-6");
        let th = document.createElement("th");              
        th.setAttribute("scope", "row");
        th.classList.add("fs-1");
        th.classList.add("text-center");
        let icon = document.createElement("span");
        let nameGuide = document.createElement("td");              
        nameGuide.classList.add("nameOfGuide");
        nameGuide.textContent = guide.name;
        row.append(nameGuide);  
        let languageGuide = document.createElement("td");          
        languageGuide.textContent = guide.language;
        row.append(languageGuide);
        let workExp = document.createElement("td");              
        workExp.textContent = guide.workExperience;
        row.append(workExp);
        let price = document.createElement("td");                
        price.classList.add("priceOfGuide");
        price.textContent = guide.pricePerHour;
        row.append(price);
        let btnTd = document.createElement("td");             
        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.classList.add("btn-light");
        btn.setAttribute("type", "button");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "Выбрать";
        btn.setAttribute("data-guide-id", guide.id);
        btnTd.append(btn);
        btnTd.onclick = onClickGuide;
        row.append(btnTd);
        //Сравнение с фильтрами
        if ((lang == guide.language) && (minInput <= guide.workExperience) && (guide.workExperience <= maxInput)) guidesTable.append(row);
        else if ((lang == "Язык экскурсии") && (minInput <= guide.workExperience) && (guide.workExperience <= maxInput)) 
        {
            guidesTable.append(row);
        }
    }
    if (document.querySelector(".table-guides").children.length == 0)
    {
        document.querySelector(".checkout-route").setAttribute("disabled", "");
    }
}