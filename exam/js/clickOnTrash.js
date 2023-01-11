function clickOnTrash(event)
 {                                   
    if (!event.target.classList.contains("bi-trash-fill")) return;
    let idTask = event.target.parentNode.parentNode.id;
    document.querySelector(".delete").setAttribute("data-task-id", idTask);
}