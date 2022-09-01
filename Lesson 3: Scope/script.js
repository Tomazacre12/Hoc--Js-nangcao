// Global
var globalMessage = 'Global'
function global(){
    console.log(globalMessage)
}
global()

// Code block
{
    var codeBlockMessage = 'Codeblock'
    console.log(codeBlockMessage)
}
// Local scope
function local(){
    function localmini(){
        console.log('local')
    }
    localmini()
}
local()

// khi gọi mỗi hàm mới có một phạm vi mới được tạo
function logger(first, last){
    console.log(first, last)
}
logger('Reimu','Hakurei')
logger('Marisa','Kirisame')
logger('Sanae','Kochiya')

// Phạm vi bé hơn có thể lấy được biến từ phạm vi ngoài, phạm vi lớn hơn không thể lấy được biến từ phạm vi trong
function big(){
    const age = 1
    function smol(){
        console.log(age) // Phạm vi bé hơn có thể lấy được biến từ phạm vi ngoài
    }
    smol()
}
big()
// console.log(age): uncaught (phạm vi lớn hơn không thể lấy được biến từ phạm vi trong)

// Luôn lấy ở biến gần nhất
const num = 10
{
    { const num = 11
        { const num = 12 
            { 
                console.log(num)
            }
        }
    }
}   