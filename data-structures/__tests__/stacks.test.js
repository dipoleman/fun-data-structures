const createStack = require("../stack")

describe("create Stack LIFO",()=>{
    test('check createStack returns an object',()=>{
        expect(typeof createStack()).toBe('object')
    })
    test('Check a new instance of createStack with no items has property.quantity = 0 ',()=>{
        const testStack = createStack()
        expect(testStack.quantity).toBe(0)
    })
    test('Check a new instance of createStack with no items has property.storage = {} ',()=>{
        const testStack = createStack()
        expect(testStack.storage).toEqual({})
    })
    test('Check a new instance of createStack with no items has property.maxSize which is equal to default value if no argument is passed in',()=>{
        const testStack = createStack()
        expect(testStack.maxSize).toBe(10)
    })
    test('Check a new instance of createStack with no items has property.maxSize which is equal to passed in  value',()=>{
        const testStack = createStack(5)
        expect(testStack.maxSize).toBe(5)
    })
    describe('methods',()=>{
        test('a push method should add an item to the testStack with a key equal to the current item number',()=>{
            const testStack = createStack()
            testStack.push('apple');
            expect(testStack.storage).toEqual({ 1 : 'apple' }) 
            testStack.push('orange');
            expect(testStack.storage).toEqual({ 1 : 'apple' , 2 : 'orange'}) 
        })
        test('a pop method should remove the last item added to the storage, if no more items then should return undefined',()=>{
            const testStack = createStack();
            testStack.push('apple');
            testStack.push('orange');
            testStack.push('banana'); 
            expect(testStack.pop()).toBe('banana')
            expect(testStack.numOfItems).toBe(2)
            expect(testStack.pop()).toBe('orange')
            expect(testStack.numOfItems).toBe(1)
            expect(testStack.pop()).toBe('apple')
            expect(testStack.numOfItems).toBe(0)
            expect(testStack.pop()).toBe(undefined)
        })
        test('a isEmpty method should return true if numItems = 0 and false otherwise',()=>{
            const testStack = createStack();
            testStack.push('apple');
            testStack.push('orange');
            testStack.push('banana'); 
            testStack.pop()
            expect(testStack.isEmpty()).toBe(false)
            testStack.pop()
            expect(testStack.isEmpty()).toBe(false)
            testStack.pop()
            expect(testStack.isEmpty()).toBe(true)
        })
        test('when the number of items reached the maxSize value the method return true, else false',()=>{
            const testStack = createStack(3);
            testStack.push('apple');
            testStack.push('orange');
            expect(testStack.isFull()).toBe(false)
            testStack.push('banana'); 
            expect(testStack.isFull()).toBe(true)
        })
        test('A peek method that will show the item at the top of the stack storage',()=>{
            const testStack = createStack();
            testStack.push('apple');
            testStack.push('orange');
            testStack.push('banana');
            testStack.push('kiwi');
            testStack.push('pear');
            console.log(testStack.storage)
            expect(testStack.peek()).toBe('pear')
        })
    })

})