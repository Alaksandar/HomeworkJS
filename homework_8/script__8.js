// 1. - Дан объект let user = {
//      name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }.
// Запишите поле name в переменную userName, поле year - в переменную userYeaar, 
// поле car - в переменную userCar, остальные поля записать в объект userOtherInfo;




// 2. - Дан массив let arr = [1, "str", 24, {name: "Ivan"}, 89, undefined, "10"]. 
// Используя оператор расширения и соответсвие порядка следования элементов запишите первые 
// два элемента массива в переменные firstElement, secondElement, число 89 (четвертый элемент 
// массива) в переменную fifthElement. Остальные элементы после 89 запишите в массив otherElements;

let arr = [1, "str", 24, {name: "Ivan"}, 89, undefined, "10"];

[firstElement, secondElement, , , fifthElement, ...otherElements] = arr;
console.log(firstElement, secondElement, fifthElement, otherElements);



// 3. - Используя объект Date представьте текущую дату на момент выполения задания в формате 
// DD.MM.YYYYY (например 5.12.2020). Расширить задание таким образом, чтобы, 
// если день месяца есть число меньше 10, перед ним ставился "0" (например 05.12.2020);

let now = new Date().toLocaleDateString();
console.log(now);

// or:

var now = new Date();
var day = ("0" + now.getDate()).slice(-2); // если день месяца - число меньше 10, перед ним ставится "0"
var month = ("0" + (now.getMonth() + 1)).slice(-2); // если месяц - число меньше 10, перед ним ставится "0"
var today = (day) + "." + (month) + "." + now.getFullYear();
console.log(today);


// 4. - Дан объект let user = {
//   			name: "Ivan",
//   			age: 19};
// Создайте копию объекта использую сериализацию и десериализацию (JSON.stringify(), JSON.parse());

let user = {
      		name: "Ivan",
            age: 19
            };

let user1 = JSON.parse(JSON.stringify(user));