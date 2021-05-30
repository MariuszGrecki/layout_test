const mydiv1 = document.querySelector(".bicycle");
const mydiv11 = document.querySelector(".shop__title__inside");


mydiv1.addEventListener("mouseover", e=> {
    mydiv11.classList.add("visibility");
})
mydiv1.addEventListener("mouseout", e=> {
    mydiv11.classList.remove("visibility");
})

const mydiv2 = document.querySelector(".parts");
const mydiv12 = document.querySelector(".shop__title__inside2");


mydiv2.addEventListener("mouseover", e=> {
    mydiv12.classList.add("visibility");
})
mydiv2.addEventListener("mouseout", e=> {
    mydiv12.classList.remove("visibility");
})

const mydiv3 = document.querySelector(".stuff");
const mydiv13 = document.querySelector(".shop__title__inside3");


mydiv3.addEventListener("mouseover", e=> {
    mydiv13.classList.add("visibility");
})
mydiv3.addEventListener("mouseout", e=> {
    mydiv13.classList.remove("visibility");
})

const mydiv4 = document.querySelector(".tips");
const mydiv14 = document.querySelector(".shop__title__inside4");


mydiv4.addEventListener("mouseover", e=> {
    mydiv14.classList.add("visibility");
})
mydiv4.addEventListener("mouseout", e=> {
    mydiv14.classList.remove("visibility");
})