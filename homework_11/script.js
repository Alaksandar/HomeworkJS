// 1. - Создайте функцию-конструктор houseBuilder, которая позволяет создавать 
// объект дачного дома с параметрами ширины, длины и количества этажей.
// Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора. 
// (Длина, ширина, количество этажей - числовой тип данных, значения придумайте сами). 

function houseBuilder(width, length, floors) {
    this.width = width;
    this.length = length;
    this.floors = floors;
};

const firstHouse = new houseBuilder(10, 10, 3);
const secondHouse = new houseBuilder(15, 20 , 2);



// 2. - Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома. 
// Данный метод занести в прототип конструктора. Вызвать данный метод на каждом созданном 
// объекте и результат записать в поле totalArea каждого объекта.

function calcArea() {
    alert(`Суммарная площадь всех этажей дома: ${this.width * this.length * this.floors}`);
};

calcArea.bind(firstHouse)();
calcArea.bind(secondHouse)();

firstHouse.totalArea = calcArea.bind(firstHouse);
secondHouse.totalArea = calcArea.bind(secondHouse);


// 3. - Дана функция function askArea(result, resolve, reject) {
//   				let area = result();
//   				if (area >= "120") resolve();
//   				else reject();
// 			}
	
// Добавьте в прототип конструктора houseBuilder метод для проверки того, что выполнен план 
// по площади checkAreaSuccessfully, которая выполняет alert("План по стройке выполнен"). 
// Добавьте также метод для проверки того, что не выполнен план по площади checkAreaFail,
// которая выполняет alert("План по стройке не выполнен"). Попробуйте вызвать:
		
// 	askArea(firstHouse.calcArea, firstHouse.checkAreaSuccessfully, firstHouse.checkAreaFail)
// 	askArea(secondHouse.calcArea, secondHouse.checkAreaSuccessfully, secondHouse.checkAreaFail)

// Будет ли такой код работать корректно? Если нет, то используйте 
// известные вам механизмы привязки, чтобы решить эту задачу. 