function createStack(maxSize = 10) {
  
  const newStack = {}
  newStack.quantity = 0 
  newStack.storage = {}
  newStack.maxSize = maxSize
  newStack.numOfItems = 0
  newStack.push = push
  newStack.pop = pop
  newStack.isEmpty = isEmpty
  newStack.isFull = isFull
  newStack.peek = peek

  return newStack
}

function push(item){
  this.numOfItems++
  return this.storage[this.numOfItems] = item
}

function pop(){
  if (this.numOfItems === 0){
    return 
  }
  const poppedItem = this.storage[this.numOfItems]
  delete this.storage[this.numOfItems]
  this.numOfItems--
  return poppedItem
}

function isEmpty(){
  return this.numOfItems === 0
}

function isFull(){
  return this.numOfItems === this.maxSize
}

function peek(){
  return this.storage[this.numOfItems]
}

module.exports = createStack;

