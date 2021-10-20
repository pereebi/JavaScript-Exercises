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
