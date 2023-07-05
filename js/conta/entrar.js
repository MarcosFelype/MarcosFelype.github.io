const form = document.getElementById("form_entrada");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

var email_teste = "abc@domain.com";
var senha_teste = "40028922";

form.addEventListener("submit", (event) => {
    event.preventDefault();
    verificacoes();
    form.submit();
});

function verificacoes(){
    if((email.value != email_teste) || (senha.value != senha_teste)){
        alert("Email ou senha estão errados.")
    }

    if(email.value == "" || !emailValido(email.value)){
        alert("Preencha adequadamente o email.")
    }

    if(!senhaValida(senha.value, 8)){
        alert("A senha precisa de, ao menos, 8 dígitos.")
    }
}

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

