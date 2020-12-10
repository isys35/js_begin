
window.addEventListener('load', initialize, false);

function initialize() {
    //переместить квадрат после щелчка на нём
    document.getElementById("square").addEventListener('click', function (e) {  
        // получить начальную позицию 
        var left = window.getComputedStyle(e.target).getPropertyValue("left");
        // преобразовать left в десятичное число 
        left = parseInt(left, 10);
        moveSquare(left, 50);
    },false);
}

function moveSquare(left, numMoves) {
    document.getElementById("square").style.left = left + "px"
    if (numMoves > 0) {
        numMoves--;
        left++;
        setTimeout(moveSquare, 10, left, numMoves);
    } else {
        return;
    }
}