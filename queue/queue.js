class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }
  enqueue(element) {
    this.items[this.count] = element
    this.count += 1
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount += 1
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }
  size() {
    return this.count - this.lowestCount
  }
  isEmpty() {
    return this.size() === 0
  }
  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

// const queue = new Queue()

// queue.enqueue('xixi')
// queue.enqueue('haha')
// console.log('queue toString', queue.toString())

// queue.enqueue('hehe')
// console.log(queue.toString())
// console.log(queue.size())
// console.log(queue.isEmpty())
// queue.dequeue()
// queue.dequeue()
// console.log(queue.toString())

module.exports = Queue