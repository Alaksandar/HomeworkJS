 //                          ДЗ_JS_3

// 1. Создадим шесть переменных, в каждой из которых будет один из восьми изученных типов данных. 
// Выводим их значение в alert. Выводим их также в консоль.

let types = [1, 999999999999999999999999999999n, null, undefined, 'строка', true];
for (let i = 0; i < types.length; i++) {
    alert (types[i]);
    console.log(types[i]);
}


//  2. Выводим окно prompt с вопросом о вашем возрасте. В зависимости от ответа выводим alert с текстом “поздравляем, вам n полных лет”, 
// где вместо n надо подставить введенное вами значение. Сделать дополнительно проверку на совершенолетие и 
// выводим в окне alert утверждение совершеннолетний пользователь или нет.

let age = +prompt('Сколько вам лет?', '');
if ( typeof age === "number" && !isNaN(age) ) {
    alert (`поздравляем, вам ${age} полных лет`); {
        if (age >= 18) {
            alert ('вы совершеннолетний');
        } else  {
            alert ('вы несовершеннолетний');
        }
    }
} else {
    alert ('Отмена');
}


//    3. Написать скрипт для суммирования чисел в массиве. Есть массив чисел var numbers = [10, 25, 100].
//   На выходе должны получить переменную, в которой будет содержаться сумма этих чисел (135).
//   Расширить функционал, так, чтобы скрипт игнорировал другие типы данных.

var numbers = [10, 25, 100];
var sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if(typeof numbers[i] === "number" && !isNaN(numbers[i])) {
    sum += numbers[i];
    }
} 
alert(sum);


//     4. Задание со звездочкой. Создать массив объектов для юзеров [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {name: ‘Pavel’, age: 24}, {name: ‘Sasha’, age: 29}]
//   Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.

let userArr = [
    { name: 'Ivan', age: 18 },
    { name: 'Petr', age: 12 },
    { name: 'Sidor', age: 25 },
    { name: 'Pavel', age: 24 },
    { name: 'Sasha', age: 29 },
];
let userArrAdult = [];
let userArrUnderage = [];

for (let i = 0; i < userArr.length; i++) {
    if (userArr[i].age >= 18) {
        userArrAdult.push(userArr[i])
    } else {
        userArrUnderage.push(userArr[i]);
    }
}

console.log(userArrAdult);
console.log(userArrUnderage);





//                      ДЗ_JS_4

// - Напишите функцию hello1(), которая при вызове будет 
// возвращать строку «Привет, JavaScript!».

function hello1(name) {
    return `Привет, ${name}`;
}
alert (hello1('JavaScript!'));



// - Напишите функцию hello2(), которая при вызове будет 
// принимать переменную name (например, «Василий») 

function hello2(name) {
    alert (`Привет, ${name}`);
}
hello2('Василий');



// - Напишите функцию mul(n,m), которая принимает два аргумента и 
// возвращает произведение этих аргументов. Проверьте ее работу.

function mul(n = +prompt('Введи число', ''), m = +prompt('Введи число', '')) {
    let result = n * m;
    if ( (typeof (n || m) === "number") && !isNaN(n || m) && ((n || m) !== undefined)) {
        return result;
    }
}
alert( mul() );



// - Создайте функцию repeat(str, n), которая возвращает строку, 
// состоящую из n повторений строки str.
// 	  n — по умолчанию 2, str — пустая строка.

function repeat(str = "", n = 2) {
    var result = "";
    for (var i = 0; i < n; i++) {
        if (typeof n === "number" && !isNaN(n)) {
            result += str;
        }
    }
    return result;
}
console.log(repeat ('x', 100));
// var res27 = repeat ('x', 100000000); // загрузка 100 MB - 27 сек.
// console.log(res);

// // загрузка 100 MB - 6 сек.:
// function repeat(str ='', n = 2) { 
//     var result = '';
//     for (;;) { 
//         if (n & 1) result += str; 
//         n >>= 1;
//         if (n) str += str;
//         else break;
//     }
//     return result;
// }
// var res6 = repeat ('x', 100000000);
// console.log(res);



// - Создайте функцию rgb(a, b, c), которая будет принимать три числовых 
// аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы 
// не заданы, считать их равными нулю. Не проверять переменные на тип данных.

