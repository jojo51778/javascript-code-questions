class Queue {
  constructor() {
    this.pushStack = new Stack()
    this.popStack = new Stack()
  }
  
  enqueue(element) { 
    this.pushStack.push(element)  
  }
  
  move() {
     while (this.pushStack.size() > 0) {
       this.popStack.push(this.pushStack.pop())
     }
  }
  
  peek() { 
    if (this.popStack.size() > 0) {
      return this.popStack.peek()
    }
    
    if (this.pushStack.size() > 0) {
      this.move()
      return this.popStack.peek()
    }
    
    return undefined
  }
  
  size() { 
    return this.pushStack.size() + this.popStack.size()
  }
  
  dequeue() {
    if (this.popStack.size() > 0) {
      return this.popStack.pop()
    }
    
    if (this.pushStack.size() > 0) {
      this.move()
      return this.popStack.pop()
    }
    
    return undefined
  }
}