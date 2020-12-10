function registerEvents() {
    document.mathWiz.operate.addEventListener('click', validate, false);
}
function validate() {
    var first = parseInt(document.mathWiz.numberOne.value);
    var second = parseInt(document.mathWiz.numberTwo.value);
    var operator = document.mathWiz.operator.value;
    if (/^\d+$/.test(first) && /^\d+$/.test(second)) {
        doTheMath();
    } else { alert("Ошибка: оба операнда должны быть числами") }
}


    function doTheMath() {
    var first = parseInt(document.mathWiz.numberOne.value);
    var second = parseInt(document.mathWiz.numberTwo.value);
    var operator = document.mathWiz.operator.value;

    switch (operator) {
        case "add":
            var answer = first + second;
            break;
        case "subtract":
            var answer = first - second;
            break;
        case "multiply":
            var answer = first * second;
            break;
        case "divide":
            var answer = first / second;
            break;
    }
    console.log(answer);
    document.mathWiz.theResult.value = answer;
}