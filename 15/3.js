function greetVisitor(phrase) {
    var welcome = phrase + ". Рад тебя видеть!";
    var sayWelcome = function () {
        alert(welcome);
    }
    return sayWelcome;
}
var personalGreeting = greetVisitor('Привет, дружище!!');
personalGreeting()