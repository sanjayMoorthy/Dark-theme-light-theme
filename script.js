let TogleBotton = document.querySelector(".button")
let body = document.querySelector("body")


TogleBotton.addEventListener("click",()=>{
    body.classList.toggle("active")
    TogleBotton.classList.toggle("btn")
})