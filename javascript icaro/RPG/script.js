function enviarficha(){
    nome = document.getElementById('nome').value
    forc = parseInt(document.getElementById('for').value)
    des = parseInt(document.getElementById('des').value)
    con = parseInt(document.getElementById('con').value)
    int = parseInt(document.getElementById('int').value)
    car = parseInt(document.getElementById('car').value)
    arma = document.getElementById('arma').value
    foto = document.getElementById('foto').value

    fichaValida = true

    if( nome.length < 2 || nome.length > 10){
        alert('Nome inválido. (Entre 2 e 10 caracteres).')
        fichaValida = false
    }

    if( isNaN(forc) || isNaN(des) || isNaN(con) || isNaN(int) || isNaN(car)  ){
        alert('Preencha TODOS os campos.')
        fichaValida = false

    }

    somaAtributos = forc+des+con+int+car
    if( somaAtributos > 8){
        alert('Você ultrapassou o limite colocando '+somarAtributos+' pontos.')
        fichaValida = false
    }
    if( fichaValida == true){
        document.getElementById('ficha').innerHTML = ''
        document.getElementById('ficha').innerHTML += '<div class="perfil"><img src="'+foto+'"><h2>'+nome+'<h2></div>'
        document.getElementById('ficha').innerHTML += ''
    }
}