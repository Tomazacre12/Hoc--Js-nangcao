// Closure
function closure(){
    let x = 0
    function closuremini(){
        return ++x
    }
    return closuremini
}
const x1 = closure()
console.log(x1())
console.log(x1())
console.log(x1())

const x2 = closure()
console.log(x2())
console.log(x2())
console.log(x2())

function createLogger (namespace){
    function logger(msg){
        console.log(`[${namespace}] ${msg}`)
    }
    return logger
}

const log1 = createLogger('Error')

log1('Lỗi lòi c')
log1('Lỗi hệ thống')

const log2 = createLogger('Warning')

log2('Cảnh báo')
log2('Random Warning Bullshit')

function createStorage(key){
    const store = JSON.parse(localStorage.getItem(key))??{}
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storerage = {
        get (key){
            return store[key]
        },
        set (key, value){
            store[key] = value
            save()
        },
        remove (key){
            delete store[key]
            save()
        },
    }
    return storerage
}
const profileSetting = createStorage('profile_setting')
console.log(profileSetting.get('FullName'))
console.log(profileSetting.get('Age'))
profileSetting.set('FullName', 'Hieu Vux')
profileSetting.set('Age', '3000')
profileSetting.set('Adress', 'Hanoi')

const profileSetting2 = createStorage('profile_setting_2')
console.log(profileSetting2.get('FullName'))
console.log(profileSetting2.get('Age'))
console.log(profileSetting2.get('Adress'))
profileSetting2.set('FullName', 'Quang Vux')
profileSetting2.set('Age', '1')
profileSetting2.set('Adress', 'Yenbai')