function DesaparecerVinheta() {
    const vinheta = document.getElementById("vinheta");

    setTimeout(() => {
        vinheta.style.transform = "translateX(100vw)";
    }, 50);

    setTimeout(() => {
        vinheta.remove();
    }, 350);

}
function MostrarVinheta(funcaoAposVinheta) {
    if (document.getElementById("vinheta-overlay")) return;

    const vinheta = document.createElement("div");
    vinheta.id = "vinheta";
    vinheta.style.transform = "translateX(-100vw)";

    document.body.appendChild(vinheta);

    // força o reflow
    vinheta.getBoundingClientRect();

    // anima para o centro
    requestAnimationFrame(() => {
        vinheta.style.transform = "translateX(0)";
    });

    setTimeout(()=>{
        funcaoAposVinheta()
    },300)
}
