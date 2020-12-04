var typeOfBall = ["basket", "base", "soccer", "foot", "hand"];
for (i=0; i<typeOfBall.length; i++) {
    var listElement = document.createElement("li");
    listElement.innerHTML = typeOfBall[i];
    document.getElementById("ballList").appendChild(listElement);
}