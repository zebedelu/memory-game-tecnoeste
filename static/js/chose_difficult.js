function GoToGame() {
    window.location.href = "/game";
}

document.querySelectorAll("button").forEach((element)=>{
    DesaparecerVinheta();
    element.addEventListener("click",()=>{
        localStorage.setItem("difficult",element.id);

        MostrarVinheta(GoToGame);
    })
})