// создать обобщённый Person
var Person = {
    eyes: 2,
    arms: 2,
    feet: 2
}

// создать объект willieNelson на основе Person
var willieNelson = Object.create(Person);
// проверка наличия унаследованных свойств
document.write(willieNelson.feet); // выводит 2
