const minutosEl = document.querySelector('#minutos')
const segundosEl = document.querySelector('#segundos')
const millisegundosEl = document.querySelector('#millisegundos')
const iniciar = document.querySelector('#startBtn')
const pause = document.querySelector('#pauseBtn')
const recomecar = document.querySelector('#restartBtn')
const reset = document.querySelector('#resetBtn')

let interval;
let minutos = 0
let segundos = 0
let millisegundos = 0
let pausar = false

iniciar.addEventListener('click', iniciarTempo)
pause.addEventListener('click', pausarTempo)
recomecar.addEventListener('click', recomTempo)
reset.addEventListener('click', resetTempo)

function iniciarTempo(){
    interval = setInterval(() => {
        if(!pausar){
            millisegundos+=10
            if(millisegundos===1000){
                segundos++
                millisegundos = 0
            }
            if(segundos===60){
                minutos++
                segundos = 0
            }
        }
        minutosEl.textContent = formatarTempo(minutos)
        segundosEl.textContent = formatarTempo(segundos)
        millisegundosEl.textContent = formatarMilli(millisegundos)
    }, 10);

    iniciar.style.display = 'none'
    pause.style.display = 'block'
}

function pausarTempo(){
    pausar = true

    pause.style.display = 'none'
    recomecar.style.display = 'block'
}

function recomTempo(){
    pausar = false

    recomecar.style.display = 'none'
    pause.style.display = 'block'
}

function resetTempo(){
    clearInterval(interval)
    pausar = false
    
    minutos = 0
    segundos = 0
    millisegundos = 0

    minutosEl.textContent = '00'
    segundosEl.textContent = '00'
    millisegundosEl.textContent = '000'

    iniciar.style.display = 'block'
    recomecar.style.display = 'none'
    pause.style.display = 'none'
}

function formatarTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo
}

function formatarMilli(tempo){
    return tempo < 100 ? `${tempo}`.padStart(3, '0') : tempo
}