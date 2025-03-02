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

function sortearAmigo(){
    if(listaAmigos.length >=1){
        let indiceArreglo =  Math.floor(Math.random()*listaAmigos.length);
        let resultado = `<li> El amigo secreto sorteado es: ${listaAmigos[indiceArreglo]}.</li>`;
        document.getElementById("resultado").innerHTML = resultado;
    }else{
        alert("Por favor, inserte un nombre.");
        console.log(listaAmigos.length);
    }
}

/*function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    console.log(listaNumerosSorteados);
}*/
