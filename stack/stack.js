{
  // 用数组实现 Stack 类
  class Stack {
    constructor() {
      this.items = []
    }
    push(element) {
      this.items.push(element)
    }
    pop() {
      return this.items.pop()
    }
    peek() {
      return this.items[this.items.length - 1]
    }
    size() {
      return this.items.length
    }
    isEmpty() {
      return this.items.length === 0
    }
    clear() {
      this.items = []
    }
  }
}

// 用对象实现 Stack 类
class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }
  push(element) {
    this.items[this.count] = element
    this.count += 1
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count -= 1
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.count === 0
  }
  clear() {
    this.items = {}
    this.count = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    return objString
  }
}

module.exports = Stack