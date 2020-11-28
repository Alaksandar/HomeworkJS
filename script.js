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
    alert ('Введите число');
}
                            // or:
let age = +prompt('Сколько вам лет?', '');
if (age >= 18 && typeof age === "number" && !isNaN(age) ) {
    alert (`поздравляем, вам ${age} полных лет`);
    alert ('вы совершеннолетний');
} else if (age <= 18 && typeof age === "number" && !isNaN(age) )  {
    alert (`поздравляем, вам ${age} полных лет`);
    alert ('вы несовершеннолетний');
} else {
    alert('Введите число')
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

                        // or with function: 
var numbers = [10, 25, 100];
function arrSum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if(typeof array[i] === "number" && !isNaN(array[i])) {
            sum += array[i];
        }
    }
    return sum;
} 
arrSum(numbers);



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





                        