// ��������� ��������� �������� ���� � ���� �����
// ���������������� ������� onclick
window.addEventListener('load', registerEvents, false);
// ������� ���������� ���������� ��� ��������
var theCount = 0;
/**
 ������������ ������� onclick
 */
function registerEvents(e) {
    document.getElementById("incrementButton").addEventListener('click',
        increaseCount, false);
    document.getElementById("incrementButton").addEventListener('click',
        changeSize, false);
}
/**
 �������������� theCount � ���������� ���������
 */
function increaseCount() {
    theCount++;
    document.getElementById("currentCount").innerHTML = theCount;
}

/**
 * �������� ������ ������ ��� ������ �������� ��������
 */
 function changeSize(e) {
   document.getElementById('currentCount').style.fontSize = theCount+"px";
}
