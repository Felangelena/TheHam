"use strict";

const tab = document.querySelector(".services-tabs");
const tabs = document.querySelectorAll(".tab-title");
const contents = document.querySelectorAll(".tab-content");

tab.addEventListener("click", (e) => {
    removeActive(tabs);
    removeActive(contents);
    setNewActive(e);
});

function removeActive(items) {
    items.forEach(item => {
        item.classList.remove("active");
    });
}

function setNewActive(e) {
    const target = e.target.dataset.tab;
    document.querySelector(`[data-tab="${target}"]`).classList.add("active");
    document.querySelector(`[data-content="${target}"]`).classList.add("active");
}