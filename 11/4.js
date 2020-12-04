// дождаться окончания загрузки окна и лишь тогда зрегестрировать событие
window.addEventListener('load', registerEvents,false)
/**
 * Регистрирует событие
 */

function registerEvents(e) {
    document.getElementById("capTitle").addEventListener("click", makeTiny, true);
    document.getElementById("capEvent").addEventListener("click", makeHuge, true);
    document.getElementById("bubTitle").addEventListener("click", makeTiny, false);
    document.getElementById("bubEvent").addEventListener("click", makeHuge, false);
}
function makeHuge(e) {
    console.log("увеличение размера текста");
    document.getElementById("theText").style.fontSize = "80px";
}
function makeTiny(e) {
    console.log("уменьшение размера текста");
    document.getElementById("theText").style.fontSize = "10px";
}