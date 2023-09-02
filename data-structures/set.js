function createSet(maxSize = 10){

    const newSet = {}

    newSet.maxSize = maxSize
    newSet.members = {}
    newSet.cardinality = 0
    newSet.add = add
    newSet.pop = pop
    newSet.union = union

    return newSet
}

function add(item){
    if (!this.members.hasOwnProperty(item)){
        this.members[item] = item
        this.cardinality++  
    }
}
function pop(item){
    if (this.members.hasOwnProperty(item)){
        delete this.members[item]
        this.cardinality--
    }
}
function union(obj){  
    const elements = {...obj.members}
    for (let key in elements){
       if (!this.members.hasOwnProperty(key)){
        this.add(key)
        this.cardinality++
       }
    }
}

module.exports = createSet