// Задание 5

// Дан произвольный массив. Необходимо вывести количество элементов массива, 
// затем перебрать его и вывести в консоль каждый элемент массива.

let aray = [ 3, 3, 4, 5, "efe", ];

console.log(aray.length)
let i = 0;
while ( i < aray.length) {
  console.log( aray[i] )
  i++
} 

// ИЛИ

aray.forEach(function (ar) {
  console.log(ar)
}) 

