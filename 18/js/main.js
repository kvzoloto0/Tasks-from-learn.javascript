//Что выведет массив ?


// let arr = ['Ваня','Иштван','Оля'];
// let newArr = arr;
// newArr.push('Петя');
// alert(arr.length); 

// Выведет: 4.


//****************************************************** */

// Создайте массив users с элементами "Ваня" и "Иштван".
// Добавьте "Оля" в конец.
// Замените значение в "Иштван" на "Петя".
// Ваш код для поиска значения должен
// работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте "Маша" и "Паша" в начало массива.


// let users = ["Ваня","Иштван",];

// alert(users); // Ваня, Иштван

// users.push("Оля");

// alert(users); // Ваня, Иштван, Оля

// users.splice(1,1,'Петя');

// alert(users); // Ваня, Петя, Оля

// users.unshift('Маша','Паша');

// alert(users); //Маша, Паша, Ваня, Петя, Оля


//************************************************************** */

//Удалить элемент 'Иштван' и возвратить его в переменную

// let arr = ['Ваня', 'Иштван', 'Оля',];

// let deleteElem = arr.splice(0, );

// alert(deleteElem);

// alert(arr);


//**************************************************************** */


// Сделать из строки массив 

// let str = 'Ваня, Иштван, Оля';

// let arr = str.split(',');

// alert(typeof (str) );

// alert(typeof (arr) );


//**************************************************************** */

// Чему равен previousValue в начале работы метода?


// let arr = [9, 2, 8,];
// let reduceValue = arr.reduce(function (previousValue, item, index, array) {
// 	console.log(previousValue);
// });



// previousValue - преведущая выполнение данного кода; в этом премере будет равно = 9
