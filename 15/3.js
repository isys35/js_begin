function greetVisitor(phrase) {
    var welcome = phrase + ". ��� ���� ������!";
    var sayWelcome = function () {
        alert(welcome);
    }
    return sayWelcome;
}
var personalGreeting = greetVisitor('������, �������!!');
personalGreeting()