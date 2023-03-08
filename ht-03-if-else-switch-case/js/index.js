// Task 1
// При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

let b1 = document.querySelector(".b-1");
let i1 = document.querySelector(".i-1");
let out1 = document.querySelector(".out-1");

 function f1() {
  if (+i1.value === 4) {
  out1.textContent = 'true';
 } else {
  out1.innerHTML = 'false';
 }
}
b1.addEventListener('click', f1);
 

// let h1 = document.querySelector("h1");
// h1.addEventListener("mousemove", f0);
// function f0() {
//   console.log("hola!");
// }

// let b1 = document.querySelector(".b-1");
// let i1 = document.querySelector(".i-1");
// let out1 = document.querySelector(".out-1");

// let i0 = document.querySelector(".i-0");
// i0.addEventListener("blur", f00);
// function f00() {
//   console.log(2 * parseInt(i0.value));
// }

// function f1() {
// //   console.log(+i1.value);
// //   // console.log(Number(i1.value));

//   if (+i1.value === 4) {
//     // out1.innerHTML = "<span>true</span>";
//     out1.textContent = "true";
//   } else {
//     out1.innerHTML = "false";
//   }
// //   if (+i1.value === 4) {
// //     // out1.innerHTML = "<span>true</span>";
// //     out1.textContent = +i1.value;
// //   } else if (+i1.value === 12) {
// //     out1.innerHTML = +i1.value;
// //   } else if (+i1.value === 20) {
// //     out1.innerHTML = +i1.value;
// //   } else {
// //     out1.innerHTML = "false";
// //   }
// }
// b1.addEventListener("click", f1);

// Task 2
// Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.

let b2 = document.querySelector(".b-2");
let out2 = document.querySelector(".out-2");
let a21 = 45;
let a22 =32;

function f2() {
if (+a21 > +a22) {
out2.textContent = +a21;
} else {
  out2.textContent = +a22;
}
}
b2.addEventListener("click", f2);

// let a21 = 45;
// let a22 = 32;

// function f2() {}

// document.querySelector(".b-2").onclick = f2;

// Task 3
// Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна прочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в  out-3 большее число.
//     Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

let i31 = document.querySelector(".i-31");
let i32 = document.querySelector(".i-32");
let b3 = document.querySelector(".b-3");
let out3 = document.querySelector(".out-3");

function f3() {
  if (+i31.value > +i32.value) {
    out3.innerHTML = +i31.value;
  } else {
    out3.innerHTML = +i32.value;
  }
}
b3.addEventListener("click", f3);

// let i31 = document.querySelector(".i-31");
// let i32 = document.querySelector(".i-32");
// let b3 = document.querySelector(".b-3");
// let out3 = document.querySelector(".out-3");

// function f3() {
//   console.log(+i31.value);
//   console.log(+i32.value);
//   if (+i31.value > +i32.value) {
//     out3.innerHTML = +i31.value;
//   } else {
//     out3.innerHTML = +i32.value;
//   }
// }
// b3.addEventListener("click", f3);

// Task 4. Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в  .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

let i4 = document.querySelector(".i-4");
let b4 = document.querySelector(".b-4");
let out4 = document.querySelector(".out-4");

function f4() {
if (+i4.value >= 18) {
  out4.innerHTML = 1;
} else {
  out4.innerHTML = 0;
}
}

b4.addEventListener("click", f4);

// document.querySelector(".b-4").onclick = f4;

// Task 5. Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в  .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

let i5 = document.querySelector(".i-5");
let b5 = document.querySelector(".b-5");
let out5 = document.querySelector(".out-5");


function f5() {
if (+i5.value < 0) {
  out5.innerHTML = "m";
} else if (+i5.value === 0) {
  out5.innerHTML = 0;
} else {
  out5.innerHTML = 1;
}
}
b5.addEventListener("click", f5);

// document.querySelector(".b-5").onclick = f5;

