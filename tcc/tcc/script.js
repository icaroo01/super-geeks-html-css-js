produtos = [
    {
        nome: "Mochila sustentavel",
        preco: 50,
        descricao: "Mochila sustentavel feita com materiais reciclados e de baixo impacto ambiental, resistente e leve, ideal para trilhas.",
        categoria: "mochilas",
        foto: "mochilatransparente.png",
        avaliacao: 4.7
    },
     {
        nome: "Mochila sustentavel",
        preco: 50,
        descricao: "Mochila sustentavel feita com materiais reciclados e de baixo impacto ambiental, resistente e leve, ideal para trilhas.",
        categoria: "mochilas",
        foto: "mochilatransparente2.png",
        avaliacao: 4.7
    },
     {
        nome: "Mochila sustentavel",
        preco: 50,
        descricao: "Mochila sustentavel feita com materiais reciclados e de baixo impacto ambiental, resistente e leve, ideal para trilhas.",
        categoria: "mochilas",
        foto: "mochilatransparente3.png",
        avaliacao: 4.7
    },
    {
        nome: "Garrafa termica",
        preco: 200,
        descricao: "Garrafa térmica sustentavel produzida com aço inoxidavel e materiais livres de BPA, durável e reutilizavel. Mantém a temperatura de bebidas por horas, reduzindo o uso de descartáveis e promovendo um consumo mais consciente.",
        categoria: "garrafas",
        foto: "garrafa.png.png",
        avaliacao: 2.3
    },
    {
        nome: "Garrafa termica",
        preco: 200,
        descricao: "Garrafa térmica sustentavel produzida com aço inoxidavel e materiais livres de BPA, durável e reutilizavel. Mantém a temperatura de bebidas por horas, reduzindo o uso de descartáveis e promovendo um consumo mais consciente.",
        categoria: "garrafas",
        foto: "garrafatransparente2.png",
        avaliacao: 2.3
    },
    {
        nome: "Garrafa termica",
        preco: 200,
        descricao: "Garrafa térmica sustentavel produzida com aço inoxidavel e materiais livres de BPA, durável e reutilizavel. Mantém a temperatura de bebidas por horas, reduzindo o uso de descartáveis e promovendo um consumo mais consciente.",
        categoria: "garrafas",
        foto: "garrafatransparente3.png",
        avaliacao: 2.3
    },
    {
        nome: "Barracas",
        preco: 600,
        descricao: "Barraca sustentável para até 4 pessoas, fabricada com tecidos reciclados e revestimento ecológico resistente à água. Leve, prática de montar e projetada para durabilidade, oferece conforto e proteção em acampamentos enquanto reduz o impacto ambiental.",
        categoria: "barracas",
        foto: "barraca4.png.png",
        avaliacao: 3.2
    },
    {
        nome: "Barracas",
        preco: 600,
        descricao: "Barraca sustentável para até 4 pessoas, fabricada com tecidos reciclados e revestimento ecológico resistente à água. Leve, prática de montar e projetada para durabilidade, oferece conforto e proteção em acampamentos enquanto reduz o impacto ambiental.",
        categoria: "barracas",
        foto: "barracatransparente2.png",
        avaliacao: 3.2
    },
    {
        nome: "Barracas",
        preco: 600,
        descricao: "Barraca sustentável para até 4 pessoas, fabricada com tecidos reciclados e revestimento ecológico resistente à água. Leve, prática de montar e projetada para durabilidade, oferece conforto e proteção em acampamentos enquanto reduz o impacto ambiental.",
        categoria: "barracas",
        foto: "barracatransparente3.png",
        avaliacao: 3.2
    },
    {
        nome: "Bota",
        preco: 130,
        descricao: "Bota sustentável para trilhas, produzida com couro ecológico, sola de borracha natural e processo de fabricação de baixo impacto. Confortável, resistente e versátil, garante estilo e durabilidade ao mesmo tempo em que valoriza o consumo consciente.",
        categoria: "roupas",
        foto: "botatransparente.png",
        avaliacao: 4
    },
    {
        nome: "Calça",
        preco: 80,
        descricao: "Calça sustentável para trilhas, confeccionada com algodão orgânico e fibras recicladas, tingimento ecológico e produção de baixo impacto ambiental. Leve, confortável e versátil, une estilo moderno à responsabilidade socioambiental.",
        categoria: "roupas",
        foto: "calça.png.png",
        avaliacao: 1
    },
    {
        nome: "Camisa",
        preco: 50,
        descricao: "Camisa sustentável para trilhas, feita com algodão orgânico e materiais reciclados, tingimento natural e processo de produção ético. Leve, confortável e elegante, combina bem-estar com respeito ao meio ambiente.",
        categoria: "roupas",
        foto: "camisa.png.png",
        avaliacao: 1.2
    },

];

function carregarCards(){

    for(i=0; i<produtos.length; i++){
        document.getElementById('produtos').innerHTML +=
         `
        <a onclick="anotarProduto(`+i+`)" href="produto.html">
            <div class="img">
                <img src="cardsimagens/${produtos[i].foto}">
            </div>
            <label>`+produtos[i].nome+`</label>
            <div>
            <i class="fa fa-star-o">`+produtos[i].avaliacao+`k</i>
            <i class="fa fa-usd">`+produtos[i].preco+`</i>
            </div>

        </a>
        `
    }

    
}

function anotarProduto(x){
    localStorage.setItem('produto',x)
}

function verProduto(){
    prod = localStorage.getItem('produto')
    document.getElementById('prod-img').innerHTML = '<img src="cardsimagens/'+produtos[prod].foto+'">'
    document.getElementById('prod-nome').innerHTML = produtos[prod].nome
    document.getElementById('prod-desc').innerHTML = produtos[prod].descricao
    document.getElementById('prod-av').innerHTML = produtos[prod].avaliacao+'k'
    document.getElementById('prod-preco').innerHTML = produtos[prod].preco
}

carrinho = JSON.parse(localStorage.getItem('carrinho')) || []
function addcarrinho(){
    carrinho.push(produtos[localStorage.getItem('produto')])
    localStorage.setItem('carrinho',JSON.stringify(carrinho))
}

function gerarcarrinho(){
    document.getElementById('qtdprod').innerText = carrinho.length
    document.getElementById('carrinho').innerHTML = ''
    for(i=0; i<carrinho.length; i++){
        document.getElementById('carrinho').innerHTML +=
        `<div class="cart-item">
              <img src="cardsimagens/`+carrinho[i].foto+`" alt="Foto">
              <span>`+carrinho[i].nome+`</span>
              <span>R$ `+carrinho[i].preco+`</span>
              <button onclick="deletarProduto(`+i+`)"><i class="fa fa-trash"></i></button>
            </div>`
    }
}

function deletarProduto(i){
    carrinho.splice(i,1)
    localStorage.setItem('carrinho',JSON.stringify(carrinho))
    gerarcarrinho()
}