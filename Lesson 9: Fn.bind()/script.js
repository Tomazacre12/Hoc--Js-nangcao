this.firstName = 'Hieu'
this.lastName = 'Vux'

const char = {
    firstName: 'Quang',
    lastName: 'Vux',
    getFullName(){
        return console.log(`${this.firstName} ${this.lastName}`)
    }
}
// Case 1
char.getFullName()

// Case 2
const getCharName = char.getFullName
getCharName()

// bind
const char2 = {
    firstName: 'Kanako',
    lastName: 'Yasaka'
}
const char3 = {
    firstName: 'Suwako',
    lastName: 'Moriya'
}
const getCharName2 = char.getFullName.bind(char3)
getCharName2()

const button = document.querySelector('button')
button.onclick = char.getFullName.bind(char2)