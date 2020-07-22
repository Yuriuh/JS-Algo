const stack = new Stack()

  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)

  console.log('stack.pop', stack.pop())
  console.log('stack.pop', stack.peek())
  console.log('isEmpty', stack.isEmpty())