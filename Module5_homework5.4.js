// Задание 3

//  Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".


let str = "Hello";

console.log(`${str[4]}${str[3]}${str[2]}${str[1]}${str[0]}`) */

// ИЛИ

let str = "Hello";

console.log(str.split('').reverse().join(''))

// Задание 4

// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.


let random = Math.ceil(Math.random() * 100)

console.log(random) 