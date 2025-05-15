function pintarcaixa(cor){
    document.getElementById('caixa').style.backgroundColor = cor

}

function colorircaixa(){
    cor = document.getElementById('codigocor').value
    document.getElementById('caixa').style.backgroundColor = cor
}

function redimensionarcaixa(){
    altura = document.getElementById('altura').value
    largura = document.getElementById('largura').value
    document.getElementById('caixa').style.height = altura + 'px'
    document.getElementById('caixa').style.width = largura + 'px'
}

function mudarborda(){
    espessura = document.getElementById('espessuraborda').value
    estilo = document.getElementById('estiloborda').value
    cor = document.getElementById('corborda').value
    document.getElementById('caixa').style.border = espessura+'px '+estilo+' '+cor
}