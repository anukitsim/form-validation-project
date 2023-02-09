let userName = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.getElementById('form');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let errorMsg = document.getElementsByClassName('error');
let successIcon = document.getElementsByClassName('success-icon');
let failureIcon = document.getElementsByClassName('failure-icon');

class Symbol {
    constructor(){

    }
    draw(){

    }
}


class Effect {
    constructor(){

    }
    #initialize(){
        
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    control(email, 1, 'Enter your email adress');
    control(userName, 0, 'Enter your User Name');
    control(password, 2, 'Choose a password');
});

    let control = (id, index, message) => {
        if(id.value.trim() === ''){
            errorMsg[index].innerHTML = message;
            failureIcon[index].style.opacity = '1';
            successIcon[index].style.opacity = '0';
        }else{
            errorMsg[index].innerHTML = '';
            successIcon[index].style.opacity = '1';
            failureIcon[index].style.opacity = '0';
        }

    }

    
    




