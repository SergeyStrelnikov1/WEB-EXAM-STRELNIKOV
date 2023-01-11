function clickMainObject(event)
 {                                          
    let mainObject = document.querySelector(".btn-main-object");
    mainObject.textContent = event.target.textContent;
    searchBtnHandler();
}