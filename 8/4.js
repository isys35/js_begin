var myObject = {
    var1: 'value1',
    var2: 'value2',
    var3: 'value3',
};
// удалить свойство var2 из объекта myObject
delete myObject.var2;

// попытка записи значения var2
document.write(myObject.var2); // ошибка