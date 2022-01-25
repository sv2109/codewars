/**
 * Multiples of 3 or 5
 * https://www.codewars.com/kata/514b92a657cdc65150000006
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * 
 */
 function solution(number){
  let sum = 0

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  } 
  
  return sum 
}

/**
 * Who likes it?
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362
 * 
 * You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
 * 
 */
 function likes(names) {
  switch(names.length){
    case 0:
      return `no one likes this`;
    case 1: 
      return `${names[0]} likes this`;
    case 2: 
      return `${names[0]} and ${names[1]} like this`;
    case 3: 
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default: 
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

/**
 * Bit Counting
 * https://www.codewars.com/kata/526571aae218b8ee490006f4
 * 
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
 * 
 */
 const countBits = function(n) {
  return n.toString(2).replace(/0/g, '').length
}

/**
 * Replace With Alphabet Position
 * https://www.codewars.com/kata/546f922b54af40e1e90001da
 * 
 * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 * 
 */
 function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  return text
    .toLowerCase()
    .split('')
    .map(letter => 
      alphabet.findIndex(l => l === letter) + 1)
    .filter(n => n > 0)
    .join(' ')
}

/**
 * Counting Duplicates
 * https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
 * 
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 * 
 */
 function duplicateCount(text){
  text = text.toLowerCase()
  return text
    .split("")
    .reduce((acc, l, i) => {
      !acc.includes(l) && text.includes(l, i + 1) && acc.push(l)
      return acc
    },[])
    .length  
}

/**
 * Consecutive strings
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e
 * 
 * You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
 * 
 */
 function longestConsec(strarr, k) {  
  return strarr.reduce((max, str, i) => {
    i++
    
    if (i < k) return max
    
    const current = strarr.slice(i-k,i).join("")
    
    if (current.length > max.length) max = current
    
    return max
    
  }, "")

}

/**
 * Playing with digits
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e
 * 
 * we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n...
 * 
 */
function digPow(n, p) {  
  const k = n.toString().split('')
    .reduce((sum, digit, i) => sum += Math.pow(digit, p + i), 0) 
    / n
    
  return Number.isInteger(k) ? k : -1 
}

/**
 * Build Tower
 * https://www.codewars.com/kata/576757b1df89ecf5bd00073b
 * 
 * Build Tower by the following given argument: number of floors (integer and always greater than 0).
 * 
 */
const  towerBuilder = n => Array(n).fill('').map((s, i) => ' ' . repeat(n - 1 - i) + '*' . repeat(i * 2 + 1) + ' ' . repeat(n - 1 - i)) 

/**
 * Array.diff
 * https://www.codewars.com/kata/523f5d21c841566fde000009
 * 
 * Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
 * 
 */
const arrayDiff = (a, b) => a.filter(item => !b.includes(item)) 

/**
 * Sum of Digits / Digital Root
 * https://www.codewars.com/kata/541c8630095125aba6000c00
 * 
 * Digital root is the recursive sum of all the digits in a number.
 * 
 */
function digital_root(n) {
  const total = `${n}`.split('').reduce((sum, d) => +d + sum, 0)
  return total < 10 ? total : digital_root(total)
}

/**
 * Your order, please
 * https://www.codewars.com/kata/55c45be3b2079eccff00010f
 * 
 * Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
 * 
 */
function order(words){
  return words.split(" ").reduce((acc, word) => {
    acc[word.match(/\d/g)-1] = word
    return acc
  },[]).join(" ")
}

/**
 * Simple Encryption #1 - Alternating Split
 * https://www.codewars.com/kata/57814d79a56c88e3e0000786
 * 
 * Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
 * 
 */
function encrypt(text, n) {
  if (n <= 0 || !text) return text
  const encrypted = text.split('').reduce((acc, str, i) => {
    const index = 1 - i % 2
    acc[index] = !acc[index] ? str : acc[index] + str
    return acc
  }, []).join('')

  return (n > 1) ? encrypt(encrypted, n - 1) : encrypted
}

function decrypt(text, n) {
  if (n <= 0 || !text) return text
  const evens = Math.floor(text.length / 2)
  const decrypted = text.split('').reduce((acc, str, i) => {
    if (acc.length < text.length) acc += text[i + evens]
    if (acc.length < text.length) acc += text[i]
    return acc
  }, '')

  return (n > 1) ? decrypt(decrypted, n - 1) : decrypted
}
