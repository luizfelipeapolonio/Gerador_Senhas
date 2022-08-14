const caracteres = window.document.getElementById('qtdcaracteres');
const abatamanho = window.document.getElementById('tamanho');
const senha = window.document.querySelector('.numsenha');
const maiusculas = window.document.getElementById('upperCase');
const minusculas = window.document.getElementById('lowerCase');
const numeros = window.document.getElementById('numeros');
const simbolos = window.document.getElementById('simbolos');
const btngerar = window.document.getElementById('btngerar');
const btncopiar = window.document.getElementById('btncopiar');

let letrasMaiusc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let letrasMin = 'abcdefghijklmnopqrstuvwxyz';
let num = '0123456789';
let sim = '!@#%*&';
let novasenha;

btncopiar.disabled = true;
abatamanho.innerHTML = `Tamanho: ${caracteres.value} caracteres.`;

caracteres.oninput = function() {
    abatamanho.innerHTML = `Tamanho: ${this.value} caracteres.`;
}

function gerarSenha() {

    btncopiar.disabled = false;
    let senhaFinal = '';
    let juntar;
    let tam = caracteres.value;

    if(maiusculas.checked){
        for(let i = 0; i < tam; i++){
            senhaFinal += letrasMaiusc.charAt(Math.floor(Math.random() * letrasMaiusc.length));
            senha.innerHTML = senhaFinal
        }
        novasenha = senhaFinal;
    }

    if(minusculas.checked){
        senhaFinal = '';

        for(let i = 0; i < tam; i++){
            senhaFinal += letrasMin.charAt(Math.floor(Math.random() * letrasMin.length));
            senha.innerHTML = senhaFinal;
        }
        novasenha = senhaFinal;
    }

    if(numeros.checked){
        senhaFinal = '';

        for(let i = 0; i < tam; i++){
            senhaFinal += num.charAt(Math.floor(Math.random() * num.length));
            senha.innerHTML = senhaFinal;
        }
        novasenha = senhaFinal;
    }

    if(simbolos.checked){
        senhaFinal = '';

        for(let i = 0; i < tam; i++){
            senhaFinal += sim.charAt(Math.floor(Math.random() * sim.length));
        }
        novasenha = senhaFinal;
    }

    if(maiusculas.checked && minusculas.checked){
        senhaFinal = '';
        juntar = letrasMaiusc + letrasMin;
        
        for(let i = 0; i < tam; i++){
            senhaFinal += juntar.charAt(Math.floor(Math.random() * juntar.length));
            senha.innerHTML = senhaFinal
        }
        novasenha = senhaFinal;
    }

    if(maiusculas.checked && numeros.checked){
        senhaFinal = '';
        juntar = letrasMaiusc + num;

        for(let i = 0; i < tam; i++){
            senhaFinal += juntar.charAt(Math.floor(Math.random() * juntar.length));
            senha.innerHTML = senhaFinal;
        }
        novasenha = senhaFinal;
    }

    if(maiusculas.checked && simbolos.checked){
        senhaFinal = '';
        juntar = letrasMaiusc + sim;

        for(let i = 0; i < tam; i++){
            senhaFinal += juntar.charAt(Math.floor(Math.random() * juntar.length));
            senha.innerHTML = senhaFinal;
        }
        novasenha = senhaFinal;
    }

    if(minusculas.checked && numeros.checked){
        senhaFinal = '';
        juntar = letrasMin + num;

        for(let i = 0; i < tam; i++){
            senhaFinal += juntar.charAt(Math.floor(Math.random() * juntar.length));
            senha.innerHTML = senhaFinal;
        }
        novasenha = senhaFinal;
    }

    if(minusculas.checked && simbolos.checked){
        senhaFinal = '';
        juntar = letrasMin + sim;

        for(let i = 0; i < tam; i++){
            senhaFinal += juntar.charAt(Math.floor(Math.random() * juntar.length));
            senha.innerHTML = senhaFinal;
        }
        novasenha = senhaFinal;
    }

    if(numeros.checked && simbolos.checked){
        senhaFinal = '';
        juntar = num + sim;

        for(let i = 0; i < tam; i++){
            senhaFinal += juntar.charAt(Math.floor(Math.random() * juntar.length));
            senha.innerHTML = senhaFinal;
        }
        novasenha = senhaFinal;
    }

    if(maiusculas.checked && minusculas.checked && numeros.checked){
        senhaFinal = '';
        juntar = letrasMaiusc + letrasMin + num;

        for(let i = 0; i < tam; i++){
            senhaFinal += juntar.charAt(Math.floor(Math.random() * juntar.length));
            senha.innerHTML = senhaFinal;
        }
        novasenha = senhaFinal;
    }

    if(maiusculas.checked && numeros.checked && simbolos.checked){
        senhaFinal = '';
        juntar = letrasMaiusc + num + sim;

        for(let i = 0; i < tam; i++){
            senhaFinal += juntar.charAt(Math.floor(Math.random() * juntar.length));
            senha.innerHTML = senhaFinal;
        }
        novasenha = senhaFinal;
    }

    if(minusculas.checked && numeros.checked && simbolos.checked){
        senhaFinal = '';
        juntar = letrasMin + num + sim;

        for(let i = 0; i < tam; i++){
            senhaFinal += juntar.charAt(Math.floor(Math.random() * juntar.length));
            senha.innerHTML = senhaFinal;
        }
        novasenha = senhaFinal;
    }

    if(maiusculas.checked && minusculas.checked && numeros.checked && simbolos.checked){
        senhaFinal = '';
        juntar = letrasMaiusc + letrasMin + num + sim;

        for(let i = 0; i < tam; i++){
            senhaFinal += juntar.charAt(Math.floor(Math.random() * juntar.length));
            senha.innerHTML = senhaFinal;
        }
        novasenha = senhaFinal;
    }
}

function copiaSenha() {
    navigator.clipboard.writeText(novasenha);
}

function verifica() {
    if(maiusculas.checked == false &&
       minusculas.checked == false &&
       numeros.checked == false &&
       simbolos.checked == false){

        btngerar.disabled = true;
    }else {
        btngerar.disabled = false;
    }
}

