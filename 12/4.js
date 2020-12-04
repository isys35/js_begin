function registerEvents() {
    document.mathWiz.operate.addEventListener('click', doTheMath, false);
}
function doTheMath() {
    var first = parseInt(document.mathWiz.numberOne.value);
    var second = parseInt(document.mathWiz.numberTwo.value);
    var operator = document.mathWiz.operator.value;
    console.log(first);
    console.log(operator);
    console.log(second);
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