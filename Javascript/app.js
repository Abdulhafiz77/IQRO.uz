
//STICKY function
 const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky")
    }else{
        nav.classList.remove("sticky")
    }
});
//ORDER function
const btn1 = document.querySelector(".order-btn")
const btn2 = document.querySelector(".order-btn2")
const btn3 = document.querySelector(".order-btn3")
const order1 = document.querySelector('.order-first')
const order2 = document.querySelector('.order-secont')
const order3 = document.querySelector(".order-three")

btn1.addEventListener('click', () => {
    order1.style.display = "none"
    order2.style.display = "block"
})
btn2.addEventListener('click', () => {
    order2.style.display = "none"
    order3.style.display = "block"
})
btn3.addEventListener('click', () => {
    order3.style.display = "none"
    order1.style.display = "block"
})

