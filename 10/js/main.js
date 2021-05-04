// Перепишите функцию, используя оператор '?' или '||'
// важность: 4
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }


// function checkAge(age) {
//     return (age > 18) ? true :  confirm('Родители разрешили?');
// }

// function checkAge(age) {
//     return (age > 18)  ||  confirm('Родители разрешили?');
// }

//*******************************************************


// Функция min(a, b)
// важность: 1
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// let one = prompt('1 значение введите', '');
// let two = prompt('2 значение введите', '');

// function checkNumber(one, two){
//     if ( one > two ){
//         alert(two);
//     } else if ( one < two ){
//         alert(one);
//     } else {
//         alert(one);
//     }
// }

// checkNumber(one, two);


//*********************************************************************

// Функция pow(x,n)
// важность: 4
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

1 решение 

let one = prompt('1 значение введите', '');
let two = prompt('2 значение введите', '');

function checkNumber(one, two){
    alert(one ** two);
}

checkNumber(one, two);





2 решение этой задачи
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}



3 решение

function pow(x,n) {
if (n>0) {
let result = x**n;
alert(result);
}
else {
alert("ERROR");
}
}

let x = +prompt("x");
let n = +prompt("n");

pow(x,n);