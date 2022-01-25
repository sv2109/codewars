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