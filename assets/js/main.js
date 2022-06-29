/*
1) Создайте массив frameworks со значениями: ‘AngularJS’, ‘jQuery’
a. Добавьте в начало массива значение ‘Backbone.js’
b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
c. Добавьте в массив значение ‘CommonJS’ вторым элементом
d. Найдите и удалите из массива значение ‘jQuery’ и выведите его в консоль со словами “Это здесь лишнее”
*/

const frameworks = Array('AngularJS', 'jQuery');
frameworks.unshift('Backbone.js');
frameworks.push('ReactJS', 'Vue.js');
frameworks.splice(2, 0, 'CommonJS');

frameworks.forEach((elem, index, array)=>{
    elem === 'jQuery' ? console.log(array.splice(index, 1) + ' -- Это здесь лишнее') : null;
});


/*
2) Создайте функцию removeNegativeElements, которая удаляет из входящего массива все негативные числа.

let result = removeNegativeElements([-9, 2, 3, 0, -28, 'value']); // [2, 3, 0, 'value'];
let result = removeNegativeElements([-9, -21, -12]; // []
let result = removeNegativeElements(['-102', 102]); // ['-102', 102]
*/

function removeNegativeElements(array) {
    return array.filter(elem => typeof elem !== 'number' || elem >= 0);
}