// Task 6. Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в  .out-6  слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю  - четное, нет - нечетное.

let i6 = document.querySelector(".i-6");
let b6 = document.querySelector(".b-6");
let out6 = document.querySelector(".out-6");

function f6() {
if (+i6.value%2 === 0) {
  out6.innerHTML = "even";
} else {
  out6.innerHTML = "odd";
}
}
b6.addEventListener("click", f6);

// document.querySelector(".b-6").onclick = f6;

// Task 7.
// Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в  out-7. Для возведения в степень можно использовать **, или Math.pow.

let i71 = document.querySelector(".i-71");
let i72 = document.querySelector(".i-72");
let b7 = document.querySelector(".b-7");
let out7 = document.querySelector(".out-7");

function f7() {
Math.pow(+i71.value, +i72.value);
console.log(Math.pow(+i71.value, +i72.value));

out7.innerHTML = Math.pow(+i71.value, +i72.value);
}
b7.addEventListener("click", f7);

// document.querySelector(".b-7").onclick = f7;

// Task 8.  // задача решена не полностью!!!
// Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее  нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.

let s8 = document.querySelector(".s-8");
let b8 = document.querySelector(".b-8");
let out8 =  document.querySelector(".out-8");

function f8() {

  if (+s8.value === 1) {
    out8.innerHTML = "one";
  } else if (+s8.value === 2) {
    out8.innerHTML = "two";
  } else {
    out8.innerHTML = "three";
  }

}

// function f8_1() {
//   out8.textContent = "one";
// }
// function f8_2() {
//   out8.textContent = "two";
// }
// function f8_3() {
//   out8.textContent = "three";
// }

b8.addEventListener("click", f8);

// document.querySelector(".b-8").onclick = f8;

// Task 9
//     Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в  .out-9 номер подъезда, в котором находится квартира.
//      если от 1 до 32 - то вывести цифру 1
//     если от 33 до 43 - то вывести 2
//     если от 44 до 64 - то 3.
//     В противном случае, вывести 0.

let i9 = document.querySelector(".i-9");
let b9 = document.querySelector(".b-9");
let out9 = document.querySelector(".out-9");


function f9() {
  if (+i9.value >= 1 && +i9.value <= 32) {
    out9.innerHTML = "1";
  } else if (+i9.value >= 33 && +i9.value <= 43) {
    out9.innerHTML = "2";
  } else if (+i9.value >= 44 && +i9.value <= 64) {
    out9.innerHTML = "3";
  } else {
    out9.innerHTML = "0";
  }
}

b9.addEventListener("click", f9);

// document.querySelector(".b-9").onclick = f9;

// Task 10
// Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.

let s100 = document.querySelector(".s-100");
let b10 = document.querySelector(".b-10");
let out10 = document.querySelector(".out-10");

function f10() {
if (s100.value === "11") {
  out10.innerHTML = "Приз. Пройдите в склад 11 за подарком";
} else if (s100.value == "6") {
    f10_6();
} else if (s100.value == "7") {
    f10_7();
} else if (s100.value == "9") {
    f10_9();
}
}

function f10_6() {
  out10.innerHTML = "Пройдите на склад 6";
}
function f10_7() {
  out10.innerHTML = "Пройдите на склад 7";
}
function f10_9() {
  out10.textContent = "Пройдите на склад 9";
}

b10.addEventListener("click", f10);

// let s100 = document.querySelector(".s-100");
// let out10 = document.querySelector(".out-10");
// let b10 = document.querySelector(".b-10");

// function f10() {
//   if (s100.value === "11") {
//     out10.textContent =
//       "Вам выпал счастливый билет и пройдите сначала на кассу за призом, а потом на склад номер 11!";
//   } else if (s100.value == "6") {
//     f10_6();
//   } else if (s100.value == "9") {
//     f10_9();
//   } else if (s100.value == "7") {
//     f10_7();
//   }
// }
// function f10_6() {
//   out10.textContent = "Отправить покупателя на склад номер 6";
// }
// function f10_7() {
//   out10.textContent = "Отправить покупателя на склад номер 7";
// }
// function f10_9() {
//   out10.textContent = "Отправить покупателя на склад номер 9";
// }
// b10.addEventListener("click", f10);

