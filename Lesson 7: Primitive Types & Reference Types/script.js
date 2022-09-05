// value types
let a = 1
let b = a
a = 2
console.log(b)

function sum(f, g){
    f = 0,
    g = 0,
   console.log(f, g)
}
const h = 1
const i = 2
sum(h, i)
console.log(h, i)

// reference types

let c = {
    name: 'Heracules' //#001
}
let d = c //#001
c.name = 'Hades' //#001
console.log(d)

let e = {
    name: 'Vũ Trí Ba Tá Trợ', //#001
}
e = {
    name: 'Tuyền Qua Minh Nhân', //#002
    age: '17'
}

const student = {
    name: 'Flandre Scarlet',
    profile: {
        first: 'Flandre',
        last: 'Scarlet',
        age: '405'
    }
}
const studentProfile = student.profile
student.profile.age = '400'
console.log(student.profile.age)

function god(obj){
    obj.name = 'Beelzebub'
    console.log(obj)
}
const j = {
    name: 'Poseidon'
}
god(j)
console.log(j)

const k = {
    num: 1
}
const l = {
    num: 1
}
console.log(k === l)

