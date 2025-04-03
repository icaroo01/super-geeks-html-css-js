frutas = []

function addFruta(){
    fruta = document.getElementById('fruta').value
    document.getElementById('fruta').value = ''

    if(frutas.indexOf(fruta) != -1){
        alert('essa fruta já está na lista')

    }else if( fruta == ''){
        alert('texto vazio,informe algo')
    }else{

        frutas.push(fruta)

    }

    carregarlista()
}

function deletarFruta(x){

    frutas.splice(x,1)
    carregarlista()

}

function carregarlista(){
    document.getElementById('lista').innerHTML = ''
    frutas.sort()
    for(i=0; i<frutas.length; i++){
        document.getElementById('lista').innerHTML += '<li>'+frutas[i]+' <button onclick="deletarFruta('+i+')">X</button></li>'
    }
    document.getElementById('b').innerHTML = frutas.length + ' ITENS'

}

