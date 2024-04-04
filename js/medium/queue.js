
class Queue {
  constructor () {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(element) { 
    for (let i = 0; i < this.stack1.size(); i++) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(element);
    for (let i = 0; i < this.stack2.size(); i++) {
      this.stack1.push(this.stack2.pop());
    }
  }
  peek() { 
    return this.stack1.peek();
  }
  size() { 
    return this.stack1.size()
  }
  dequeue() {
    return this.stack1.pop();
  }
}
// 5
// stack1=[1,2,3,4]
// stack2=[4,3,2,1]
// stack1=[5]
// stack1=[5,4,3,2,1]