// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; 
console.log("Question 1:"); 
console.log(ages);
// 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] – ages[0] is not allowed!
function subtractAges(x, y) {
    return (ages[x] - ages[y]); //created a function to subtract so I could dynamically change the two parameters and accomplish the same result 
} 
console.log("Question 1a:")
console.log (subtractAges([ages.length-1], [0])); //Used ages.length-1 to ensure my code will always use the last number in the array even when new ones are pushed
// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(50);
console.log("Question 1b:");  
console.log (subtractAges([ages.length-1], [0]));  //since I made a dynamic function I can easily call it again after pushing the new number
// 1c. Use a loop to iterate through the array and calculate the average age. 
  let total = 0                          //declare total to use in our return in the for loop
    for (let i=0; i<ages.length; i++) { //loop through all the ages
        total += ages[i];               //add all the ages that were called to the total variable
    }
    console.log("Question 1c:"); 
  console.log (`Average age = ${Math.round(total / ages.length)}`); //log the total of ages and divide it by the amount of elements in the array. 

// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; 
console.log("Question 2:"); 
console.log(names); 

// 2a. Use a loop to iterate through the array and calculate the average number of letters per name.   
let lengths = names.map(function(element) { //Used map to create a function to calculate the length of each individual name
    return element.length; 
}); 
   
console.log("Question 2a:"); 
console.log(lengths); 

let sum = lengths.reduce(function(accumulator, currentValue) { //Used the reduce method to find the sum of all the names lengths 
    return accumulator + currentValue; 
}); 
console.log(Math.round(sum / names.length)); //Logged the sum divided by the length of the names array to find the average
    
// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let concatNames = '';                 //declare a string variable to hold the new concatenated string
for (let i=0; i<names.length; i++) { //loop through names
    concatNames += names[i] + ' ';  //add all names to eachother with a space after each one
    } console.log("Question 2b:"); 
    console.log(concatNames); //log the new string variable 
    

// 3.  How do you access the last element of any array?
console.log("Question 3:");
console.log("The syntax you would use is (array.length-1)"); 

// 4.  How do you access the first element of any array? 
console.log("Question 4:"); 
console.log("You can acces the first element of an array with the syntax: array[0].");  

// 5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array  

let nameLengths = names.map(function(element) { //Used map just like in question 2b
    return element.length; 
}); 
console.log("Question 5:"); 
console.log(nameLengths); 

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let arraySum = 0; //declare new variable for the sum that starts at 0 
for (let i=0; i<nameLengths.length; i++) { //use for loop to loop through all namelengths in the array
    arraySum += nameLengths[i];              //add our new variable with all the looped namelengths to get the sum
}
console.log("Question 6:"); 
console.log(arraySum);                   //log our newly declared sum variable

// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function concatWord(word, n) {  //create function that will take two parameters, my string, and the number of times it will concatanate with itself
    return word.repeat(n) //use repeat method to easily repeat my chosen argument a certain number of times. 
} console.log("Question 7:");  
console.log(concatWord("Hello", 3)); //log my new function with my two arguments 

// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
const fullName = (firstName, lastName) => `${firstName} ${lastName}`; //use template literals to easily concatenate the parameters with a space

console.log("Question 8:"); 
console.log(fullName("John", "Smith")); 


// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers = [5, 8, 9, 10, 75];
function sumOfArrays(i) {      //create function with only 1 parameter
    let sum = 0;
    let array = i;              // Defining array within the function so I can pass any future arrays into it 
    for (let i=0; i<array.length; i++) { //loop through the away to get the sum of numbers
        sum += array[i] } 
        if (sum > 100) {      //create if / else statement to return true if the sum is greater than 100
            return true;
         } else {
            return false; 
         }    
} console.log("Question 9:");  
console.log(sumOfArrays(numbers)); //log the function with the numbers array being the one argument 


// 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageArray(i) {
    let total = 0;
    let array = i; // Defining array within the function so I can pass any future arrays into it 
      for (let i=0; i<array.length; i++) {
          total += array[i];
      }
    return Math.round(total / array.length); //return total divided by the array length to calculate average
} console.log("Question 10:"); 
console.log(averageArray(numbers)); 
// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let array1 = [5,6,7,9,10,40]; //declare two new number arrays 
let array2 = [7,9,10,20,4]; 
function greaterArray(x,y) {            //Create a function that will take two parameters that I can pass the arrays into

    if (averageArray(x) > averageArray(y)) { //Since I already took the time to write an average array function that was dynamic, I am able to use the function in this new function
    return true; 
}else {
    return false; 
}
} console.log("Question 11:"); 
console.log (averageArray(array1)); //not necessary but good to check my code is actually comparing accurately 
console.log (averageArray(array2)); //not necessary but good to check my code is actually comparing accurately 
console.log(greaterArray(array1, array2)); 

// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
const willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside == true && moneyInPocket > 10.50; //use arrow function to create a clean one line function 

console.log("Question 12:"); 
console.log(willBuyDrink(true, 11)); // log the function with the two arguments

// 13.  Create a function of your own that solves a problem.
// This function will track your current HP in Dungeons and Dragons. 
// If your HP hits 0 it will display a message that your character is knocked. 
function dndHP (currentHP, damage) { //declare two parameters for the function 
    currentHP = currentHP - damage; //subtract one parameter from the other
    if (currentHP <= 0) {           //if else statement to return current HP or if you have fallen below 0
        return "You are Knocked";
    } else {
        return "Current HP = " + currentHP;
    }
} console.log("Question 13:"); 
console.log (dndHP(150, 50)); //log the function with the two arguments 
