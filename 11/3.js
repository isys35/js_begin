// дождаться окончания загрузки окна и лишь потом
// зарегестрировать событие onclick
window.addEventListener('load', registerEvents, false);
// создать глобальную переменную для счётчика
var theCount = 0;
/**
 Решистрирует событие onclick
 */
function registerEvents(e) {
    document.getElementById("incrementButton").addEventListener('click',
        increaseCount, false);
    document.getElementById("incrementButton").addEventListener('click',
        changeSize, false);
}
/**
 Инкрементирует theCount и отображает результат
 */
function increaseCount() {
    theCount++;
    document.getElementById("currentCount").innerHTML = theCount;
}

/**
 * Изменяет размер шрифта для вывода значений счётчика
 */
 function changeSize(e) {
   document.getElementById('currentCount').style.fontSize = theCount+"px";
}
