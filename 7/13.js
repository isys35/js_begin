function squareItUp(startingNumber) {
    // ������� ����������� ����������, �������� ���
    if ((typeof  startingNumber != 'number') || (startingNumber <= 1)) {
        return -1; // ����� �� �������
    }

    let square = startingNumber * startingNumber

    //������� ������
    if (square> 1000000) {
        console.log(square); // ������� �������� ���������
    } else {// ���� ������� ������� �� �����������, �� ���������� �����
        squareItUp(square);
    }

}