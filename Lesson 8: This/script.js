const iPhone7 = {
    name: 'Iphone7',
    color: 'pink',
    weight: 300,

    takePhoto(){
        console.log(this)
    },
    objChild:{
        name: 'Child Obj',
        methodChild(){
            console.log(this)
        }
    }
}
console.log(iPhone7.takePhoto())
iPhone7.objChild.methodChild()

function myFunc(){
    console.log(this)
}
myFunc()

function Car(name,color){
    this.name = name
    this.color = color
}

Car.prototype.run = function(){
    function test(){
        console.log(this)
    }
    test()
}
const porsche = new Car('Prosche', 'Yellow')
console.log(porsche)

console.log(porsche.run())