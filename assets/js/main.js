//criando funcao criaHorasDosSegundos - ela recebe os segundos, cria a data e da a data

function criaHorasDosSegundos (segundos){
    const data = new Date(segundos *1000); // transformando os milissegundos em segundos
    return data.toLocaleTimeString('pt-Br',{
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

function iniciaRelogio(){
    const timer = setInterval(function(){
        segundos++;
        relogio.innerHTML= criaHorasDosSegundos(segundos);
    },1000 );
}

//pegar evento de click de um botao
iniciar.addEventListener('click',function(event){
    iniciaRelogio();
});

pausar.addEventListener('click',function(event){
    console.log('teste');
});

zerar.addEventListener('click',function(event){
    console.log('teste');
});
