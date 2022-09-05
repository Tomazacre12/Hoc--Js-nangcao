const teacher ={
    firstName: 'Minh',
    lastName: 'Thu'
}
function greet(greeting, message){
    return `${greeting} ${this.firstName} ${this.lastName} ${message}`   
}
let result = greet.apply(teacher, ['Em chào cô','Cô dạy môn gì thế ạ'])
console.log(result)

// Example 2

const char1 = {
    firstName:'Quang',
    lastName:'Vux',
    isOnline: false,
    goOnline(){
        this.isOnline = true
        console.log(`${this.firstName} ${this.lastName} is Online`)
    },
    goOffline(){
        this.isOffline = false
        console.log(`${this.firstName} ${this.lastName} is Offline`)
    }
}
const char2 = {
    firstName:'Hieu',
    lastName:'Vux',
    isOnline: true
}
console.log('User:', char1.isOnline)
char1.goOnline()
console.log('User:', char1.isOnline)

console.log('----------------------')

console.log('User:', char2.isOnline)
char1.goOnline.call(char2)
console.log('User:', char2.isOnline)

// Example 3

function Animal(name, weight){
    this.name = name
    this.weight = weight
}
function Parrot(){
    Animal.apply(this, arguments)
    this.speak = function(){
        console.log('dmm')
    }
}
const conVet = new Parrot('Vet', 300)
console.log(conVet)
