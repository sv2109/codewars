/**
 * Pyramid Slide Down
 * https://www.codewars.com/kata/551f23362ff852e2ab000037
 * 
 * Your task is to write a function longestSlideDown (in ruby/crystal/julia: longest_slide_down) that takes a pyramid representation as argument and returns its' largest 'slide down'. 
 * 
 */
const longestSlideDown = pyramid => pyramid.reduceRight((prevRow, row) => row.map((number, i) => number + Math.max(prevRow[i], prevRow[i+1])))[0]

/**
 * Snail
 * https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
 * 
 * Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
 * 
 */
const snail = function(array) {
  return array.reduce(([result, left, center], row, index) => {

    if (index === 0) {
      result = [...result, ...row]
    } else if (index < array.length - 1) {
      result = [...result, ...row.slice(-1)]
      left = [...left, ...row.slice(0, 1)]
      center = [...center, row.slice(1, -1)]
    } else {
      result = [...result, ...row.reverse()]
      left.length && (result = [...result, ...left.reverse()])
      center.length && (result = [...result, ...snail(center)])
    }

    return [result, left, center]
  }, [[],[],[]])[0]
}

/**
 * Sum of Intervals
 * https://www.codewars.com/kata/52b7ed099cdc285c300001cd
 * 
 * Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
 * 
 */
function sumIntervals(intervals){
  return intervals.sort((a,b) => a[0] - b[0]).reduce((intervals, row) => {

    const index = intervals.findIndex(interval => interval[1] > row[0])

    if (index !== -1) {
      intervals[index] = [Math.min(intervals[index][0], row[0]), Math.max(intervals[index][1], row[1])]
    } else {
      intervals.push(row)
    }

    return intervals    

  }, []).reduce((total, interval) => {
    total += (interval[1] - interval[0])
    return total
  }, 0)
}

/**
 * Permutations
 * https://www.codewars.com/kata/5254ca2719453dcc0b00027d
 * 
 * In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.
 * 
 */
function permutations(string) {
  return [...string].reduce((acc, letter, index, arr) => {
    !acc.includes(string) && acc.push(string)
    permutations(arr.filter((_,i) => index != i).join(''))
      .map(word => !acc.includes(letter + word) && acc.push(letter + word) )
    return acc
  }, [])  
}

/**
 * Large Factorials
 * https://www.codewars.com/kata/557f6437bf8dcdd135000010
 * 
 * Your mission is simple: write a function that takes an integer n and returns the value of n!
 * 
 */
 function factorial(n){
  let f = 1;
  while (n > 0) {
    f = multiply(f, n--)
  }
  return f
}

function multiply(a, b) {
  
  a = numberToArr(a).reverse()
  b = numberToArr(b).reverse()

  const [n1, n2] = b.length > a.length ? [b, a] : [a, b]
  
  return n1.reduce((result, number1, index) => {
    let row = n2.reduce(([result, memory], number2, index) => {
      let total = number1 * number2 + memory
      memory = total / 10 | 0
      memory && (total -= memory * 10)
      result.push(total)
      index == (n2.length-1) && memory && result.push(memory) 
      return [result, memory]
    }, [[],0])[0].reverse()

    row = [...row, ...Array(index).fill(0)]

    result.push(row)
    return result
  }, [])
  .reduce((result, arr) => {
    result = add(result, arr)
    return result
  }, []).join('')
}

function add(a, b) {
  
  a.reverse()
  b.reverse()

  const [n1, n2] = b.length > a.length ? [b, a] : [a, b]
  
  return n1.reduce(([result, memory], number, index) => {
    let sum = number + (n2[index] || 0) + memory
    memory = sum / 10 | 0
    memory && (sum -= memory * 10)
    result.push(sum)
    index == (n1.length-1) && memory && result.push(memory) 
    return [result, memory]
  }, [[],0])[0].reverse()
}

function numberToArr(n) {
  return [...('' + n)].map(Number)
}

