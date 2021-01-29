// Попрубуйте реализовать задачу на цепочку промисов 
// из предудущего домашнего задания через async/await.


// - Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, 
// которая принимает на вход числовой показатель загрязнения комнаты (от 0 до 10).
// В зависимости от этого числа опеределяется, сколько времени надо потратить на уборку,
// это время равно значению dirtyLevel * 1000 в мс. Данная функция возвращает успешно 
// выполненный промис спустя указанное время dirtyLevel * 1000. Для обработки успешной 
// уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`); 
// где result это аргумент resolve.

// - Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 
// вы спустя dirtyLevel * 1000 мс возвращали выполненный с ошибкой промис. 

function cleanRoom(dirtyLevel) {
    let cleanTime = dirtyLevel * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dirtyLevel <= 10 && dirtyLevel >= 0 && !isNaN(dirtyLevel)) {
                resolve(cleanTime);
                console.log(`Уборка проведена успешно за ${cleanTime / 1000} сек.`)
            } else reject();
        }, cleanTime)
    })
}

async function asyncCleanRoom() {
    console.log('Уборка:')
    try {
        await cleanRoom(2)
        await cleanRoom(1)
        await cleanRoom(11)
    } catch (err) {
        console.log('Ошибка! Уборка не будет выполнена')
    }
}

asyncCleanRoom();

// - На основанни задачи из прошлого дамашнего задания сделайте так, 
// чтобы можно было осуществить параллельную уборку трех комнат. 
// Только после того как уборка всех комнат завершена, пользователь 
// может заявить об окончании уборки. Если одна из комнат оказалась 
// слишком грязной, то пекращаем уборку полностью. Для этого функция 
// cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать 
// три аргумента, каждый из которых описывает уровень загрязнения каждой комнаты.


// 
//  вариант 1
function cleanRoom(dirtyLevel) {
    let cleanTime = dirtyLevel;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dirtyLevel <= 10 && dirtyLevel >= 0 && !isNaN(dirtyLevel)) {
                resolve(cleanTime);
            } else reject();
        }, cleanTime * 1000)
    })
}

function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    Promise.all ([
        cleanRoom(dirtyLevel_1).then(result => {
            console.log(`Уборка комнаты проведена успешно за ${result} сек.`)}),
        cleanRoom(dirtyLevel_2).then(result => {
            console.log(`Уборка комнаты проведена успешно за ${result} сек.`)}),
        cleanRoom(dirtyLevel_3).then(result => {
            console.log(`Уборка комнаты проведена успешно за ${result} сек.`)}),      
    ]).then(result => {
        console.log(`Уборка комнат проведена успешно за ${result} сек.`) //cleanTime = dirtyLevel; 
    }).catch((err) => {
        console.log('Ошибка! Уборка не будет выполнена')})
}

cleanRooms(3, 2, 1);


//  вариант 2
function cleanRoom(dirtyLevel) {
    let cleanTime = dirtyLevel;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dirtyLevel <= 10 && dirtyLevel >= 0 && !isNaN(dirtyLevel)) {
                resolve(cleanTime);
                console.log(`Уборка комнаты проведена успешно за ${cleanTime} сек.`) //cleanTime = dirtyLevel
            } else reject('Ошибка! Уборка не будет выполнена');
        }, cleanTime * 1000)
    })
}

function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    Promise.all ([

        cleanRoom(dirtyLevel_1),
        cleanRoom(dirtyLevel_2),
        cleanRoom(dirtyLevel_3),         
    
    ]).then(result => {
        console.log(`Уборка комнат проведена успешно за ${result} сек.`) 
    }).catch((err) => {
        console.log(err)})
}

cleanRooms(3, 2, 1);


//вариант 1 с async/await without try/catch
function cleanRoom(dirtyLevel) {
    let cleanTime = dirtyLevel * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dirtyLevel <= 10 && dirtyLevel >= 0 && !isNaN(dirtyLevel)) {
                resolve(cleanTime);
                console.log(`Уборка проведена успешно за ${cleanTime / 1000} сек.`)
            } else reject();
        }, cleanTime)
    })
}

async function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    const allRooms = await Promise.all([
        cleanRoom(dirtyLevel_1),
        cleanRoom(dirtyLevel_2),
        cleanRoom(dirtyLevel_3)
    ])
    .then(result => console.log(`Уборка комнат проведена успешно`))
    .catch((err) => console.log('Ошибка! Уборка не будет выполнена'))
}
    
cleanRooms(3, 2, 11);


//вариант 2 async/await with try/catch
function cleanRoom(dirtyLevel) {
    let cleanTime = dirtyLevel * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dirtyLevel <= 10 && dirtyLevel >= 0 && !isNaN(dirtyLevel)) {
                resolve(cleanTime);
                console.log(`Уборка проведена успешно за ${cleanTime / 1000} сек.`)
            } else reject();
        }, cleanTime)
    })
}

async function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) {
    try {

        const allRooms = await Promise.all([
            cleanRoom(dirtyLevel_1),
            cleanRoom(dirtyLevel_2),
            cleanRoom(dirtyLevel_3)
        ]).then(result => console.log(`Уборка комнат проведена успешно`))
    
    } catch (err) {console.log('Ошибка! Уборка не будет выполнена')}
}

cleanRooms(3, 2, 11);

