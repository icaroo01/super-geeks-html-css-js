lista = []

function additem(){

    item = document.getElementById('item').value
    document.getElementById('item').value = ''
    lista.push(item)
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
        '<div>'+lista[i]+' <button onclick="removeritem('+i+')">X</button></div>'
    }

}