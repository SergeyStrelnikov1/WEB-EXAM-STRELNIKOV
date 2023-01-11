function createWorkExperience(data) {                             //Создание опыта работы
    let minInput = document.querySelector("#work-min-experience");
    let maxInput = document.querySelector("#work-max-experience");
    maxInput.value = "";
    minInput.value = "";
    let min = 1000;
    let max = 0;
    for (let guide of data) {
        if (guide.workExperience < min) {
            min = guide.workExperience;
        }
        if (guide.workExperience > max) {
            max = guide.workExperience;
        }
    }
    maxInput.value = max;
    minInput.value = min;
}