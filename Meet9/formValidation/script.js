const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const errorUsername = document.getElementById('err-username')

function validate(){
    if(username.value.length < 3){
        errorUsername.style.display = 'block'
    } else errorUsername.style.display = 'none'
}

const validateAgain = function(){
    if(phone.value.length < 8){
        phone.style.backgroundColor = 'red'
    }
}

const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const validateEmail = () => {
    if(regexEmail.test(email.value)){
        console.log('Ini Bener')
    } else console.log('ini salah')
}