function Person() {
        this.eyes = 2;
        this.ears = 2;
        this.arms = 2;
        this.hands = 2;
        this.feet = 2;
        this.legs = 2;
        this.species = "Homo sapiens";
    }

var willieWilson = new Person();
var johnnyCash = new Person();
var patsyCline = new Person();

// ������ Person ���������  � ��������������  ���������!
Person.prototype.knees = 2;
Person.prototype.toes = 10;
Person.prototype.elbows = 2;

// �������� ������� ����� ������� � ������������ ��������

document.write(patsyCline.toes); // ������� 10