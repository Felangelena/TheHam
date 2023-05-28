"use strict";

// Filter for tabs in Our services

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

// Add imgs in Our Amazing Work

function addImgPack (arr){
    let list = "";
    arr.forEach(item => {
        list += `<li class="work-content active" data-filter="${item.group}">
                    <div class="work-content-popup">
                        <div class="popup-links">
                            <a class="popup-link" href="${item.popupLink}"></a>
                            <a class="popup-btn" href="${item.popupBtn}"></a>
                        </div>
                        <p class="popup-title">${item.popupTitle}</p>
                        <p class="popup-subtitle">${item.popupSubtitle}</p>
                    </div>
                    <img class="work-img" src="${item.src}" alt="${item.group} work">
                </li>`
    });
    document.querySelector(".work-contents").innerHTML = list;
}

let workImgPack = workImgPacks[0];
addImgPack (workImgPack);
let addImgCounter = 0;
let filter = "All";
let imgs;

document.getElementById("work-add").addEventListener("click", (e) => {
    addImgCounter++;
    workImgPack = [...workImgPack, ...workImgPacks[addImgCounter]];
    addImgPack(workImgPack);
    filter = workTabList.querySelector(".active").dataset.category;
    imgs = workContentList.childNodes;
    filterImgs(filter, imgs);
    if (addImgCounter == 2) {
        e.target.remove();
}});

// Filter for imgs in Our Amazing Work

function filterImgs(filter, imgs) {
    imgs.forEach(item => {
        if (filter == "All") {
            item.classList.add("active");
        } else if (filter == item.dataset.filter) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    })
};

const workTabList = document.querySelector(".work-tabs");
const workContentList = document.querySelector(".work-contents");

workTabList.addEventListener("click", (e) => {
    if(e.target.classList.contains("work-tab-title")) {
        workTabList.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        filter = e.target.dataset.category;
        imgs = workContentList.childNodes;
        filterImgs(filter, imgs);
    }
});

// Carousel

const prev  = document.querySelector('.arrow.prev');
const next  = document.querySelector('.arrow.next');
const controls = document.querySelector('.opinion-nav-box');
const slider = document.querySelector('.slider');
const dots = document.querySelector('.opinion-nav');

let sliderIndex = 0;
let timer;

function changeActiveSlide() {
    slider.querySelector('.active').classList.remove('active');
    slider.children[sliderIndex].classList.add('active');
    dots.querySelector('.active').classList.remove('active');
    dots.children[sliderIndex].classList.add('active');
}

function startShow () {
    timer = setInterval(function(){
        sliderIndex = sliderIndex < 3 ? ++sliderIndex : 0;
        changeActiveSlide();
    }, 6000)
}

startShow();

controls.addEventListener('click', e => {
    if(e.target.classList.contains('next')){
        console.log('next');
        sliderIndex = sliderIndex < 3 ? ++sliderIndex : 0;
        changeActiveSlide();
        clearInterval(timer);
        startShow();
    }
    if(e.target.classList.contains('prev')){
        console.log('prev');
        sliderIndex = sliderIndex > 0 ? --sliderIndex : 3;
        changeActiveSlide();
        clearInterval(timer);
        startShow();
    }
    if(e.target.classList.contains("opinion-nav-img")) {
        console.log('dots');
        sliderIndex = Array.from(document.getElementsByClassName("opinion-nav-img")).indexOf(e.target);
        changeActiveSlide();
        clearInterval(timer);
        startShow();
    }
});