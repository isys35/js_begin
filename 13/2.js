function getElementStyles(e) {
    var computedColor = window.getComputedStyle(e.target).getPropertyValue("color");
    var computedSize = window.getComputedStyle(e.target).getPropertyValue("font-size");
    var colorOutput = "цвет: " + computedColor;
    var fontSizeOutput = "размер шрифта: " + computedSize;
    document.getElementById("stylesOutput").innerHTML = colorOutput + "<br>" + fontSizeOutput;
}