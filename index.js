/*
 * Programming Quiz: Converting Temperatures
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `celsius`
 * 2. You code should have a variable `fahrenheit`
 * 3. Your variable `celsius` should equal `12`
 * 4. Your variable `fahrenheit` should produce the output equal `53.6`
 * 5. Your variable `fahrenheit` declaration should use the `celsius` variable
 * 6. Your variable `fahrenheit` should have the correct formula
 * 7. Your code should log the `fahrenheit` variable
 * 8. Your code should not be empty
 */

let celsius = 12;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit)

/*
 * Programming Quiz: Favorite Food
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should print a string with your favorite food
 * 2. Your code should have the first character capitalized
 * 3. Your code must have a `console.log()` function
 * 4. Your code should not be empty
 */

let favoriteFood = "akara";

console.log(favoriteFood.replace('a', 'A'))

/*
 * Programming Quiz: All Tied Up
 
 * Quiz Requirements
 * 1. Your code should have a variable joke
 * 2. Your joke should use only one string
 * 3. Your joke should match the expected format
*/
 
var joke = "What is full of holes but still holds water? \nA sponge!";

console.log(joke)

/*
 * Programming Quiz: Yosa Buson
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `haiku`
 * 2. Your code should use string concatenation
 * 3. Your poem should match the famous haiku poem
 */

let haiku = "Blowing from the west" + "\nFallen leaves gather" + "\nIn the east.";

console.log(haiku)

/*
 * Programming Quiz: What's my Name?
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `fullName`
 * 2. Your variable `fullName` should be declared using the `var` keyword
 * 3. Your variable `fullName` should be a non-empty string
 */

var fullName = "Egbekun Pere-ebi Victoria";

console.log(fullName)

/*
 * Programming Quiz: Out to Dinner
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`, and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword
 * 3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value equal to 15% of the `bill`
 * 5. Your variabe `total` should be a number, having a value equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */

var result = 10.25 + 3.99 + 7.15;
var bill = result;
var tip = bill * 0.15;
var total = (bill + tip);

console.log(total.toFixed(2))

/*
 * Programming Quiz: MadLibs
 * 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */

let adjective1 = "amazing";
let adjective2 = "fun";
let adjective3 = "entertaining";
 
let madLib = `The Intro to JavaScript course is ${adjective1} . James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`

console.log(madLib)

/*
 * Programming Quiz: One Awesome Message (2-12)
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 *
 * 2. Create `awesomeMessage` variable, and set it to a message using string concatenation and the variables above. The `awesomeMessage` variable should use `firstName`, `interest`, and `hobby`
 *
 * 3. The `awesomeMessage` variable should have the correct format, as shown below:
 * "Hi, my name is _____. I love ______. In my spare time, I like to ______."
 *
 * 4. Print `awesomeMessage` variable to the console using log() method
 */
 
 /*
 * Example:
 * - Assuming, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the following message:
 * 
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */

 let firstName = "Pere-ebi";
 let interest = "coding";
 let hobby = "read";

 let awesomeMessage = `Hi, my name is ${firstName}. I love ${interest} . In my spare time, I like to ${hobby}.`;

 console.log(awesomeMessage)







 /*
 * Programming Quiz: Even or Odd 
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `number`, and include an `if...else` statement
 * 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
 * 3. Your code should produce the expected output - "even" or "odd" using console.log() method
 */

let number = 68;

if (number % 2 === 0){
    console.log("even")
}else{
    console.log("odd")
}


/*
 * Programming Quiz: Musical Groups
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
 * 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
 */

let musicians = 10;

if (musicians < 0){
    console.log("not a group")
} else if(musicians == 1){
    console.log("solo")
} else if(musicians == 2){
    console.log("duet")
} else if(musicians == 3){
    console.log("trio")
} else if(musicians == 4){
    console.log("quartet")
} else{
    console.log("this is a large group")
}


/*
 * Programming Quiz: Murder Mystery 
 */
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */


var room = "dining room";
var suspect = "Mr. Parkes";
var weapon = "knife";
var solved = true;

if (solved == true){
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`)
}else{
    console.log(" ")
}


/*
 * Programming Quiz - Checking Your Balance
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */

let balance = 540.6332;
let checkBalance = true;
let isActive = true;
 
if(checkBalance === false && isActive === true){
    console.log("Thank you. Have a nice day!")
}else if(isActive, checkBalance === true && balance > 0){
    console.log("Your balance is $" +balance.toFixed(2) + ".")
}else if(isActive === false && checkBalance === true){
    console.log("Your account is no longer active.")
}else if(isActive === true && balance === 0){
    console.log("Your account is empty.")
}else{
    console.log("Your balance is negative. Please contact bank")
}


/*
 * Programming Quiz: Ice Cream
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 * 
 * 6. Your code should not be empty
 */

let flavor = "chocolate";
let vessel = "cone";
var toppings = "sprinkles";

if(flavor === "chocolate" || flavor === "vanilla",
    vessel === "cone" || vessel === "bowl",
    toppings === "sprinkles" || toppings === "peanuts"){
    console.log(`I\'d like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings} .`)
}


/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */
 
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */


var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

if(shirtWidth <= 18 && shirtLength <= 28 && shirtSleeve <= 8.13){
    console.log("S")
}else if(shirtWidth <= 20 && shirtLength <= 29 && shirtSleeve <= 8.38){
    console.log("M")
}else if(shirtWidth <= 22 && shirtLength <= 30 && shirtSleeve <= 8.63){
    console.log("L")
}else if(shirtWidth <= 24 && shirtLength <= 31 && shirtSleeve <= 8.88){
    console.log("XL")
}else if(shirtWidth <= 26 && shirtLength <= 33 && shirtSleeve <= 9.63){
    console.log("2XL")
}else if(shirtWidth <= 28 && shirtLength <= 34 && shirtSleeve <= 10.13){
    console.log("3XL")
}else{
    console.log("NA")
}


/*
 * Programming Quiz - Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */
 
/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


let eatsPlants = true;
let eatsAnimals = false;

let consumer = eatsPlants === true ? "herbivore" : (eatsAnimals === true ? "carnivore" : "omnivore");
console.log(consumer)


/*
 * Programming Quiz: Back to School 
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */
 
/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


let education = "no high school diploma";
let salary;

switch(education){
   case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associates degree":
        salary = 41496;
        break;
    case "a Bachelors degree":
        salary = 59124;
        break;
    case "a Masters degree":
        salary = 69732;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary = 84366;
}

console.log(`In 2015, a person with ${education} earned an average of $${salary.toLocaleString("en-US")}/year.`)
