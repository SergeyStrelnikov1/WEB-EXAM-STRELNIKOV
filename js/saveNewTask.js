async function saveNewTask(event) {                      //Сохранение отредактированной заявки
    if (!event.target.classList.contains("create-change-task")) return;
    let formForSend = new FormData();
    let form = document.querySelector("#create-task-form");
    formForSend.append("date", form.elements["date"].value);
    formForSend.append("time", form.elements["time"].value);
    formForSend.append("duration", form.elements["selectLength"].value);
    formForSend.append("persons", form.elements["customRange2"].value);
    formForSend.append("price", form.elements["price"].value);
    formForSend.append("optionFirst", (form.elements["option1"].checked) ? 1 : 0);
    formForSend.append("optionSecond", (form.elements["option2"].checked) ? 1 : 0);
    let taskId = event.target.getAttribute("data-task-id");
    let nUrl = new URL(url + "orders/" + taskId);
    nUrl.searchParams.append("api_key", apiKey);

    if (form.elements["time"].validity.valid) {                      //Проверка валидности времени
        try {
            event.target.setAttribute("type", "button");
            let modal = document.querySelector("#showTask");
            var modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
            let response = await fetch(nUrl, {
                method: "PUT",
                body: formForSend,
            });
            let data = await response.json();
            if (data.error) showAlert(data.error, "alert-danger");
            else showAlert("Заявка успешно изменена", "alert-success");
            downloadData();
            console.log(data);
        } catch (error) {
            showAlert(error.message, "alert-danger");
        }
    } else {
        event.target.setAttribute("type", "submit");
    }
}