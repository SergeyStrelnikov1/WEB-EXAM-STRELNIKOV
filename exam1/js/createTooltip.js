function createTooltip(data) {                                               //create tooltip for td
    let desc = document.createElement("td");
    desc.setAttribute("data-bs-toggle", "tooltip");
    desc.setAttribute("data-bs-placement", "top");
    desc.setAttribute("data-bs-custom-class", "custom-tooltip");
    desc.setAttribute("data-bs-title", data);
    return desc;
}