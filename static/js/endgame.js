var pontuacao

document.addEventListener("DOMContentLoaded", async ()=>{
    const LEADERBOARD_RESPONSE = await fetch(window.location.origin + "/get/leaderboard");
    const LEADERBOARD = await LEADERBOARD_RESPONSE.json();

    pontuacao = parseInt(window.localStorage.getItem("Pontos"));

    if (pontuacao <= 0) {
        window.location.href = "/";
    }

    const LEADERBOARD_WITH_ZEROS = LEADERBOARD.concat([["",0]])

    let index = 1;
    for (const value of LEADERBOARD_WITH_ZEROS) {
        console.log(value[1], pontuacao);
        if (value[1] >= pontuacao) {
            index += 1;
        } else {
            document.getElementById("colocacao").textContent = "#"+index;
            break;
        }
    }
})

document.getElementById("signup-nickname").addEventListener("click",async ()=>{
    const apelido = document.getElementById("nickname").value.slice(0,15);

    const requisicao = await fetch(window.location.origin + "/set/leaderboard",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: apelido,
                pontos: pontuacao
            })
        }
    )

    if (requisicao["status"] == 200) {
        window.localStorage.removeItem("Pontos");
        window.location.href = "/";
    } else {
        throw Error("Erro ao criar novo usuário para o leaderboard.");
    }
})