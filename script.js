const toggleContainer = document.getElementById('toggle-container')
const toggle = document.getElementById('toggle')

const btns = document.querySelectorAll('.btn')

let toggleStatus = false

const container = document.querySelector('.container');
const calculator = document.querySelector('.calculator');

toggleContainer.addEventListener('click', () => {
    if(toggleStatus){
        toggleStatus = false;
        toggle.style.left = 50+'%'
        //light mode
        // document.body.style.backgroundColor = 'rgb(63, 96, 126);'
        container.style.backgroundColor = 'white'
        btns.forEach((btn) => {
            btn.style.backgroundColor = 'white'
            btn.style.color = '#202d44'
            btn.style.boxShadow = '0.5px 0.5px 2px #000'
        })
        
        
    }else{
        toggle.style.left = 0+'%'
        toggleStatus = true;
        
        //dark mode
        // document.body.style.backgroundColor = 'aliceblue'
        container.style.backgroundColor = '#161f2f'
        btns.forEach((btn) => {
            btn.style.backgroundColor = '#202d44'
            btn.style.color = 'white'
        })  

    }
})

const sum = document.querySelector('.sum')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.textContent)

        sum.textContent = parseInt(sum.textContent + btn.textContent)
        if(btn.textContent=='Equal'){
            console.log( parseInt(sum.textContent))
        }else if(btn.textContent=='Clear'){
            sum.textContent = ''
        }else{

        }
    })
});