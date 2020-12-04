// 1. - Напишите функцию func(), которая при каждом своём вызове будет возвращать 
// количество своих вызовов (сколько раз ее вызызвали до этого плюс этот вызов);

function func() {
    let count = 0;
  
    return function() {
      return ++count;
    };
  }
  let counter = func();
  alert(counter());



// 2. - Напишите функцию, которая будет увеличивать переменную let i = 0, от 0 до 20, 
// при чём переменная будет увеличивать своё значение на еденицу каждые 2 секунды. 
// Когда переменная станет равной 20, прекратить увеличение. 
// Попробуйте реализовать через setInterval и через рекурсивный setTimeout.

// через setInterval - задержка 2 сек и перед первым вызовом: 
function numbers() {
    let i = 0;
    let timerId = setInterval(function() {
        console.log(i);
        if (i == 20) {
            clearInterval(timerId);
        }
        i++
    }, 2000)
}
console.log(numbers());

// через setInterval - без задержки перед первым вызовом: 
function numbers() {
    let i = 0;
    function go() {
        console.log(i);
        if (i == 20) {
            clearInterval(timerId);
        }
        i++
    }
go();
let timerId = setInterval(go, 2000);
}
console.log(numbers());


function numbers() {
    let i = 0;
    setTimeout (function go() {
        console.log(i);
        if (i < 20) {
            setTimeout(go, 2000);
        }
        i++;
    }, 2000);
}
console.log(numbers());



// 3. - Напишите функцию startTimer(), которая будет запускать вывод через 
// confirm("Реклама исчезнет счерез 5 секунд, вы согласны ?"), при нажатии "ДА" выводите 
// alert("Реклама") через 5 секунд, если нажали "НЕТ", то повторить вопрос
// confirm("Реклама исчезнет счерез 5 секунд, вы согласны ?")
// и так до тех пор, пока пользователь не нажмет "ДА" и не увидит эту рекламу через alert.

function startTimer() {
    let timerId = setTimeout (function() {
        confirm("Реклама исчезнет счерез 5 секунд, вы согласны ?");
            if (1) {
                setTimeout (function() {
                    alert("Реклама");
                }, 5000);
            } else {
                return timerId;
            }
    }, 0);
}