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
    return Object.values(this.items)
    // 等价于
    // const values = []
    // for (const key in this.items) {
    //   const value = this.items[key]
    //   if (this.items.hasOwnProperty(key)) {
    //     values.push(value)
    //   }
    // }
    // return values
  }
  union(otherSet) {
    const unionSet = new Set()
    this.values().forEach(value => unionSet.add(value))
    otherSet.values().forEach(value => unionSet.add(value))
    return unionSet
  }
  intersection(otherSet) {
    // const intersectionSet = new Set()
    // const values = this.values()
    // for (let i = 0; i < values.length; i++) {
    //   if (otherSet.has(values[i])) {
    //     intersectionSet.add(values[i])
    //   }
    // }
    // return intersectionSet

    // 改进版
    const intersectionSet = new Set()
    const values = this.values()
    const otherValues = otherSet.values()
    let biggerSet = values
    let smallerSet = otherValues
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues
      smallerSet = values
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value)
      }
    })
    return intersectionSet
  }
  difference(otherSet) {
    const differenceSet = new Set()
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    })
    return differenceSet
  }
  isSubSetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false
    }
    return this.values().every(v => otherSet.has(v))
  }
}

// const set = new Set()
// set.add(1)
// set.add(2)
// set.add(3)
// console.log('set', set)
// console.log('values', set.values())
// console.log('has', set.has(1))
// console.log('size', set.size())
// set.delete(1)
// console.log('values', set.values())

// Test Union Set
// const setA = new Set()
// setA.add(1)
// setA.add(2)
// setA.add(3)

// const setB = new Set()
// setB.add(3)
// setB.add(4)
// setB.add(5)
// setB.add(6)

// const unionAB = setA.union(setB)
// console.log('unionAB', unionAB.values())

// Test intersection
// const setA = new Set()
// setA.add(1)
// setA.add(2)
// setA.add(3)

// const setB = new Set()
// setB.add(2)
// setB.add(3)
// setB.add(4)

// const intersectionAB = setA.intersection(setB)
// console.log(intersectionAB.values())

// const differenceAB = setA.difference(setB)
// console.log('differenceAB', differenceAB.values())

const setA = new Set()
setA.add(1)
setA.add(2)

const setB = new Set()
setB.add(1)
setB.add(2)
setB.add(3)

const setC = new Set()
setC.add(2)
setC.add(3)
setC.add(4)

console.log('setA isSubsetOf setB', setA.isSubSetOf(setB))
console.log('setA isSubsetOf setC', setA.isSubSetOf(setC))
