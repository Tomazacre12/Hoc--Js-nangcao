"use strict"

var fullname = 'Hieu Vux'
function testFunc(){
    var age = 18
}
testFunc()
console.log(fullname)
// console.log(age): strict

const student = Object.freeze({
    name: 'Hieu Vux'
})
// student.name = 'Quang Vux': strict
console.log(student)

function sum (a, b){
    return a + b
}
console.log(sum(6, 9))

// const private = 1 :strict
// console.log(private) :strict