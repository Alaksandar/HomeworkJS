// - Используйте метод reduce в комбинации с concat для свёртки массива массивов 
// в один массив, у которого есть все элементы входных массивов.
// 	  Например:
// 		var arrays = [[1, 2, 3], [4, 5], [6]];
// 		// Ваш код тут
// 		// → [1, 2, 3, 4, 5, 6]	

// var arrays = [[1, 2, 3], [4, 5], [6]];
// // 1)
// let arr = arrays.reduce(function(acc, el, i) {
//     console.log(acc, el, i);
//     acc = acc.concat(arrays[i]);
//     return acc;
// }, []);
// // 2)
// arr = arrays.reduce((acc, el, i) => acc.concat(el));
// // 3)
// arr = arrays.reduce((acc, el, i) => [...acc, ...el]);
// // 4)
// arr = arrays.reduce((acc, el) => {
//     console.log(acc, [...el]);
//     return [...acc, ...el];
// }, []);



//     - Создайте функцию-конструктор, которая позволяет создавать объект 
// пользователя с полями first_name, second_name, age, city.
// С помощью данной функции создайте два объекта пользователей (два пользователя), 
// имя, фамилию, возраст, город проживания задайте сами. 

function User(first_name, second_name, age, city) {
    this.first_name = first_name;
    this.second_name = second_name; 
    this.age = age;
    this.city = city;
};

let writer = new User("Kurt", "Vonnegut", 84, "Indianapolis");
let character = new User("Billy", "Pilgrim", 54, "Ilium");


//     - Создайте функцию, которая позовляет вывести полную информацию о каждом из двух 
// пользователей, созданных в предыдущем задании. Функция должна выполнять вывод информации 
// и не принимать аргументов. По сути нужно в одну функцию привязать два объекта. 
// (& через prototype)