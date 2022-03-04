const angka = document.getElementById('angka')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

plus.addEventListener('click', () =>{
    // angka.innerText++
    // angka.style.color = 'red'
})

minus.addEventListener('click', () =>{
    angka.innerText--
    // angka.style.color = 'blue'
})

const checkValueOfAngka = (nilai) => {
    if(nilai > 5){
        angka.style.color = 'yellow'
    }
}

// checkValueOfAngka(10)

angka.addEventListener('change', checkValueOfAngka(angka.innerText))

const changeColor = () => {
    angka.style.backgroundColor = 'red'
    angka.innerHTML = 'initext'
}

const changeValue = () => {
    angka.style.backgroundColor = 'blue'
}