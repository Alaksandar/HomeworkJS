//                         ДЗ_7

// 1. - Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]; На основании этого массива создать 
// новый массив arrUnique который будет представлять собой массив arr но без дублирующихся
// по своим значениям элементам. Использовать методы reduce и indexOf.

var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];

// let arrUnique = [...new Set(arr)];
// console.log(arrUnique);  
//                                     //or:

function unique (array) {
    var result = [];
    for (let num of array) {
        if ( !result.includes(num) ) {
            result.push(num);
        }
    }
    return result;
}

var arrUnique = unique(arr);
console.log(arrUnique);
//                          or:

var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
var arrUnique = arr.reduce((newArr, item) => {
    console.log(newArr, newArr.indexOf(item));
    if (newArr.indexOf(item) === -1) {
        newArr.push(item);
        return newArr;
    } else {
        return newArr;
    }
}, [])
console.log(arrUnique);



// 2. - Дан массив пользователей. var users = 
// [{id: 1, name: "Вася", age: 19}, {id: 2, name: "Петя", age: 18}, {id: 3, name: "Маша", age: 17},
// {id: 4, name: "Света", age: 18},n{id: 5, name: "Наташа", age: 17}, {id: 6, name: "Женя", age: 12},
// {id: 7, name: "Коля", age: 30}, {id: 8, name: "Настя", age: 16}, {id: 9, name: "Антон", age: 19},
// {id: 10, name: "Иван", age: 20}, {id: 11, name: "Павел", age: 16}, {id: 12, name: "Денис", age: 20}];

// На основании этого массива сформировать новый массив usersAfterYear где все пользователи 
// повзрсолели на год и являются совершенолетними (повзрослевших на год, но оставшимися
// все еще несовершенолетних пользователей в новый массив usersAfterYear не включать). 
// Сам массив users должен остаться неизменным. Использовать метод map.

var users = [
     		{id: 1, name: "Вася", age: 19},
      		{id: 2, name: "Петя", age: 18},
      		{id: 3, name: "Маша", age: 17},
      		{id: 4, name: "Света", age: 18},
      		{id: 5, name: "Наташа", age: 17},
     		{id: 6, name: "Женя", age: 12},
    	    {id: 7, name: "Коля", age: 30},
    		{id: 8, name: "Настя", age: 16},
    		{id: 9, name: "Антон", age: 19},
    		{id: 10, name: "Иван", age: 20},
    		{id: 11, name: "Павел", age: 16},
    		{id: 12, name: "Денис", age: 20}
        ];
        
var usersAfterYear = users.map(user => (user.age +=1, user)); // or:

// var usersAfterYear = users.map(user => {
//     user.age +=1;
//     return user;
// })

usersAfterYear = usersAfterYear.filter(user => user.age >= 18);
console.log(usersAfterYear);



// 3. - На основании массива usersAfterYear, полученного на основании предыдущего задания создать 
// новый массив usersAfterYearUniqueAge, в котором нет пользователей с одинаковым возрастом. 
// Если у вас есть два пользователя ({id: 2, name: "Петя", age: 19} и {id: 4, name: "Света", age: 19}, 
// то вы должны оставить только Петю или Свету одного, а не их двоих). 
// (Это задание похоже на первое задания про массив arr и arrUnique)

var usersAfterYearUniqueAge = Object.values(
    usersAfterYear.reduce((newArr, user) => {
        console.log(newArr, user);
        if (!newArr[user.age]) {
            newArr[user.age] = user;
        }
        return newArr;
    }, {})
);
console.log(usersAfterYearUniqueAge);

// or! function can remove any property duplicates:

function removeDuplicates(myArr, prop) {
    return myArr.filter((user, index, arr) => {
        console.log(user, index, arr);
        return arr.map(mapUser => mapUser[prop]).indexOf(user[prop]) === index;
    });
}

var usersAfterYearUniqueAge = removeDuplicates(usersAfterYear,"age");
console.log(usersAfterYearUniqueAge);


// 4. - Дан объект var users = {
// 					first_name: "pavel",
// 					second_name: "ivanov",
// 					father_name: "ivanovich",
// 					city: "minsk",
// 					car: "subaru",
// 					telephone: "samsung" 
// 				}
// Необходимо сделать так, чтобы все значения полей объекта users начинались с заглавной буквы 
// (например не "pavel" a "Pavel"). Для решения этой задачи рекомендую использовать 
// методы Object.keys или Object.values и методы строк, как UpperCase. 

var users = {
    					first_name: "pavel",
    					second_name: "ivanov",
    					father_name: "ivanovich",
    					city: "minsk",
    					car: "subaru",
    					telephone: "samsung" 
                    }
                    
var userKeyArr = Object.keys(users);
userKeyArr.forEach(value => { 
    users[value] = users[value][0].toUpperCase() + users[value].slice(1);
});
console.log(users);

// var userKeyArr = Object.keys(users);
// var userValueArr = Object.values(users);

// function getFirstLettersUpperCase (x) {
//     for(var i = 0; i < x.length; i++) {
//         var result = "";
//         var input = x[i];
//         var firstLetter = input.slice(0,1);
//         var capitalized = input.replace(firstLetter, firstLetter.toUpperCase());
//         result = capitalized;
//         console.log(result);
//     }
//     return result;
// }
// userValueArrNew = getFirstLettersUpperCase (userValueArr); // ???
// console.log(userValueArrNew);  

// for(var i = 0; i < userValueArr.length; i++) {
//     var input = userValueArr[i];
//     var firstLetter = input.slice(0,1);
//     var capitalized = input.replace(firstLetter, firstLetter.toUpperCase());
//     var result = capitalized;
// console.log(result);
// }

// for(var i = 0; i < userValueArr.length; i++) {
//     var capitalized = userValueArr[i][0].toUpperCase() + userValueArr[i].slice(1);
//     var result = capitalized;
// console.log(result);
// }



// 5. - Посчитать первые 8 чисел Фибоначчи использую рекурсию. Например: fibonachi(n); 
// (При вызове функции положите n = 8); 

var fibonachi = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return fibonachi(n - 1) + fibonachi(n - 2);
    }
}
fibonachi(8);

                            // or:
// var fibonachi = (n) => n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
// fibonachi(8);



// 6. - Посчитать с помощью рекурсии факториал числа 10. Например: factorial(n); 
// (При выозове положите n = 10); 	

var factorial = (n) => {
    n >= 1;
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    } 
}
console.log(factorial(10));
                                    
                                    // or:
// var factorial = (n) => n == 1 ? 1 : n * factorial(n - 1);
// console.log(factorial(10));

                                    // or:
// function factorial(n) {
//     return n ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(10));