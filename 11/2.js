// ��������� ��������� �������� ���� � ���� �����
// ���������������� ������� onclick
window.onload = initializer;
// ������� ���������� ���������� ��� ��������
var theCount = 0;
/**
 ������������ ������� onclick
 */
function initializer() {
    document.getElementById("incrementButton").onclick = increaseCount;
}
/**
 �������������� theCount � ���������� ���������
 */
function increaseCount() {
    theCount++;
    document.getElementById("currentCount").innerHTML = theCount;
}

