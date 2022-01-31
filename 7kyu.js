/**
 * Credit Card Mask
 * https://www.codewars.com/kata/5412509bd436bd33920011bc
 * 
 * Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
 * 
 */
 function maskify(str) {
  let masket = ''
  for (var i = 0; i < str.length; i++) {
    masket += (str.length - i) > 4 ? '#' : str.charAt(i)
  }
  return masket
}

/**
 * Double Every Other
 * https://www.codewars.com/kata/5809c661f15835266900010a
 * 
 * Write a function that doubles every second integer in a list, starting from the left.
 * 
 */
const doubleEveryOther = a => a.map((n, i) => i%2 ? n*2 : n)

/**
 * Printer Errors
 * https://www.codewars.com/kata/56541980fa08ab47a0000040
 * 
 * You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
 * 
 */
const printerError = s => (s.match(/[^a-m]/g) || []).length + "/" + s.length;

/**
 * Double Trouble
 * https://www.codewars.com/kata/57f7796697d62fc93d0001b8
 * 
 * Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.
 * 
 */
function trouble(arr, sum){
  for (let i=1; i<arr.length; i++) {
    if (arr[i] + arr[i-1] === sum) {
      arr.splice(i, 1)
      i--
    }
  }
  return arr
}

/**
 * JavaScript Array Filter
 * https://www.codewars.com/kata/514a6336889283a3d2000001
 * 
 *  Use the filter functionality to complete the function given
 * 
 */
const getEvenNumbers = a => a.filter(n => !(n%2))

/**
 * Stanton measure
 * https://www.codewars.com/kata/59a1cdde9f922b83ee00003b
 * 
 * Write a function which takes an integer array and returns its Stanton measure.
 * 
 */
const stantonMeasure = arr => arr.filter( n => n === arr.filter(n => n === 1).length).length

/**
 * Driving School Series #2
 * https://www.codewars.com/kata/589b1c15081bcbfe6700017a
 * 
 * For a given lesson time in minutes (min) , write a function cost to calculate how much the lesson costs. Input is always > 0.
 * 
 */
 function cost (mins) { 
  if (mins <= 65) {
    return 30
  }
  mins -= 60
  return 30 + (mins / 30 | 0) * 10 + (mins % 30 > 5 ? 10 : 0)
} 

/**
 * Incrementer
 * https://www.codewars.com/kata/590e03aef55cab099a0002e8
 * 
 * Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).
 * 
 */
const incrementer = nums => nums.map((n, i) => (n+i+1) % 10)

/**
 * A Gift Well Spent
 * https://www.codewars.com/kata/54554846126a002d5b000854
 * 
 * You will get the value of the gift card c and a finite list of item values. You should return a pair of indices that correspond to values that add up to c:
 * 
 */
var buy = function(x, arr){
  return arr.reduce((acc, n, i) => {
    if (acc) return acc
    const second = arr.indexOf(x-n, i + 1)
    if (second != -1) {
      acc = [i, second]
    }
    return acc
  }, null)
};

/**
 * Coding 3min : Remove screws I
 * https://www.codewars.com/kata/5710a50d336aed828100055a
 * 
 * Your task is to return the total time taken to remove all the screws, in seconds.
 * 
 */
function sc(screws){
  return screws.split('').reduce((acc, s, i) => {
    acc +=2
    if (i > 0 && s != screws[i-1]) acc +=5
    return acc
  }, -1)
}

/**
 * Rearrange Number to Get its Maximum
 * https://www.codewars.com/kata/563700da1ac8be8f1e0000dc
 * 
 * Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.
 * 
 */
const maxRedigit = n => (n < 100 || n > 999) ? null : +(n + '').split('').sort().reverse().join('')

/**
 * Digitize
 * https://www.codewars.com/kata/5417423f9e2e6c2f040002ae
 * 
 * Given a non-negative integer, return an array / a list of the individual digits in order.
 * 
 */
const digitize = n => [...`${n}`].map(Number)

/**
 * Product Array (Array Series #5)
 * https://www.codewars.com/kata/5a905c2157c562994900009d
 * 
 * Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
 * 
 */
const productArray = numbers => (mult = numbers.reduce((acc, n) => acc * n)) && (numbers.map(n => mult / n))

/**
 * Monotone travel
 * https://www.codewars.com/kata/54466996990c921f90000d61
 * 
 * Your job is to check whether for any x all successors are greater or equal to x.
 * 
 */
const isMonotone = arr => arr.length ? arr.every((n, i) => !i || n >= arr[i-1]) : true