// Task 11
// Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.

let s110 = document.querySelector(".s-110");
let out11 = document.querySelector(".out-11");

function f11() {
  if (s110.value === "6") {
    f11_6();
    // out11.innerHTML = "six";
  } else if (s110.value == "7") {
    out11.innerHTML = "seven";
  } else if (s110.value == "11") {
    out11.innerHTML = "eleven";
  } else if (s110.value == "9") {
    out11.innerHTML = "nine";
  }
}

function f11_6() {
  out11.innerHTML = "six";
}

// s110.addEventListener("onchange", f11); Почему такой способ вывода не работает???

document.querySelector(".s-110").onchange = f11;

// Task 12
// Дан input i-120. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.

let i120 = document.querySelector(".i-120");
let b12 = document.querySelector(".b-12");
let out12 = document.querySelector(".out-12");

function f12() {

  if (+i120.value >= 1) {
  out12.innerHTML = (typeof +i120.value);
    console.log(typeof +i120.value);
  } else if (i120.value == String(i120.value)) {
    console.log((typeof String(i120.value)));
    out12.innerHTML = (typeof String(i120.value));
  }
   else { out12.innerHTML = "false";
  }
}

 b12.addEventListener("click", f12);
 console.log(typeof +i120.value);
 console.log((typeof String(i120.value)));
 document.querySelector(".b-12").onclick = f12;

// Task 13
// Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input  в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?

let i130 = document.querySelector(".i-130");
let b13 = document.querySelector(".b-13");
let out13 = document.querySelector(".out-13");


function f13() {
  if (+i130.value >= 1) {
    out13.innerHTML = (typeof +i130.value);
    console.log(typeof +i130.value);
  } else if (+i130.value < 0) {
    out13.innerHTML = (typeof +i130.value);
    console.log(typeof +i130.value);
  } else {
    out13.innerHTML = "false";
  }
  // 2 Вариант:
  // if (i130.value >= 1) {
  //   out13.innerHTML = (typeof i130.value);
  //   console.log(typeof i130.value);
  // } else if (i130.value < 0) {
  //   out13.innerHTML = (typeof i130.value);
  //   console.log(typeof i130.value);
  //    } else {
  //   out13.innerHTML = "false";
  // }
  // все данные из инпутов предоставляются в типе данных "строка". Для приведения ее к цифровому значению применяем оператор "+".
}

out13.addEventListener("click", f13);
document.querySelector(".b-13").onclick = f13;

// Task 14
// Дан input i-141 и input-142, type=number.  Дан select s-143, который содержит четыре операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е.  14.

let i141 = document.querySelector(".i-141");
let i142 = document.querySelector(".i-142");
let s143 = document.querySelector(".s-143");
let b14 = document.querySelector(".b-14");
let out14 = document.querySelector(".out-14");

b14.addEventListener("click", f14);

function f14() {
 if (s143.value === "+") {
  out14.innerHTML = +i141.value + +i142.value;
 } else if (s143.value === "-") {
  out14.innerHTML = +i141.value - +i142.value;
 } else if (s143.value === "*") {
  out14.innerHTML = +i141.value * +i142.value;
 } else if (s143.value === "/") {
  out14.innerHTML = +i141.value / +i142.value;
 } else if (s143.value === "*") {
  f14_1();
  // out14.innerHTML = "false";
//  } else if ( +i141.value === 0 || +i142.value === 0) {
//   f14_2();
//  }
}
}
 function f14_1() {
  if (+i141.value === 0 || +i142.value === 0) {
      out14.innerHTML = "false";
  }
  //  else if (+i142.value === 0) {
  //   out14.innerHTML = "true";
  // }
  }
