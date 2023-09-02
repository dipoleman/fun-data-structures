const createQueue = require('../queue')

describe('The Queue Factory Function',()=>{
    test('take an argument representing the max number of items in the queue',()=>{
        const testQueue = createQueue(5);
        expect(testQueue.maxSize).toBe(5)
    })
    test('has property of front and back',()=>{
        const testQueue = createQueue(5);
        expect(testQueue.front).toBe(0)
        expect(testQueue.back).toBe(0)
    })
    test('has a storage property that is an empty object when first initialized',()=>{
        const testQueue = createQueue(5);
        expect(typeof testQueue.storage).toBe('object')
        expect(testQueue.storage).toEqual({})
    })
    describe('methods',()=>{
        test('An enQueue method that adds items to the back of the queue. Items can only be added if the queue isn"t full',()=>{
            const testQueue = createQueue(5);
            testQueue.enQueue('apple')
            testQueue.enQueue('banana')
            expect(testQueue.storage).toEqual({1:'apple',2:'banana'})
            expect(testQueue.back).toBe(2)
        })
        test('a deQueue method that removes items from the front of the queue',()=>{
            const testQueue = createQueue(5);
            testQueue.enQueue('apple')
            testQueue.enQueue('banana')
            testQueue.enQueue('orange')
            testQueue.enQueue('pear')
            console.log(testQueue.storage)
            testQueue.deQueue()
            console.log(testQueue.storage)
            expect(testQueue.back).toBe(3)
            expect(testQueue.storage).toEqual({1:'banana',2:'orange',3:'pear'})
            testQueue.deQueue()
            testQueue.deQueue()
            expect(testQueue.back).toBe(1)
            expect(testQueue.storage).toEqual({1:'pear'})
            testQueue.deQueue()
            expect(testQueue.back).toBe(0)
            expect(testQueue.storage).toEqual({})
            testQueue.deQueue()
            expect(testQueue.back).toBe(0)
            expect(testQueue.storage).toEqual({})
        })
        test('a getQuantity value that returns the number of items in the queue, test also that if we have more items than space it behaves as expected',()=>{
            const testQueue = createQueue(5);
            testQueue.enQueue('apple')
            testQueue.enQueue('banana')
            testQueue.enQueue('orange')
            testQueue.enQueue('pear')
            expect(testQueue.getQuantity()).toBe(4)
            const testQueue2 = createQueue(2);
            testQueue2.enQueue('apple')
            testQueue2.enQueue('banana')
            testQueue2.enQueue('orange')
            testQueue2.enQueue('pear')
            expect(testQueue2.getQuantity()).toBe(2)

        })
        test('isEmpty should return true if storage is empty and false otherwise',()=>{
            const testQueue = createQueue();
            testQueue.enQueue('apple')
            testQueue.enQueue('banana')
            testQueue.deQueue()
            expect(testQueue.isEmpty()).toBe(false)
            testQueue.deQueue()
            expect(testQueue.isEmpty()).toBe(true)

        })
        test('isFull should return true if storage is full and false otherwise',()=>{
            const testQueue = createQueue(3);
            testQueue.enQueue('apple')
            testQueue.enQueue('banana')
            expect(testQueue.isFull()).toBe(false)
            testQueue.enQueue('orange')
            expect(testQueue.isFull()).toBe(true)
        })
        test('a peek method that get the first item in the queue and returns it without removing it from the queue',()=>{
            const testQueue = createQueue(3);
            testQueue.enQueue('apple')
            testQueue.enQueue('banana')
            expect(testQueue.peek()).toBe('apple')
            testQueue.enQueue('orange')
            expect(testQueue.peek()).toBe('apple')
            const testQueue2 = createQueue(3);
            expect(testQueue2.peek()).toBe(undefined)

        })
    })
})