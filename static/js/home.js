function GoToMode() {
    window.location.href = "/mode";
}

document.getElementById("gotogame").addEventListener("click",()=>{
    MostrarVinheta(GoToMode);
})

document.addEventListener("DOMContentLoaded", async ()=>{
    DesaparecerVinheta();
    
    const LEADERBOARD_RESPONSE = await fetch(window.location.href + "get/leaderboard");
    const LEADERBOARD = await LEADERBOARD_RESPONSE.json();

    window.localStorage.removeItem("Pontos");

    for (let rank = 1; rank <= 15; rank++) {
        
        let infos = LEADERBOARD[rank-1];
        if (infos == undefined) {
            break;
        }

        var elementRank = document.getElementById("leaderboard-"+rank);
        elementRank.querySelector(".rank").textContent = "#"+rank;
        elementRank.querySelector(".name").textContent = infos[0];
        elementRank.querySelector(".value").textContent = infos[1];
    }
})