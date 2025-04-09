/*  

     STRING
          EXAMPLE


Converting Temperatures

Celsius-to-Fahrenheit formula:

     F = C * 1.8 + 32

     
     let celsius = 10
     let fahrenheit = celsius * 1.8 + 32
     console.log(fahrenheit)
     
     */

/*    
     IF ELSE STATEMENT
          EXAMPLE


let cash = 100
let price = 40
let difference = cash - price

if (cash > price) {
     console.log("you paid extra - here's your change of $" + [difference])
}

else if (cash === price) {
     console.log("you paid the exact amount have a nice day!")
}

else {
     console.log('not enough money you still owe $' + [difference * -1] )
}

*/

/* 

     COMPARISON OPERATORS 
          EXAMPLES


     #1

let cash = 50
let price = 40
let isStoreOpen = false

if(cash >= price && isStoreOpen === true) {
console.log('print receipt')
}

     #2

let cash = 50
let price = 40
let isStoreOpen = false

if(cash >= price || isStoreOpen === true) {
     console.log('print receipt')
}
     #3

let hot = true

hot ? console.log('weather is hot outside') : console.log('weather is cold')

let subsribed = true
let loggedIn = true

subscribed && loggedIn ? 'show the video' : 'hide the video'
console.log(str);

     #4

let cash = 50
let price = 40
let isStoreOpen = true

// 'give receipt' : 'do not give receipt'

let str = cash >=  price && isStoreOpen ? 'give receipt' : 'do not give receipt'
console.log(str);

*/

/*
     LOOPS
          EXAMPLE

     COUNTING TO 100
instead of doing typing out console.log(1) through console.log(100) taking up 100 lines of code

// DRY = Don't repeat yourself
// let count = 1;


//        while loop

// while (count <= 100) {
     //      console.log(count)
     //      count = count + 1
     // }
     
     //        for loop
     
     // for (let i = 0; i < 100; i++) {
          // console.log(i + 1);
          // }
*/

/** Write a for-loop that loops through 1 to 20
 * If the number is divisible by 3, print "Frontend"
 * If the number is divisible by 5, print "Simplified"
 * If the number is divisible by 3 and 5, print "Frontend Simplified"
 * If the number is *not* divisible by either 3 or 5, print the number
 * 
 * @example
 * 1 -> 1
 * 2 -> 2
 * 3 -> "Frontend"
 * 4 -> 4
 * 5 -> "Simplified"
 * ...
 * 15 -> "Frontend Simplified"
 * ...
 * 20 -> "Simplified"
for (let i = 1; i <= 20; i++) {
     if (i % 3 === 0 && i % 5 === 0) {
          console.log(`${i} -> Frontend Simplified`)
     }

     else if (i % 3 === 0) {
          console.log(`${i} -> Frontend`)
     }

     else if (i % 5 === 0) {
          console.log(`${i} -> Simplified`)
     }

     else {
          console.log(`${i} -> ${i}`)
     }
}
*/

/** Print out every character from the string: 
 * "Frontend Simplified"
 * 
 * @example
 * 'F'
 * 'r'
 * 'o'
 * ...
 * 'e'
 * 'd'
*/

// const str = 'Frontend Simplified'
// for (let i = 0; i < str.length; i++) {
     // console.log(str[i])
// }


/*

     Functions 
          Ex 1

//  Function definition
function welcomePersonToFES(firstName, lastName) {
     console.log(`Welcome to Frontend Simplified, ${firstName} ${lastName}`)
}

//  Call the function
welcomePersonToFES('Rob', 'Sakal')
welcomePersonToFES('John' , 'Doe')

*/

// function sumOfTwoNumbers(num1, num2) {
//      return num1 + num2
// }

// console.log(sumOfTwoNumbers(10, 10));


//        Question 1
/** Create a function that converts Celsius to Fahrenheit
 * 
 * Celsius to Fahrenheit formula:
 *    F = C * 1.8 + 32
 * 
 * 
 * @example
 * convertCelsiusToFahrenheit(0) -> 32
 * convertCelsiusToFahrenheit(10) -> 50
 * convertCelsiusToFahrenheit(30) -> 86
 */

// function convertCelsiusToFahrenheit(celsius) {
//      return celsius * 1.8 + 32
     
// } 
// console.log(convertCelsiusToFahrenheit(30))

// /* Same function but with const and arrow function as well */

// const convertCelsiusToFahrenheit = (celsius) => {
//      return celsius * 1.8 + 32
// }

// console.log(convertCelsiusToFahrenheit(0))

/* 

          Arrays


*/

//let arr = [20, 30, 40, 50, 100]

// // First element of array:
// console.log(arr[0])

// // Last element of array:
// console.log(arr[arr.length - 1])

// // How to add an element to an array:
// arr.push(200)

// console.log(arr);

//  How to use arr.filter
// let newArr = arr.filter((element) => {
//      console.log(element)
//           return true;
// })

// console.log(newArr)

//   How to filter out elements for example how to filter out elements less than 50
//let newArr = arr.filter((element) => {
  //   console.log(element)
  //   if (element < 50) {
  //        return true;
  //   }
//})

//console.log(newArr)

//   How to make the code on one line if we only have one variable inside the argument remove the ()
// if you only have one line of code in the {} and it is a return statement remove the {} and remove the return statement

//let newArr = arr.filter(element => element < 50)

//console.log(newArr)


/**
 * Filter out all the 'FAIL' elements in an array
 * 
 * @examples
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

let grades = ['A+', 'A', 'FAIL']
//let grades = ['FAIL', 'FAIL', 'B']
//let grades = ['FAIL']

//   LONG WAY

//let newArr = grades.filter((element) => {
  //   console.log(element)
  // if (element !== 'FAIL')
  //   return true;
//})

//console.log(newArr)

//   SHORT WAY

let newArr = grades.filter(element => element !== 'FAIL'
)

console.log(newArr)