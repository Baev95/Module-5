// Задание 6

// Дан массив. 
// Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
// Проверить, все ли элементы в массиве одинаковые.

let arr = [ 2, 2, 2, 2, ];
let res = true;

  for ( let i = 0; i < arr.length; i++ ){
      for ( let y = 0; y < arr.length; y++){
        if (arr[i] != arr[y]) {
          res = false;
        } 
      }
  }
            
  console.log(res); 

 //  ИЛИ Вариант 2

let res = true;
  
  const arr = [ 3, 3, 3, 3, 3, 3, 3, ];
arr.forEach( function (item, index,){
for (let i = 1; i < arr.length ; i++){
	  if(item === arr[i]){
    	res = true
    } else {
    	res = false
      break
    }
	  }
})

console.log(res) 

// ИЛИ вариант 3 ( с другой логикой, 
// где если хотя бы одна цифра схожа с другой то будет true )

let arr = [1, 2, 3, 4, 6, 6];
let res = false;
for (let i = 0; i < arr.length; i++){
for (let y = i + 1; y < arr.length; y++){
if (arr[i] === arr[y]){
	res = true
} 
}
}

console.log(res); 

// Задание 7 

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.


const arr = [ 1, 1, 4, 5, 0, 2,];
let evenNum = 0;
let oddNum = 0;
let zero = 0;
arr.forEach(function(item, index,){
	if ( item % 2 == 0 && item != 0) {
  evenNum++
  } else if (item % 2 != 0 && item != 0){
  oddNum++
  } else if (item == 0){
  zero++
  }
  
})

console.log(evenNum)
console.log(oddNum)
console.log(zero) */