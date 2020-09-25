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

// Объект Person нуждается  в дополнительных  свойствах!
Person.prototype.knees = 2;
Person.prototype.toes = 10;
Person.prototype.elbows = 2;

// Проверка наличия новых свойств у существующих объектов

document.write(patsyCline.toes); // выводит 10