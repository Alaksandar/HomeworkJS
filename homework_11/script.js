// 1. - Создайте функцию-конструктор houseBuilder, которая позволяет создавать 
// объект дачного дома с параметрами ширины, длины и количества этажей.
// Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора. 
// (Длина, ширина, количество этажей - числовой тип данных, значения придумайте сами). 

function houseBuilder(width, length, floors) {
    this.width = width;
    this.length = length;
    this.floors = floors;
};

const firstHouse = new houseBuilder(10, 10, 1);
const secondHouse = new houseBuilder(15, 20 , 2);



// 2. - Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома. 
// Данный метод занести в прототип конструктора. Вызвать данный метод на каждом созданном 
// объекте и результат записать в поле totalArea каждого объекта.

// 2.a) .bind

function calcArea() {
    return this.width * this.length * this.floors;
};

calcArea.bind(firstHouse)();
calcArea.bind(secondHouse)();

firstHouse.totalArea = calcArea.bind(firstHouse)();
secondHouse.totalArea = calcArea.bind(secondHouse)();


// 2.b) .prototype

houseBuilder.prototype.calcArea = function(){
    return this.width * this.length * this.floors;
}

firstHouse.totalArea = firstHouse.calcArea();
secondHouse.totalArea = secondHouse.calcArea();



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

function askArea(result, resolve, reject) {
    let area = result();
    if (area >= "120") resolve();
      	else reject();
}

houseBuilder.prototype.checkAreaSuccessfully = function(){
    alert("План по стройке выполнен");
}
houseBuilder.prototype.checkAreaFail = function(){
    alert("План по стройке не выполнен");
} 

// 3.a)
askArea(calcArea.bind(firstHouse), firstHouse.checkAreaSuccessfully.bind(firstHouse), firstHouse.checkAreaFail.bind(firstHouse));
askArea(calcArea.bind(secondHouse), secondHouse.checkAreaSuccessfully.bind(secondHouse), secondHouse.checkAreaFail.bind(secondHouse));

// 3.b)
askArea(firstHouse.calcArea.bind(firstHouse), firstHouse.checkAreaSuccessfully.bind(firstHouse), firstHouse.checkAreaFail.bind(firstHouse));
askArea(secondHouse.calcArea.bind(secondHouse), secondHouse.checkAreaSuccessfully.bind(secondHouse), secondHouse.checkAreaFail.bind(secondHouse));



// get totalArea :
function houseBuilder(width, length, floors) {
    this.width = width;
    this.length = length;
    this.floors = floors;

    Object.defineProperty(this, "totalArea", {
        get() {
            return this.width * this.length * this.floors;
        }
    });
};

const firstHouse = new houseBuilder(10, 10, 1);
const secondHouse = new houseBuilder(15, 20 , 2);

console.log(firstHouse.totalArea);
console.log(secondHouse.totalArea);