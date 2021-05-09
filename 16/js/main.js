// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";
// Открыть песочницу с тестами для задачи.


// let name = prompt('Введите имя:', '');

// function ucFirst(str){

// //    let name = 'вася';

//     let qwerty = (name[0].toUpperCase());

//     let asdfg = (name.slice(1,20));

//     let zxcvb = qwerty + asdfg;

//     alert(zxcvb);
// }

// ucFirst();


//************************************************************ */

// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false



// function checkSpam(str){
//     let text = prompt('Введите текст?', '');
//     text = text.toLowerCase();
//     alert(text);
//     if (text.includes('xxx') || text.includes('viagra')){
//         alert(true);
//     } else {
//         alert(false);
//     }
// }

// checkSpam();


//***************************************************** */

// Усечение строки
// важность: 5
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"




// function truncate(str, maxlength){
//     str = prompt('Введите текст меньше 5 символов, если больше я отрублю концы', '');
//     if (str > str.substr(0,5) ){
//         let to4ka = ". . .";
//         alert(str.substr(0,5) + to4ka);
//     } else {
//         alert(str)
//     }

// }

// truncate();

//chernovik
// let to4ka = ". . .";
// str = str[5] ;
// str[5] = to4ka;
// alert(str + to4ka);
// to4ka = str.substr(5,0);
// alert (str.substr(0,5) );
// alert(to4ka)


//*********************************************** */

// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

// function extractCurrencyValue(str){
//     str = prompt('Введите валюту как в примере \'$240\' ', '');
//     alert(str.substr(1));
// }

// extractCurrencyValue();