//  function f14_2() {
//   if (s143.value === "/") {
//     out14.textContent = 0;
//   }
//  }


// let i141 = document.querySelector(".i-141");
// let i142 = document.querySelector(".i-142");
// let s143 = document.querySelector(".s-143");
// let out14 = document.querySelector(".out-14");
// let b14 = document.querySelector(".b-14");

// b14.addEventListener("click", f14);

// function f14() {
//   if (s143.value === "+") {
//     out14.textContent = +i141.value + +i142.value;
//   } else if (s143.value === "-") {
//     out14.textContent = +i141.value - +i142.value;
//   } else if (s143.value === "*") {
//     out14.textContent = +i141.value * +i142.value;
//   } else if (s143.value === "/") {
//     out14.textContent = +i141.value / +i142.value;
//   }
// }

// ******* добавитиь умножение на 0

// Task  15
// Дан select s-151 и s-152, каждый из которых содержит 1 и 0.  Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.

let s151 = document.querySelector(".s-151");
let s152 = document.querySelector(".s-152");
let s153 = document.querySelector(".s-153");
let b15 = document.querySelector(".b-15");
let out15 = document.querySelector(".out-15");

function f15() {
  if(s153.value === "&&") {
out15.innerHTML = +s151.value +s153.value +s152.value;
// Почему в строке выше +s153.value отрабатывает верно, когда в if он задан без "+", просто if(s153.value === "&&") ???
  } else if (s153.value === "||" )  {
    out15.textContent = +s151.value +s153.value +s152.value;
  }
}

b15.addEventListener("click", f15);
// document.querySelector(".b-15").onclick = f15;

// task 16 ****
// Сверстать магазин самообслуживания "Новичок"

let s16 = document.querySelector(".s-16");
let s161 = document.querySelector(".s-16_1");
let s162 = document.querySelector(".s-16_2");
let s163 = document.querySelector(".s-16_3");

let i16_1 = document.querySelector(".i-16_1");

let btn16 = document.querySelector(".btn-16");
let btn16_1 = document.querySelector(".btn-16_1");

let out16 = document.querySelector(".out-16");
let out16_1 = document.querySelector(".out-16_1");

function f16() {
  if (s16.value === "tree") {
    f16_1();
  } else {
    f16_2();
  }
}

function f16_1() {
  if (s161.value == "Доска") {
    out16.textContent = 5;
  } else if (s161.value == "Брус") {
    out16.textContent = 10;
  }  else if (s161.value == "Паркет") {
    out16.textContent = 15;
  }  else if (s161.value == "Ламинат") {
    out16.textContent = 20;
  }
}

function f16_1_1() {
  if(+s163.value == "5") {
    out16_1.textContent = +s163.value * +i16_1.value;
  } else if (+s163.value == "10") {
    out16_1.textContent = +s163.value * +i16_1.value;
  } else if (+s163.value == "15") {
    out16_1.textContent = +s163.value * +i16_1.value;
  } else if (+s163.value == "20") {
    out16_1.textContent = +s163.value * +i16_1.value;
  } else if (+s163.value == "4") {
    out16_1.textContent = +s163.value * +i16_1.value;
  } else if (+s163.value == "8") {
    out16_1.textContent = +s163.value * +i16_1.value;
  } else if (+s163.value == "14") {
    out16_1.textContent = +s163.value * +i16_1.value;
  } else if (+s163.value == "18") {
    out16_1.textContent = +s163.value * +i16_1.value;
  }
}

function f16_2() {
  if (s162.value == "Труба") {
    out16.textContent = 4;
  } else if (s162.value == "Фасонные детали") {
    out16.textContent = 8;
  }  else if (s162.value == "Керамическая посуда") {
    out16.textContent = 14;
  }  else if (s162.value == "Оборудование") {
    out16.textContent = 18;
  }
}

btn16.addEventListener("click", f16);
btn16_1.addEventListener("click", f16_1_1);