function createQueue(maxSize = 5){
    
    const newQueue = {}
    newQueue.maxSize = maxSize
    newQueue.front = 0
    newQueue.back = 0
    newQueue.storage = {}
    newQueue.enQueue = enQueue 
    newQueue.deQueue = deQueue
    newQueue.getQuantity = getQuantity
    newQueue.isEmpty = isEmpty
    newQueue.isFull = isFull
    newQueue.peek = peek

    return newQueue
}

function enQueue(item){
    if (this.back < this.maxSize){
        this.back++
        return this.storage[this.back] = item
    }
}

function deQueue(){
    if (this.back > 0){
        // const frontItem = this.storage(this.front)
        for (let i = 0; i<this.back; i++){
            this.storage[i]=this.storage[i+1]
        }
        delete this.storage[this.back]
        delete this.storage[this.front]
        this.back--
    }
}

function getQuantity(){
    return this.back
}

function isEmpty(){
    return this.back === 0
}

function isFull(){
    return this.back === this.maxSize
}

function peek(){
    return this.storage[1]
}

module.exports = createQueue