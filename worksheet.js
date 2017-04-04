//  Part I
// ----------------------------
// write your own forEach() function.
// your function should take an array and a callback as input.
// it should run the callback on each element in the array.
// ----------------------------
// on Arbiter: https://goo.gl/XyBf80
// I guess we were supposed to make it with a for loop, but I
// thought we were expected to use higher order functions.
function forEach (inputArray, callbackFunction) {
  var outputArray = inputArray.map(callbackFunction)
  return outputArray
}

//  Part II
// ----------------------------
// write your own map() function.
// your function should take an array and a callback as input.
// it should return a new array, where every element in the
// original has been transformed by the callback. .
// ----------------------------
// work in Arbiter: https://goo.gl/GZKdKc
function map (inputArray, callbackFunction) {
  var outputArray = []
  for (var i = 0; i - inputArray.length; i++) {
    outputArray[i] = callbackFunction(inputArray[i])
  }
  return outputArray
}
  //  Part III
  // ----------------------------
  // write your own filter() function.
  // your function should take an array and a callback as input.
  // it should return a new array, where elements have been
  // kept or excluded according to the callback.
  // ----------------------------
// Arbiter testwork: https://goo.gl/e9Nx8z
function filter (inputArray, callbackFunction) {
  var outputArray = []
  for (var i = 0; i < inputArray.length; i++) {
    outputArray += callbackFunction(inputArray[i])
  }
  return outputArray
}

//  Part IV
// ----------------------------
// write your own reduce() function.

// this one's new. it should take an array, a callback and
// a starting value as input.

// calling .reduce() should combine all the elements of the
// array into a single value. the starting value tells what to
// start with.

// the callback should take as input a "running total" and
// an array element, in that order. it should return an update
// to the running total.

// look at the tests for clarification.
// ----------------------------


//  HARD MODE
// ----------------------------
// using the built-in array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"},
    {name:"Justin", alma_mater:"Univ of Florida"}
]

// ----------------------------
// Using array.map(), array.filter(), and array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname

// store the resulting mapped, filtered, and sorted array
// under the variable name `newCustomers`. i'll look
// for that name in my tests.
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]
