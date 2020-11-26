function checkMath(result) {
    var userMath =
        document.getElementById("answer1").value;
    var errors =
        document.getElementsByClassName("error");
    if (parseInt(userMath) != parseInt(result)) {
        errors[0].innerHTML = "Неверно вы ввели " + userMath + ". Правильный ответ: " + result;
    } else {
        errors[0].innerHTML = "Верно!";
    }

}