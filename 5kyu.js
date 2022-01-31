/**
 * Pete, the baker
 * https://www.codewars.com/kata/525c65e51bf619685c000059
 * 
 * Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
 * 
 */
function cakes(need, has) {
  let min = 0
  return Object.keys(need).every(item => {
    if (!has[item] || has[item] < need[item]) return false
    const countItem = Math.floor(has[item] / need[item])
    if (!min || countItem < min) min = countItem
    return true
  }) ? min : 0
}

/**
 * Human Readable Time
 * https://www.codewars.com/kata/52685f7382004e774f0001f7
 * 
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
 * 
 */
function humanReadable (seconds) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds - h * 3600) / 60)
  const s = seconds - h * 3600 - m * 60

  return [h,m,s].map(i => i < 10 ? '0' + i : i).join(':')
}

/**
 * Did I Finish my Sudoku?
 * https://www.codewars.com/kata/53db96041f1a7d32dc0004d2
 * 
 * Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'
 * 
 */
function doneOrNot(board){
  return board.reduce(([lines, columns, squares], line, index) => {
    lines.push(line)
    line.map((n, i) => {
      if (!columns[i]) columns[i] = []
      columns[i].push(n)
      const squaresIndex = ((index+3)/3|0)*10+(i+3)/3|0
      if (!squares[squaresIndex]) squares[squaresIndex] = []
      squares[squaresIndex].push(n)
    })

    return [lines, columns, squares]
  }, [[], [], []])
    .reduce((flat, arr) => [...flat, ...arr.filter(arr => arr)])
    .every(arr => arr.sort().every((n, i) => n == i+1)) ? "Finished!" : "Try again!"
}

/**
 * Integers: Recreation One
 * https://www.codewars.com/kata/55aa075506463dac6600010d
 * 
 * Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
 * 
 */
function listSquared(a, b) {
  const result = []
  for (let i=a; i<=b; i++) {
    let sum = 0
    for (let n=1; n<=i; n++) {
      !(i%n) && (sum += n*n)
    }  
    Math.sqrt(sum) % 1 === 0 && result.push([i, sum])
  }    
  return result
}

/**
 * Number of trailing zeros of N!
 * https://www.codewars.com/kata/52f787eb172a8b4ae1000a34
 * 
 * Write a program that will calculate the number of trailing zeros in a factorial of a given number.
 * Be careful 1000! has 2568 digits...
 */
function zeros (n) {
  let result = 0
 
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) result += Math.floor(n / i)
  
  return result
}
