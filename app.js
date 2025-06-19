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

//let grades = ['A+', 'A', 'FAIL']
//let grades = ['FAIL', 'FAIL', 'B']
//let grades = ['FAIL']

//   LONG WAY

//let goodGrades = grades.filter((element) => {
//   console.log(element)
// if (element !== 'FAIL')
//   return true;
//})

//console.log(goodGrades)

//   SHORT WAY

//let goodGrades = grades.filter(element => element !== 'FAIL'
//)

//console.log(goodGrades)

/**
 * Filter out all the 'FAIL' elements in an array
 * without using the Array.filter method
 *
 * @examples
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

//let grades = ['A+', 'A', 'FAIL']
//let grades = ['FAIL', 'FAIL', 'B']
//let grades = ['FAIL']

//let grades = ['A+', 'A', 'FAIL']
//let grades = ['FAIL', 'FAIL', 'B']
//let grades = ['FAIL']

//   CREATE A NEW EMPTY ARRAY CALLED 'goodGrades'
// let goodGrades = []
// for (let i = 0; i < grades.length; ++i) {
// add the current element onto 'goodGrades' only if
// the current element is not equal to 'FAIL'
// if (grades[i] !== 'FAIL') {
// goodGrades.push(grades[i])
// }
//current element
//console.log(grades[i])
// }

//console log 'goodGrades'
// console.log(goodGrades)

/**
 *        ARRAY MAP
 *        changes you're elements into something
 *        else defined by the return function
 *
 */

// let arr = [1, 4, 9, 16]

// let newArray = arr.map((element) => {
//      console.log(element)
//      return 1;
// })

// console.log(newArray)

//  we can reduce into one line of code as previously done

// let newArray = arr.map(element => 'dog')

// console.log(newArray)

/**       EXERSISE
 *
 * Turn each element in an array of dollars into cents
 *
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */

// let dollars = [1, 5, 10, 3];
// let dollars = [0, 10, 20];

// let cents = dollars.map((element) => {
//      console.log(element)
//      return (element * 100)
// })

// console.log(cents)

// let cents = dollars.map(element => element * 100)

// console.log(cents)

/**       
 * map without using map method
 * 
 * Turn each element in an array of dollars into cents
 *using a for loop

 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */

// let dollars = [1, 5, 10, 3];
// let dollars = [0, 10, 20];

// let cents = [];
// for (let i = 0; i < dollars.length; ++i) {
// cents.push(dollars[i] * 100)
// }

// console.log(cents);

/**
 *             OBJECTS
 */

// let userFirstName = 'Robert'
// let userLastName = 'Sakal'
// let userDiscordId = 'rsakal'
// let userSubscriptionStatus = 'VIP'

// let user = {
//      username: 'Robert',
//      email: 'rob.sakal@gmail.com',
//      password: 'test123',
//      subscrptionStatus: 'VIP',
//      discordId: 'rsakal',
//      lessonsCompleted: [0, 1],
// }

// console.log(user.username [0]);

// console.log(user.subscrptionStatus);

// console.log( user.lessonsCompleted.map(elem => elem * 2));

/**
 *        Make it into an array in order to store many objects in one area
 *        add [] arround whole code then for the next object simply add a comma
 *        and another {} after the first object before the closing brackets
 */

/**let users = [
  {
    username: "Robert",
    email: "robert@frontendsimplified.com",
    password: "test123",
    subscrptionStatus: "VIP",
    discordId: "Robert#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "David",
    email: "david@frontendsimplified.com",
    password: "david123",
    subscrptionStatus: "VIP",
    discordId: "David Bragg#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "mitri@frontendsimplified.com",
    password: "mitri123",
    subscrptionStatus: "VIP",
    discordId: "Mitri#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("log the user in - the details are correct");
      } else {
        console.log("password is incorrect - try again");
      }
      return;
    }
  }
  console.log("could not find an email that matches");
}

login("thisdoesntexist@frontendsimplified.com", "wrong password");

/**
 * Create a register function that accepts:
 * -username
 * -email
 * -password
 * -subscriptionStatus
 * -discordId
 * -lessonCompleted
 *
 * Inside your register function:
 * 1. Create a user object
 * 2. Push this user object onto the 'users' array
 */

//function register(user){
/*  clean it up by getting rid of all the below code and set function as above

  name,
  email,
  password,
  subscrptionStatus,
  discordId,
  lessonsCompleted
) {
     let user = {
          username: name,
          email: email,
          password: password,
          subscrptionStatus: subscrptionStatus,
          discordId: discordId,
          lessonsCompleted: lessonsCompleted
     }
     users.push(user);
}*/
/*users.push(user);
}

register({ 
     username: "Zen",
     email: "zen@frontendsimplified.com",
     password: "zen123",
     subscrptionStatus: "VIP",
     discordId: "Zen#001",
     lessonsCompleted: [0, 1, 2]
}
);

console.log(users);
*/

/*
DOM practice
*/

//  First way of accessing an element
//console.log(document.querySelector('#title'));

// Second way of accessing an element
//console.log(document.getElementById('title'))
//Change HTML
//document.querySelector('.title').innerHTML = 'Frontend Simplified'

//Change CSS
//document.querySelector('.title').style.fontSize = '10px'

//function changeTitleToRed() {
//   document.querySelector('.title').style.color = 'red';
// console.log('clicked')
//}

//PROMISES
//fetch("https://jsonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email");
console.log(emailRef);

// 1. Then
//fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
//response.json().then((data) => {
//console.log(data);
//emailRef.innerHTML = data.email;
//});
//});
//cleaned up version removing a .then from inside a .then statement
//fetch("https://jsonplaceholder.typicode.com/users/1")
  //.then((response) => {
    //return response.json();
 // })
  //.then((data) => {
    //console.log(data);
   // emailRef.innerHTML = data.email
 // });


 // 2. Async/Await
//  async function main() {
//      const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//      const data = await response.json()
//      console.log(data)
//      emailRef.innerHTML = data.email
//  }

//  main();


// Creating a promise for example
const statusRef = document.querySelector('.status')

function getSubscriptionStatus() {
     return new Promise((resolve, reject) => {
          setTimeout(() => {

          }, 2000);
          resolve("VIP")
     })
}

// // 1. Then
// getSubscriptionStatus().then(response => console.log(response))

// // 2. Async/Await
// async function main() {
//      const status = (await getSubscriptionStatus())
//      console.log(await getSubscriptionStatus())
//      statusRef.innerHTML = status;
// }

// main();

/**
 * 1. Create a function called 'getVideo'
 * 2. Accept a parameter called 'subscriptionStatus'
 * 3. Return a new Promise inside of the function that:
 *        -if "VIP" resolve("show video")
 *        -if "Free" resolve("show trailer")
 *        -if otherwise reject("no video")
 * 4. console.log the result of getVideo(status) in main()
 */

async function main() {
          const status = (await getSubscriptionStatus())
          statusRef.innerHTML = status;
}

main();