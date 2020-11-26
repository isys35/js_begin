function takeMeBack() {
    window.location = window.history[-1];
}
function getHistoryLength() {
    var l = window.history.length;
    return l;
}