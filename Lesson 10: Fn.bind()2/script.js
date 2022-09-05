const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
    const fumos = ['cirno']
    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')

    return{
        add(fumo){
            fumos.push(fumo)
        },
        delete(index){
            fumos.splice(index,1)
        },
        render(){
            const html = fumos.map((fumo, index) => `
                <li>
                ${fumo}
                <span class="delete" data-index="${index}">&times</span>
                </li>
            `)
            .join('')
            root.innerHTML = html
        },
        handleDelete(e){
            const deleteBtn = e.target.closest('.delete')
            if(deleteBtn){
                const index = deleteBtn.dataset.index
                this.delete(index)
                this.render()
            }
        },
        init(){
            submit.onclick = () =>{
                const fumo = input.value
                this.add(fumo)
                this.render()
                input.value = null
                input.focus()
            }
            root.onclick = this.handleDelete.bind(this)
            this.render()
        }
    }
})()

app.init()