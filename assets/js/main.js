//criando funcao criaHorasDosSegundos - ela recebe os segundos, cria a data e da a data

function criaHorasDosSegundos(segundos) {
    const data = new Date(segundos * 1000); // formata os milissegundos em segundos
    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'UTC'

    });
}

//selecionar o relogio e os botoes
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0; //var que vai receber os segundos
let timer;

function iniciaRelogio() {
        timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHorasDosSegundos(segundos);
    }, 1000);
}

//pegar evento de click de um botao
iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado')
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.classList.add('pausado')
});

zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.innerHTML= '00:00:00'
    segundos =0;
  
});