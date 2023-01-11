function pageBtnHandler(event) 
{                                    
    if (!event.target.classList.contains("page-link")) return;
    let searchField = document.querySelector(".search-field").value;
    let oldBtn = document.querySelector(".active");
    oldBtn.classList.remove("active");
    console.log(oldBtn.textContent);
    event.target.classList.add("active");
    searchBtnHandler();
}