// Выведите чётные числа
// важность: 5
// При помощи цикла for выведите чётные числа от 2 до 10.

// for (let i = 1; i < 11; i++) {

//     if (!(i % 2)) {
//       alert( i );
//     }
  
//   }

// *******************************************************

// Замените for на while
// важность: 5
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
//  while ( i < 3 ){
//      alert(`number ${i}!`);
//      i++;
//  } 

// *****************************************************************



// Повторять цикл, пока ввод неверен
// важность: 5
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.


let numberInput = prompt('Введите число, большее 100?', '');

if ( numberInput > 100){
    alert('');
} else {
while ( numberInput < 100 ){
    let numberInput = prompt('Введите число, большее 100?', '');
    if ( numberInput > 100){
        alert('');
    }
}
}

// **************************************************


// Вывести простые числа
// важность: 3
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// Для n = 10 результат должен быть 2,3,5,7.

// P.S. Код также должен легко модифицироваться для любых других интервалов.


// let number = prompt('Введите число:', '');

// for ( let n = 0; n < 10; n++ ){
//     if ( n % 0 == 0)
//     alert(n);
// }