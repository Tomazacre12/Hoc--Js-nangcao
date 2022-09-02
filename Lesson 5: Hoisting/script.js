console.log(age)
// console.log(name): uncaught (name is not defined)
var age = 17

{
    // console.log(age): uncaught (cannot access 'age')
    let age = 17
}

let num = 1
{
    {
        {   let num = 2
            {
                console.log(num)

                // let num = 3: uncaught (cannot access)
            }
        }
    }
}

const counter1 = makeCounter()
 
console.log(counter1())

function makeCounter(){
    let counter = 0
    return increase
    function increase(){
        return ++counter
    }
}