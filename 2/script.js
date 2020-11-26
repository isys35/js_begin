    var second = 0;
    function Secundomer() {
    second++;
    document.getElementById("theCount").innerHTML = second
    setTimeout(Secundomer, 1000)
    }
    Secundomer()