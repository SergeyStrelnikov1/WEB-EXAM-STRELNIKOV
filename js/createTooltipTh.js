function createTooltipTh(data) {                                               //create tooltip for th
    let desc = document.createElement("th");
    desc.setAttribute("data-bs-toggle", "tooltip");
    desc.setAttribute("data-bs-placement", "top");
    desc.setAttribute("data-bs-custom-class", "custom-tooltip");
    desc.setAttribute("data-bs-title", data);
    // console.log(data);
    // console.log(desc);
    return desc;
}