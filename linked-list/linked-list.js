const { defaultEquals } = require('../utils/utils')
const { Node } = require('../models/linked-list-models')

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }
  push(element) {
    const node = new Node(element)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      // 当 current.next === null || current.next === undefined
      // 说明到达链表的尾部了
      while (current.next != null) {
        current = current.next
      }
      // 将其 next 赋为新元素，建立链接
      current.next = node
    }
    this.count += 1
  }
  removeAt(index) {
    // 检查越界值
    if (index >= 0 && index < this.count) {
      let current = this.head
      // 移除第一项
      if (index === 0) {
        this.head = current.next
      } else {
        let previous
        for (let i = 0; i < index; i++) {
          previous = current
          current = current.next
        }
        // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
        previous.next = current.next
      }
      this.count -= 1
      return current.element
    }
    return undefined
  }
  removeAt2(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head
      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count -= 1
      return current.element
    }
    return undefined
  }
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element)
      if (index === 0) {
        const current = this.head
        node.next = current
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1)
        const current = previous.next
        node.next = current
        previous.next = node
      }
      this.count += 1
      return true
    }
    return false
  }
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i
      }
      current = current.next
    }
    return -1
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let current = this.head
      for (let i = 0; i < index && current != null; i++) {
        current = current.next
      }
      return current
    }
    return undefined
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.size() === 0
  }
  getHead() {
    return this.head
  }
  toString() {
    if (this.head == null) {
      return ''
    }
    let objString = `${this.head.element}`
    let current = this.head.next
    for (let i = 0; i < this.size() && current != null; i++) {
      objString = `${objString}, ${current.element}`
      current = current.next
    }
    return objString
  }
}

const list = new LinkedList()
list.push(111)
list.push(222)
list.push(333)
list.insert(555, 1)