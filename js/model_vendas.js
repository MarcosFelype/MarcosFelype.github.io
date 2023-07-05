//Cálculo de preço
const preco_string = document.getElementById("preco_numero")
var preco = parseFloat(preco_string.textContent); 
const quantidade = document.getElementById("quant");


quantidade.addEventListener("change", () =>{
    preco_string.textContent = preco * (quantidade.value) + ",00"
})


//Troca de imagem
const imagem_sec = document.querySelector(".imagem_sec");
var caminho = '/assets/produtos/doces_leite/leite_granulado'

function trocaImagem(src){
    var caminho = '/assets/produtos/doces_leite/leite_granulado'
    if(src == ('_sec1.jpeg')){
        document.getElementById("imagem_princ").src = (caminho + src)
    }else if(src == '_sec2.jpeg'){
        document.getElementById("imagem_princ").src = (caminho + src)
    }else{
        document.getElementById("imagem_princ").src = (caminho + src)
    }
}

//Adcicionando ao carrinho
const add_carrinho = document.getElementById("add_carrinho");
const carrinho = document.getElementById("carrinho");
add_carrinho.addEventListener("click", () =>{
    alert("Item adicionado ao carrinho!");
    carrinho.style.color = "purple";
})

const calculo_frete = document.getElementById("calculo_frete");
calculo_frete.addEventListener("click", () =>{
    alert("Função indisponível no momento.");
})

