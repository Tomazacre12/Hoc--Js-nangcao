;(function(){
    console.log('gọi luôn')
})()  //phải có dấu ;
;(() => {
    console.log('gọi luôn nhưng là arrow function')
})()
;((message) => {
 console.log('Message:'+ message)
})('hihi chào cậu')

let i = 0
;(function myFunc(){
    i++
    console.log(i)
    if( i < 10){
        myFunc()
    }
})()

const app =(function(){
    const cars = []
    console.log(cars)

    return{
        get(index){
            return cars[index]
        },
        add(car){
            cars.push(car)
        },
        edit(index, car){
            cars[index] = car
        },
        delete(index){
            cars.slice(index, 1)
        }
    }
    

})()