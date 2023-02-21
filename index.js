const screen = document.querySelector('#screen')
const ac = document.querySelector('#ac')
const del = document.querySelector('#del')
const div = document.querySelector('#div')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const multiply = document.querySelector('#multiply')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const plus = document.querySelector('#plus')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const minus = document.querySelector('#minus')
const point = document.querySelector('#point')
const zero = document.querySelector('#zero')
const equals = document.querySelector('#equals')

const buttons = [one, two, three, four, five, six, seven, eight, nine, zero, ac, del, div, multiply, plus, minus, equals]

one.addEventListener('click', ()=> screen.append(1))
two.addEventListener('click', ()=> screen.append(2))
three.addEventListener('click', ()=> screen.append(3))
four.addEventListener('click', ()=> screen.append(4))
five.addEventListener('click', ()=> screen.append(5))
six.addEventListener('click', ()=> screen.append(6))
seven.addEventListener('click', ()=> screen.append(7))
eight.addEventListener('click', ()=> screen.append(8))
nine.addEventListener('click', ()=> screen.append(9))
zero.addEventListener('click', ()=> screen.append(0))
ac.addEventListener('click', ()=> screen.innerText = null)
del.addEventListener('click', ()=> {
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1)
})
div.addEventListener('click', ()=> screen.append('/'))
multiply.addEventListener('click', ()=> screen.append('*'))
plus.addEventListener('click', ()=> screen.append('+'))
minus.addEventListener('click', ()=> screen.append('-'))
equals.addEventListener('click', calculate)
point.addEventListener('click', ()=> screen.append('.'))


function calculate(){
    const result = eval(screen.innerText)
    screen.innerText = result
}

