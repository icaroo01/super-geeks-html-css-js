lista = []

function additem(){

    item = document.getElementById('item').value.trim()
    item = item[0].toUpperCase() + item.slice(1).toLowerCase()
    document.getElementById('item').value = ''

    if(  item == '' ){
        alert('o campo está vazio')
    } else if( lista.indexOf(item) != -1 ){
        alert('Este item já foi adicionado.')
    }else{
        lista.push(item)
    }

    carregarlista()
}

function removeritem(i){
    lista.splice(i,1)
    carregarlista()
}

function carregarlista(){

    document.getElementById('listadecompras').innerHTML = ''
    for( i = 0; i< lista.length; i++ ){
        document.getElementById('listadecompras').innerHTML += 
        '<div>'+lista[i]+' <button onclick="removeritem('+i+')">X</button> <button onclick="desceritem('+i+')" >▼</button></div>'
    }
    document.getElementById('quantidade').innerHTML = lista.length

}

function limparlista(){
    lista = []
    carregarlista()
}

function desceritem(i){
    
}