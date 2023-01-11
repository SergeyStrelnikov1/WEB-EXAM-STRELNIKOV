async function deleteTask(event) {                        //Удаление заявки
    if (!event.target.classList.contains("delete")) return;
    let idTask = event.target.getAttribute("data-task-id");
    let nUrl = new URL(url + "orders/" + idTask);
    nUrl.searchParams.append("api_key", apiKey);
    try {
        let response = await fetch(nUrl, {
            method: "DELETE",
        });
        let data = await response.json();
        document.querySelector(".page-link").classList.add("active");
        if (data.error) showAlert(data.error, "alert-danger");
        else showAlert("Заявка успешно удалена", "alert-success");
        downloadData();
    } catch (error) {
        console.log(error.message);
    }
}