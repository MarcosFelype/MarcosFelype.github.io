const form_cadastro = document.getElementById("form_cadastro");


const nome_inicio = document.getElementById("nome_inicio");
const nome_fim = document.getElementById("nome_fim");
const email = document.getElementById("email_user");
const senha = document.getElementById("criar_senha");
const senha_confirm = document.getElementById("confirm_senha");
const cpf = document.getElementById("cpf");
const sexo = document.getElementById("sexo");
const celular = document.getElementById("celular");
const data_nasc = document.getElementById("data_nasc")

//Endereço
const cep = document.getElementById("cep");
const endereco = document.getElementById("endereco");
const numero = document.getElementById("numero");
const bairro = document.getElementById("bairro");
const complemento = document.getElementById("complemento");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

form_cadastro.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(email)
    validacoes();
    form_cadastro.submit();

})

function validacoes(){
    if(nome_inicio.value == ""){
        alert("Preencha o nome")
    }
    if(nome_fim.value == ""){
        alert("Preencha o sobrenome.")
    }

    if(email.value == "" || !emailValido(email.value)){
        alert("E-mail inválido.")
    }else{
        alert(email.value)
    }

    if(sexo.value == "--"){
        alert("Selecione o sexo.")
    }
    
    if(celular.value == ""){
        alert("Preencha o número de celular.")
    }

    if(data_nasc.value == ""){
        alert("Preencha a data de nascimento.")
    }

    if(endereco.value == ""){
        alert("Preencha o endereço.")
    }

    if(numero.value == ""){
        alert("Preencha o número.")
    }

    if(bairro.value == ""){
        alert("Preencha o bairro.")
    }

    if(complemento.value == ""){
        alert("Preencha o complemento.")
    }

    if(cidade.value == ""){
        alert("Preencha a cidade.")
    }

    if(estado.value == "--"){
        alert("Selecione um estado.")
    }
    

    if(cpf.value == "" || !cpfValido(cpf.value)){
        alert("CPF inválido.")
    }

    if(cep.value == "" || !cepValido(cep.value)){
        alert("CEP inválido.")
    }

    if(!senhaValida(senha.value, 8)){
        alert("A senha precida de, pelo menos, 8 dígitos.")
    }

    if(!comparaSenha(senha.value, senha_confirm.value)){
        alert("A confirmação da senha não condiz com a original ou o campo não possui 8 dígitos.");
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


function cpfValido(cpf){
    const cpfRegex = new RegExp(
        /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/
    )

    if(cpfRegex.test(cpf)){
        alert(cpf)
        return true;
    }
    return false;
}

function cepValido(cep){
    const cepRegex = new RegExp(
        /^[0-9]{5}-?[0-9]{3}/
    )

    if(cepRegex.test(cep)){
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

function comparaSenha(senha, senha_confirm){
    if(senha == senha_confirm){
        return true;
    }
    return false;
}