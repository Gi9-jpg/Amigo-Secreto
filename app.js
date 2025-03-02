let listaAmigos = [];
let lista ="";
let resultado="";

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);
    if (nombre === ""|| nombre==" "){
        alert("Por favor, inserte un nombre.");
    }else{
        listaAmigos.push(nombre);
        limpiarCaja();
        actualizarLista();
    }
}

function actualizarLista(){ 
    let lista = `<li>${listaAmigos[listaAmigos.length - 1]}</li>`; 
    document.getElementById("listaAmigos").innerHTML += lista;
    console.log(listaAmigos);
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function limpiarAmigos(){
    document.getElementById('listaAmigos').innerHTML = '';
}

function sortearAmigo(){
    limpiarAmigos();
    if(listaAmigos.length >=1){
        let indiceArreglo =  Math.floor(Math.random()*listaAmigos.length);
        let resultado = `<li> El amigo secreto sorteado es: ${listaAmigos[indiceArreglo]}.</li>`;
        document.getElementById("resultado").innerHTML = resultado;
    }else{
        alert("Por favor, inserte un nombre.");
        console.log(listaAmigos.length);
    }
}