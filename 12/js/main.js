// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// let user = {
//     name: "Jonh",
//     surname: "Smith",
// };

//  user.name = "Pete";
//  delete user.name;
//  alert(user.name);

//********************************************** 


// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
//   }

//**************************************************** 


// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// решение

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }


//   let sum = 0;

// for (let key in salaries){
//     sum += (salaries[key]);
// }

// alert(sum);

   
// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let multiplyNumeric = (obj) =>{
  for (let key in menu) {
    
    let qwer = menu[key];

    if (typeof qwer == 'number'){
      qwer *= 2;
    }
    
    alert(qwer);
  }
}

multiplyNumeric();






//Черновик

// let multiplyNumeric = (obj) =>  {


  // let hyiha = (menu[key]);

  //  let num = Number(hyiha);

  // alert(typeof hyiha);




  // for (let key in menu) {
    // let key = Number(str);
    // if(menu[key] == Number){
    //   alert('hyi');
    // } else{
    //   alert('pizda');
    // }

    // if (typeof menu[key] == number){
    //   alert('hyi');
    // } else {
    //   alert('pizda');
    // }

    // let num = Number(let [key] in menu);

    // alert(typeof menu[key]);

    // alert(menu[key]);
  // }
// }

// multiplyNumeric();
