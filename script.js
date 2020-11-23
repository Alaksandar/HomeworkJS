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