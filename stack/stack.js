{
  // 用数组实现 Stack 类
  class Stack {
    constructor() {
      this._items = []
    }
    push(element) {
      this._items.push(element)
    }
    pop() {
      return this._items.pop()
    }
    peek() {
      return this._items[this._items.length - 1]
    }
    size() {
      return this._items.length
    }
    isEmpty() {
      return this._items.length === 0
    }
    clear() {
      this._items = []
    }
  }
}

// 用对象实现 Stack 类
class Stack {
  constructor() {
    this._count = 0
    this._items = {}
  }
  push(element) {
    this._items[this._count] = element
    this._count += 1
  }
  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    this._count -= 1
    const result = this._items[this._count]
    delete this._items[this._count]
    return result
  }
  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this._items[this._count - 1]
  }
  size() {
    return this._count
  }
  isEmpty() {
    return this._count === 0
  }
  clear() {
    this._items = {}
    this._count = 0
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this._items[0]}`
    for (let i = 1; i < this._count; i++) {
      objString = `${objString}, ${this._items[i]}`
    }
    return objString
  }
}

module.exports = Stack