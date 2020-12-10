function getElementStyles(e) {
    var colorOutput = "цвет: " + e.target .style.color;
    var fontSizeOutput = "размер шрифта: " + e.target.style.fontSize;
    document.getElementById("stylesOutput").innerHTML = colorOutput + "<br>" + fontSizeOutput;
}