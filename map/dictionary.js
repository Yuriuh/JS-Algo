const { defaultToString } = require('../utils/utils')

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }
    return false
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null
  }
  get(key) {
    if (this.hasKey(key)) {
      return this.table[this.toStrFn(key)]
    }
    return undefined
  }
  clear() {
    this.table = {}
  }
  size() {
    return this.keyValues().length
  }
  isEmpty() {
    return this.size() === 0
  }
  keys() {
    return this.keyValues().map(valuePair => valuePair.key)
  }
  values() {
    return this.keyValues().map(valuePair => valuePair.value)
  }
  keyValues() {
    return Object.values(this.table)
  }
  forEach(callback) {
    const valuePairs = this.keyValues()
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callback(valuePairs[i].key, valuePairs[i].value)
      if (result === false) {
        break
      }
    }
  }
  toString() {
    if (this.isEmpty()) {
      return ''
    }
    const valuePairs = this.keyValues()
    let objString = `${valuePairs[0].toString()} `
    for (let i = 0; i < valuePairs.length; i++) {
      objString = `${objString}, ${valuePairs[i].toString()} `
    }
    return objString
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }
  toString() {
    return `[#${this.key}: ${this.value}]`
  }
}

module.exports = {
  Dictionary,
  ValuePair
}

var dic = new Dictionary()
dic.set('Allen', 'allen@qq.com')
dic.set('Tom', 'tom@qq.com')
dic.set('Ed', 'ed@qq.com')
// console.log('dic', dic)
// console.log('dic haskey', dic.hasKey('Allen'))
// console.log('dic size', dic.size())
// console.log('dic keyValues', dic.keyValues())
// console.log('dic keys', dic.keys())
// console.log('dic values', dic.values())
// console.log('dic get', dic.get('Allen'))
// console.log('dic remove', dic.remove('Allen'))
// console.log('dic after remove', dic)
// dic.forEach((k, v) => {
//   console.log('forEach: ', `key: ${k}, value: ${v}`)
// })
