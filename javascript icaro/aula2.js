

function teste(){
    nome = document.getElementById('nome').value
    alert('olá '+nome)

}

function somar(){
   n1 = parseInt(document.getElementById('n1').value)
   n2 = parseInt(document.getElementById('n2').value)
   soma = n1+n2
   //alert ('a soma deu '+soma)//
   document.getElementById('resultado').innerHTML = 'a soma deu '+(n1+n2) 
}

function avaliar(){

   nota = parseFloat(document.getElementById('nota').value)

   if(nota>=0 && nota<=10){

    if(nota>=6){
        document.getElementById('resultado2').innerHTML = 'voce foi aprovado'
       }else if(nota>=4){
    
        document.getElementById('resultado2').innerHTML = 'voce está de recuperação'
      
       }else{
    
        document.getElementById('resultado2').innerHTML = 'voce foi reprovado'
    
       }
       
    
    }else{

      document.getElementById('resultado2').innerHTML = 'valor invalido! , o valor deve ser entre 0 e 10'

    }

   }

   function mensagem(){

    for(i=0; i<=5; i++){
        
     document.getElementById('mensagem').innerHTML += i
     

    }

   }

   function palavra1(){
      palavra = document.getElementById('palavra').value
      if(palavra == 'super'){
       document.getElementById('caixa').innerHTML += "<div class='especial'>"+palavra+"</div>"
      }else{
       document.getElementById('caixa').innerHTML += "<div>"+palavra+"</div>"
      }
      
      document.getElementById('palavra').value = ""

   }