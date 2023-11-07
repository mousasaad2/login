let submet = document.querySelector(".user-btn")
let submet2 = document.querySelector(".user-btn2")
let positon1 = document.querySelector(".container .positon")
let positon2 = document.querySelector(".container .positon2")
let logIn = document.querySelector(".container .log-in")
let signIn = document.querySelector(".container .sign-in")
let btn = document.querySelector(".btn button")

submet.addEventListener("click",()=>{
    positon1.style.display = "none"
    positon2.style.display = "flex"
})

submet2.addEventListener("click",()=>{
    positon1.style.display = "flex"
    positon2.style.display = "none"
})

btn.addEventListener('click',()=>{
    if(btn.textContent === "log in"){
        logIn.style.width = "0"
        signIn.style.width = "100%"
        btn.textContent = "sign in"
    }else{
        logIn.style.width = "100%"
        signIn.style.width = "0"
        btn.textContent = "log in"
    }
})