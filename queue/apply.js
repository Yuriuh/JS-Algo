const Queue = require('./queue')
const Deque = require('./deque')

function hotPotato(elementList, numOfTimes) {
  const queue = new Queue()
  const elimitatedList = []

  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < numOfTimes; i++) {
      queue.enqueue(queue.dequeue())
    }
    elimitatedList.push(queue.dequeue())
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  }
}

// const names = ['A', 'B', 'C', 'D', 'E']
// const result = hotPotato(names, 7)

// result.eliminated.forEach(name => {
//   console.log(`${name}在击鼓传花游戏中被淘汰。`)
// })

// console.log(`胜利者: ${result.winner}`)

function palindromeChecker(str) {
  if (str == null || (str !== null && str.length === 0)) {
    return false
  }
  const deque = new Deque()
  const lowerString = str.toLocaleLowerCase().split(' ').join('')
  let isEqual = true
  let firstChar
  let lastChar

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i))
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront()
    lastChar = deque.removeBack()
    if (firstChar !== lastChar) {
      isEqual = false
    }
  }

  return isEqual
}

console.log('sl o lb', palindromeChecker('sl o lb'))