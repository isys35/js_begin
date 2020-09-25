function squareItUp(startingNumber) {
    // Условия прекращения выполнения, неверный кол
    if ((typeof  startingNumber != 'number') || (startingNumber <= 1)) {
        return -1; // выйти из функции
    }

    let square = startingNumber * startingNumber

    //Базовый случай
    if (square> 1000000) {
        console.log(square); // Вывести конечный результат
    } else {// Если базовое условие не выполняется, то выполнится снова
        squareItUp(square);
    }

}