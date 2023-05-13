"use strict";

function removeActive(items) {
    items.forEach(item => {
        item.classList.remove("active");
    });
}

function setNewActive(e) {
    const target = e.target.dataset.tab;
    document.querySelector(`[data-tab="${target}"]`).classList.add("active");
    document.querySelectorAll(`[data-content="${target}"]`).forEach(item => {
        item.classList.add("active");
    });
}

const tabList = document.querySelector(".services-tabs");
const tabs = document.querySelectorAll(".tab-title");
const contents = document.querySelectorAll(".tab-content");

tabList.addEventListener("click", (e) => {
    removeActive(tabs);
    removeActive(contents);
    setNewActive(e);
});

const workTabList = document.querySelector(".work-tabs");
const workTabs = document.querySelectorAll(".work-tab-title");
const workContents = document.querySelectorAll(".work-content");

workTabList.addEventListener("click", (e) => {
    removeActive(workTabs);
    removeActive(workContents);
    if(e.target.dataset.tab == "All") {
        e.target.classList.add("active");
        workContents.forEach(item => {
            item.classList.add("active");
        })
    } else {
        setNewActive(e);
    }
});