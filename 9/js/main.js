// Напишите "if", аналогичный "switch"
// важность: 5
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// if (browser) {
// } else if ( browser == 'Edge' ){
//     alert( "You've got the Edge!" );
// } else if ( browser == 'Firefox' && 'Safari' && 'Opera' ){
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }



const number = +prompt('Введите число между 0 и 3', '');

switch(number){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;    
}


