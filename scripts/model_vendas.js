const preco_string = document.getElementById("preco_numero").value;
const preco = Number(preco_string);
const quantidade = document.getElementById("quant");

alert("oi")
console.log(preco_string)
console.log(preco)

quantidade.addEventListener("R#", () =>{
    alert(quantidade.value)

    //preco.innerText = 15*(quantidade.value)
})
