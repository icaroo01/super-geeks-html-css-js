function tabuada(){

    numero = parseInt(document.getElementById('numeros').value)
    for(i=0; i<=10; i++){
        document.getElementById('calculos').innerHTML += numero+' x '+i+' = '+i*numero+ '<br>'

    }

}

function sorteador(){

    min = parseInt(document.getElementById('min').value)    
    max = parseInt(document.getElementById('max').value)  
    ps = max - min  + 1
    ns = Math.floor(Math.random() * ps )+min
    document.getElementById('Sorteado').innerHTML = ns
    if(ns == min) {
        document.getElementById('Sorteado').innerHTML += ' azarado'

    }else if(ns == max){
        document.getElementById('Sorteado').innerHTML += ' sortudo'

    }

}