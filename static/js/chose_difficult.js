document.querySelectorAll("button").forEach((element)=>{
    element.addEventListener("click",()=>{
        localStorage.setItem("difficult",element.id);

        window.location.href = "/game"
    })
})