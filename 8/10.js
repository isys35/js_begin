// ������� ���������� Person
var Person = {
    eyes: 2,
    arms: 2,
    feet: 2
}

// ������� ������ willieNelson �� ������ Person
var willieNelson = Object.create(Person);
// �������� ������� �������������� �������
document.write(willieNelson.feet); // ������� 2
