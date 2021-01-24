// - Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, 
// которая принимает на вход числовой показатель загрязнения комнаты (от 0 до 10).
// В зависимости от этого числа опеределяется, сколько времени надо потратить на уборку,
// это время равно значению dirtyLevel * 1000 в мс. Данная функция возвращает успешно 
// выполненный промис спустя указанное время dirtyLevel * 1000. Для обработки успешной 
// уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`); 
// где result это аргумент resolve.

// - Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 
// вы спустя dirtyLevel * 1000 мс возвращали выполненныйс ошибкой промис. 
// Для обработки неуспешной уборки в then используйте console.log(err). 
// Где err это аргумент reject. Текст ошибки придумайте сами.

// // let dirtyLevel = +prompt('Определите уровень загрязнения от 0 до  10:', "");

// // function cleanRoom() {
// //     return new Promise((resolve, reject) => {

// //         if( dirtyLevel <= 10 && dirtyLevel >= 0 &&
// //             typeof dirtyLevel === "number" && !isNaN(dirtyLevel) ) {

// //             setTimeout(() => resolve(dirtyLevel), dirtyLevel * 1000)

// //         } else {
// //             setTimeout(() => reject('Ошибка! Уборка не будет выполнена'), dirtyLevel * 1000)
// //         }
// //     })
// // }

// // cleanRoom(dirtyLevel).then(
// //     suc => console.log(`Уборка проведена успешно за ${suc} сек.`),
// //     err => console.log(err)
// // )

// or:
// let dirtyLevel = +prompt('Определите уровень загрязнения от 0 до  10:', "");

// function cleanRoom() {
//     let cleanTime = dirtyLevel * 1000;
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (dirtyLevel <= 10 && dirtyLevel >= 0 && !isNaN(dirtyLevel)) {
//                     resolve(cleanTime);
//                 } else {
//                     reject('Ошибка! Уборка не будет выполнена');
//                 }
//             }, cleanTime)
//         })
// }

// cleanRoom(dirtyLevel).then(
//     success => console.log(`Уборка проведена успешно за ${success / 1000} сек.`),
//     err => console.log(err)
// )

// - Задание со звездочкой. Расширьте предыдущее задание так, чтобы можно было осуществить 
// последовательную уборку трех комнат. Для этого создайте цепочку промисов. Только после того,
// как уборка комнаты завершена, пользователь может начать убирать новую. 
// Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. Для этого функция 
// cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, 
// каждый из кторых описывает уровень загрязнения каждой комнаты.

function cleanRoom(dirtyLevel) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dirtyLevel <= 10 && dirtyLevel >= 0 && !isNaN(dirtyLevel)) {
                resolve(dirtyLevel);
            } else {
                reject('Ошибка! Уборка не будет выполнена');
            }
        }, dirtyLevel * 1000)
    })
}

function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    return cleanRoom(dirtyLevel_1)
        .then(result => {
            console.log(`Уборка проведена успешно за ${result} сек.`)
            return cleanRoom(dirtyLevel_2)
        }).then(result => {
            console.log(`Уборка проведена успешно за ${result} сек.`)
            return cleanRoom(dirtyLevel_3)
        }).then(result => {
            console.log(`Уборка проведена успешно за ${result} сек.`)
        }).catch(err => console.log(err));
}

cleanRooms(3, 2, 1);

// - Задача на повторение массивов. Дан массив строк (например: 
// ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"]).
// Ваша задача: написать функцию countRepeats, которая будет выводить информацию о том, 
// какой элемент в данном массиве сколько раз повторяется. Функция должна возвращать объект типа:
// 	  	{
// 			str:  3,
// 			str1: 2,
// 			str2: 2,
// 			str4: 2,
// 			str3: 1,
// 		}	
// Обратите внимание, что информация должна быть отсортирована по убыванию повторений.

// function(arr) {
//     Object.defineProperties(arr)
// }
// let promise = new Promise(arr) {

// }
// let arr = ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"];