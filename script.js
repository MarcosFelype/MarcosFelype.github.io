const form = document.getElementById("form_entrada");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

console.log(form,email,senha)

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(email.value == "" || !emailValido(email)){
        alert("Preencha o email")
    }else{
        alert(email.value)
    }

    if(!senhaValida(senha.value, 8)){
        alert("A senha precisa de ao menos 8 dígitos.")
    }

    form.subimit();
});

function emailValido(email){

    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

function senhaValida(senha, minDigits){
    if(senha.length >= minDigits){
        return true;
    }

    return false;
}




function verificarConta(){
    alert("Bem vindo!")
}