function rgb(
    a = prompt('Введи число от 0 до 255', '0'), 
    b = prompt('Введи число от 0 до 255', '0'), 
    c = prompt('Введи число от 0 до 255', '0')
) {
    if( ( (a && b && c) > 0 ) && ( (a && b && c) <= 255 ) ) {
    return `rgb(${a ? a : 0}, ${b ? b : 0}, ${c ? c : 0})`;
    } 
}
alert( rgb() );



// - Создайте функцию avg() , которая будет находить среднее
// арифмитическое значение своих аргументов.

function avg() {
    var result;
    var leng = 0;
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] === "number" && !isNaN(arguments[i])) {
            leng++;
            sum += arguments[i];
        }
    }
    result = sum / leng;
    return result;
}



// - * Напишите функцию words(n), которая в зависимости от 
// переданного в нее целочисленного аргумента n, будет выводить слово 
// «товар» в нужной форме («12 товаров», но «22 товара»). По умолчанию 
// аргумент n должен иметь значение 0.

function words(n = prompt('Сколько товаров?', '0')) {
    let rest10 = n % 10;
    let rest100 = n % 100;

    if (rest10 === 1 && rest100 !== 11) {
        alert (n + ' товар');
    } else if ( (rest10 > 1 && rest10 < 5) && (!(rest100 > 11 && rest100 < 15)) ) {
        alert (n + ' товара');
    } else {
        alert (n + ' товаров')
    }
}
words();



// -Задание со звездочкой. Пишем функцию решения 
// квадратного уравнения через дискриминант:

// 		ax² + bx + c = 0 (общий вид уравнения)

// 		D = b2 – 4ac
// 		D > 0
// 		x1 = (-b + √D ) / 2a
// 		x2 = (-b – √D ) / 2a
// 		D = 0
// 		x = -b / 2a
//	    D < 0 - прекращаем решать уравнение;

function disc(a, b, c) {
    var d = Math.pow(b, 2) - 4 * a * c; // Math.pow(b, 2) -- b ^ 2 or b ** 2 ???
    if( (d > 0) ) {
        var x1 = (-b + Math.sqrt(d)) / (2 * a);
        var x2 = (-b - Math.sqrt(d)) / (2 * a);
        return [x1, x2];
    } else if (d === 0) {
        x3 = -b / 2 * a;
        return [x3];
    } else {
        return;
    }    
}





//                      ДЗ_JS_5

// - Есть функция function f(x) {
//     //Тело функции (ваш код здесь должен быть)
// }
// Научиться отличать отсутсвие аргументов у функции или то что первый аргумент задан. 
// Если аргментов нет то функция возвращает 0, если аргумент undefined то возвращает 0. 
// Дополнительное задание: реализовать функцию function f(x) как стрелочную.

function f() {
    return (arguments.length >= 1) ? 1 : 0;
}

let f = () => (arguments.length >= 1) ? 1 : 0;
f();

// - Написать функцию  sum(a, b), которая возвращает сумму переданных ей аргументов. 
// Реализовать с помощью function declaration и с
// помощью стрелочной функции. !!!Использовать цикл "for in" если это возможно.
// (
//     arguments or =>
//     for in не работает, в видео
// )

// function sum(a, b) {
//     var sum = 0;

//     for ( let i = 0; i < arguments.length; i++) {
//         if( (typeof(arguments[i]) === "number") && !isNaN(arguments[i])) {
//             sum+= arguments[i];
//         }
//     }
//  return sum;
// }
// var res = sum(2, 3);
// var res2 = sum(2, 3, 4, "5", 10);



// - Дан массив [1, 2, 56, 28, 90, 5, 6]. Отсортировать массив в порядке 
// возрастания его элементов. В отсортированном массиве используя 
// метод indexof вывести индекс элемента со значением "6". 

var numbers = [1, 2, 56, 28, 90, 5, 6];
for (var number of numbers) {
}
console.log(numbers)

// var indexofSix = numbers.indexOf(6); до сортировки: 
// индекс первой найденной 6 

numbers.sort() // сортирует по первой цифре
console.log(numbers)
numbers.sort(function(a, b) {
    if (a> b) {
        return 1;
    }    else {
        return -1;
    }
})
console.log(numbers)



