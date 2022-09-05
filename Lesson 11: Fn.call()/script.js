const teacher = {
    firstName: 'Eirin',
    lastName: 'Yagokoro'
}
const student = {
    firstName: 'Reisen',
    lastName: 'Udongein',
    showFullname(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
student.showFullname.call(teacher)

'use strict'
this.firstName = "Mokou"
this.lastName = "Fujiwara"
function showFullname2(){
    console.log(`${this.firstName} ${this.lastName}`)
}
showFullname2.call(this)

function Animal(name, weight){
    this.name = name
    this.weight = weight
}
function Monke(name, weight, legs){
    Animal.call(this, name, weight)
    this.legs = legs
}
const hieuVux = new Monke('Hiếu Vux', 1, 4)

console.log(hieuVux)

function logger(){
    Array.prototype.forEach.call(arguments, item => {
        console.log(item)
    })
}
logger(1,2,3,4,5,6)