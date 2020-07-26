class Set {
  constructor() {
    this.items = {}
  }
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }
  clear() {
    this.items = {}
  }
  size() {
    return Object.keys(this.items).length
    // 等价于
    // let count = 0
    // for (const key in this.items) {
    //   if (this.items.hasOwnProperty(key)) {
    //     count += 1
    //   }
    // }
    // return count
  }
  values() {
    // return Object.values(this.items)
    // 等价于
    const values = []
    for (const key in this.items) {
      const value = this.items[key]
      if (this.items.hasOwnProperty(key)) {
        values.push(value)
      }
    }
    return values
  }
}

const set = new Set()
set.add(1)
set.add(2)
set.add(3)
console.log('set', set)
console.log('values', set.values())
console.log('has', set.has(1))
console.log('size', set.size())
set.delete(1)
console.log('values', set.values())