// - Задание с прошлых занятий. Создать массив объектов для юзеров 
// [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {name: ‘Pavel’, age: 24}, {name: ‘Sasha’, age: 29}]
// Написать скрипт, который будет на выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.
// !Использовать метод filter. Полученные на выходе два массива отсортировать (каждый из них в отдельности) 
// по старшинству членов (от самого старшего к самому младшему).
// - Расширить предыдущее задание так чтобы из исходного массива удалялись все несовершенолетние пользователи.

// (a.age < b.age)

let userArr = [
    { name: 'Ivan', age: 18 },
    { name: 'Petr', age: 12 },
    { name: 'Sidor', age: 25 },
    { name: 'Pavel', age: 24 },
    { name: 'Sasha', age: 29 },
];

let userAdult = [];
let userUnderage = [];

let userUnderage = userArr.filter(x => x.age < 18);
let userAdult = userArr.filter(x => x.age >= 18);
console.log(userUnderage, userAdult);

// var UnderAge = userArr.find((user) => user.age === 18); первый 18летний, вернёт undefind, если нет такого эл-та
// var UnderAge = userArr.findIndex(user => user.age === 49); вернуть индекс элемента, зная только какую-то инфу, вернёт -1, если нет такого эл-та





//                          ДЗ_6

// - Дан массив var arr = [1, 10, 25, 67, 87, 56]. Добавить в конец массива число 4. Вывести полученный массив и в переменную leng сохранить его новую длину.
// 	  Из полученного массива извлечь последний элемент. Извлеченный элемент добавить вначало массива. 

var arr = [1, 10, 25, 67, 87, 56];
var leng = arr.push(4);
console.log(leng);
console.log(arr);
var lastEl = arr.pop();
arr.unshift(lastEl);
console.log(arr);


// 	- Дан массив var arr1 = [2, 5, 90, 4]. Обьеденить данный массив с массивом из предыдущего задания (с учетом тех изменений, которые вы с ним уже произвели в том задании ) 
// и записать результат в переменную arr2. Сами массивы arr и arr1 должны остаться неизмененными. 

var arr1 = [2, 5, 90, 4];
var arr2 = [...arr, ...arr1]; // var arr2 = [].concat(arr, arr1);
console.log(arr2, arr, arr1);


// 	- В образовавшемся массиве arr2 определить положение числа 90 (ее индекс) и удалить 
// ее из массива. Вместо 90 добавить в массив числа 19, 2, 91.

var index90 = arr2.indexOf(90);
arr2.splice(index90, 1, 19, 2, 91)
console.log(arr2);

// 	- В измененном массиве arr2 извлечь последние 4 элемента с конца и записать их 
// в массив arr3. Сам массив arr2 не должен измениться (извлеченные из него эелементы 
// должны в нем остаться). Массив arr3 отсортировать по возрастанию.

var arr3 = arr2.slice(-4);
console.log(arr3, arr2);

arr3.sort(function(a, b) {
    if (a > b) {
        return 1;
    }    else {
        return -1;
    }
})
console.log(arr3);

// 	- Отсортировать массив arr2 по убыванию. Посчитать сумму его эелементов. (Попробуйте использовать метод reduce в статье про методы есть его описание).

arr2.sort(function(a, b) {
    if (a < b) {
        return 1;
    }    else {
        return -1;
    }
})
console.log(arr2);

let arr2Sum = arr2.reduce((sum, current) => sum + current, 0);
console.log(arr2Sum)


// 	- Дан массив пользователей. var users = [
//  						  {id: 1, name: "Вася", age: 20},
//   						  {id: 2, name: "Петя", age: 19},
//   						  {id: 3, name: "Маша", age: 18}
// 						];
// 	  Добавить в этот маccив еще одного пользователя {id: 4, name: "Дима", age: 17}. 
//  Инвертируйте данный массив и выведите возраст пользователя с именем "Петя".
// 	- В массиве users посчитайте общий суммарный возраст всех пользователей.

var users = [
            {id: 1, name: "Вася", age: 20},
            {id: 2, name: "Петя", age: 19},
            {id: 3, name: "Маша", age: 18}
];

users.push({id:  4, name: "Дима", age: 17});
users.reverse();

var userName = users.find(user => user.name == "Петя");
var userAge = userName.age;

var usersAgeSum = users.reduce((sum, user) => sum + user.age, 0);
console.log(usersAgeSum);