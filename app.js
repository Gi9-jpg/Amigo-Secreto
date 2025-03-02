let listaAmigos = [];
let lista ="";

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
    let lista = `<li>${listaAmigos[listaAmigos.length - 1]}</li>`; // Solo el último elemento
    document.getElementById("listaAmigos").innerHTML += lista; // Agregar solo el nuevo elemento
    console.log(listaAmigos);
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function sortearAmigo(){
    if(listaAmigos.length >=1){
        let indiceArreglo =  Math.floor(Math.random()*listaAmigos.length);

        console.log(indiceArreglo);
        console.log(listaAmigos =[indiceArreglo]);
        console.log(listaAmigos.length);
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
