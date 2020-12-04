// дождаться окончания загрузки окна и лишь потом
// зарегестрировать событие onclick
window.onload = initializer;
// создать глобальную переменную для счётчика
var theCount = 0;
/**
 Решистрирует событие onclick
 */
function initializer() {
    document.getElementById("incrementButton").onclick = increaseCount;
}
/**
 Инкрементирует theCount и отображает результат
 */
function increaseCount() {
    theCount++;
    document.getElementById("currentCount").innerHTML = theCount;
}

