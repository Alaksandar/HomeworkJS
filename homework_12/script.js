// 1.  Создайте класс House, который позволяет создавать объект здания 
// с параметрами длины(length), ширины(width) и количество этажей(floors).
//     Добавьте ему статический метод sortBuyFloors, который можно будет 
// использовать для сортировки зданий по возрастанию их высоты. 

class House {

    constructor(length, width, floors) {
        this.width = width;
        this.length = length;
        this.floors = floors;
    }

    static sortBuyFloors(houseA, houseB) {
        return houseA.floors - houseB.floors;
    }

};


// 2.  На основании класса House создайте класс Skyscraper (небоскреб, по сути 
// реализуйте через наследование). Данный класс кроме свойств length, width и floors 
// должен предоставлять дополнительное свойство offices(количество выделенных 
// офисов в заднии, можете задать их любым на ваше усмотрение).
//     Добавьте свойство fullArea, которое будет соответствовать суммарной площади 
// всех этажей вашего небоскреба. Данное свойсвто создать через get/set.
// При этом если площадь небоскреба увеличиась - то это значит, что сверху построили 
// еще этажи, а длина и ширина не поменялись, площадь может быть только увеличена. 
// Опишите в get, как будет осуществляться подсчет площади и вывод этой площади, 
// а в set определите как будет определяться новое количесвто этажей.

class Skyscraper extends House {

    constructor(length, width, floors, offices) {
        super(length, width, floors);
        this.offices = 50;
    }

    get fullArea() {
        return this.length * this.width * this.floors;
    }

    set fullArea(value) {
        this.floors = value / (this.length * this.width);
        return this.floors;
    }

}


// 3.  Создайте три небоскреба firstSkyscraper, secondSkyscraper и thirdSkyscraper. 
// Выведите площадь каждого из них, используя get fullArea. Попробуйте задать кому-нибудь 
// из них большую площаь, чем первоначальная. Выведите теперь новое количество этажей 
// изменненного внебоскреба. Убедитесь, что количество этажей поменялось, а длина и 
// ширина - нет. Если это так - то логика внутри set fullArea реализована правильно. 

const firstSkyscraper = new Skyscraper(100, 50, 40);
const secondSkyscraper = new Skyscraper(200, 150, 50);
const thirdSkyscraper = new Skyscraper(250, 200, 100);

firstSkyscraper.fullArea;
secondSkyscraper.fullArea;
thirdSkyscraper.fullArea;

firstSkyscraper.fullArea = 300000;

console.log(
    firstSkyscraper.floors,
    firstSkyscraper.length,
    firstSkyscraper.width);

// 4.  Оберните firstSkyscraper, secondSkyscraper и thirdSkyscraper в массив 
// skyscrapers и отсортируйте его по возрастанию высоты небоскребов, 
// используя статический метод класса-родителя sortBuyFloors.
	 
let skyscrapers = [
    firstSkyscraper, 
    secondSkyscraper,
    thirdSkyscraper
];

skyscrapers.sort(Skyscraper.sortBuyFloors);