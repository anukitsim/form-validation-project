let userName = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.getElementById('form');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;

let gradient = ctx.createLinearGradient(0,0,canvas.width, canvas.height);
gradient.addColorStop(0, '#2D033B');
gradient.addColorStop(0.2, '#810CA8');
gradient.addColorStop(0.4, '#C147E9');
gradient.addColorStop(0.6, '#E5B8F4');
gradient.addColorStop(0.8, '#C147E9');
gradient.addColorStop(1, '#810CA8');


let errorMsg = document.getElementsByClassName('error');
let successIcon = document.getElementsByClassName('success-icon');
let failureIcon = document.getElementsByClassName('failure-icon');

class Symbol {
    constructor(x,y,fontSize,canvasHeight){
        this.characters = '☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠☠';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
        this.text = '';

    }
    draw(context){
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        context.fillText(this.text,this.x * this.fontSize,this.y * this.fontSize);
        if(this.y * this.fontSize > this.canvasHeight && Math.random() < 0.98){
            this.y = 0;
        }else{
            this.y += 1;
        }


    }
}


class Effect {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 30;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#initialize();

    }
    #initialize(){
        for(let i = 0; i < this.columns; i++){
            this.symbols[i] = new Symbol(i,0,this.fontSize,this.canvasHeight);
        }

    }
}

const effect = new Effect(canvas.width, canvas.heigth);

let lastTime = 0;
const fps = 80;
const nextFrame = 1000/fps;
let timer = 0;

const animate = (timeStamp) => {
    const detlaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if(timer > nextFrame){
        ctx.fillStyle = 'rgba(0,0,0,0.03)';
        ctx.fillRect(0,0,canvas.width, canvas.heigth);
        ctx.fillStyle = gradient;
        ctx.font = effect.fontSize + 'px monospace';
        effect.symbols.forEach(symbol => symbol.draw(ctx));
        timer = 0

    }else{
        timer += detlaTime; 
    }
   
    requestAnimationFrame(animate);


}

animate(0);

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

    
    




