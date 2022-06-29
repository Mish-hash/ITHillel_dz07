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


/*
3) Создайте фнкцию getStringElements, которая возвращает входящий массив только со строковыми значениями.

let arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false]
let result = getStringElements(arr); // ['green', 'web']

*/

function getStringElements(array){
    return array.filter(elem => typeof elem === 'string');
}

