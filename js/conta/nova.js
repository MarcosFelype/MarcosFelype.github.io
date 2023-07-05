/*
<div class="nome" >
                            <label for="nome_inicio"> Usuário </label>
                            <input type="text" id="nome_inicio">
                        </div>

                        <div class="nome">
                            <label for="nome_fim">
                                Sobrenome
                            </label>
                            <input type="text" name="" id="nome_fim">
                        </div>

                        <div id="email">
                            <label for=""> E-mail </label>
                            <input type="email" id="email">
                        </div>

                        <div class="senha">
                            <label for="criar_senha"> Senha </label>
                            <input type="password" id="criar_senha">
                        </div>

                        <div class="senha">
                            <label for="confirm_senha"> Confirmar senha </label>
                            <input type="password" id="confirm_senha">
                        </div>
                        
                        <div class="dados_imp1">
                            <label for="cpf">CPF</label>
                            <input type="number" id="cpf">
                        </div>

                        <span class="dados_imp1">
                            <label for="sexo">Sexo</label>
                            <select name="sexo" id="sexo">
                                <option value="--">--</option>
                                <option value="feminino">Feminino</option>
                                <option value="masculino">Masculino</option>
                            </select>
                            
                        </span>
                        
                        <div class="dados_imp2">
                            <label for="celular">Celular</label>
                            <input type="number" id="celular">
                        </div>
                        
                        <div class="dados_imp2">
                            <label for="data_nasc">Data de nascimento</label>
                            <input type="date" id="data_nasc">
                        </div>

                    </div>
                    <hr>
                    <div id="endereco_usuario">

                        <h2 id="usuario">
                            Endereço do usuário
                        </h2>
                        
                        <div class="cep_endereco" >
                            <label for="cep"> CEP</label>
                            <input type="text" id="cep">
                        </div>

                        <div class="cep_endereco">
                            <label for="endereco">
                                Endereço
                            </label>
                            <input type="text" name="endereco" id="endereco">
                        </div>

                        <div class="detalhamento_endereco">
                            <label for="numero"> Número </label>
                            <input type="text" id="numero">
                        </div>

                        <div class="detalhamento_endereco">
                            <label for="bairro"> Bairro </label>   
                            <input type="text" id="bairro">
                        </div>

                        <div class="detalhamento_endereco">
                            <label for="complemento"> Complemento </label>
                            <input type="text" id="complemento">
                        </div>
                        
                        <div class="cidade_estado">
                            <label for="cidade">Cidade</label>
                            <input type="text" id="cidade">
                        </div>

                        <div class="cidade_estado">
                            <label for="estado">Estado</label>
                            <select name="estado" id="estado">
                                <option value="--">--</option>
                                <option value="Acre">Acre</option>
                                <option value="Alagoas">Alagoas</option>
                            </select>
                            
                        </div>
*/

const form_cadastro = document.getElementById("form_cadastro");


const nome_inicio = document.getElementById("nome_inicio");
const nome_fim = document.getElementById("nome_fim");
const email = document.getElementById("email");
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
    alert("opaa")
    event.preventDefault();

    if(nome_inicio.value == ""){
        alert("Preencha o nome")
    }
    if(nome_fim.value == ""){
        alert("Preencha o sobrenome.")
    }

    if(email.value == "" || !emailValido(email)){
        alert("Preencha o email.")
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
        alert("Preencha o CPF.")
    }

    if(cep.value == "" || !cepValido(cep.value)){
        alert("Preencha o CEP.")
    }

    if(!senhaValida(senha.value, 8)){
        alert("A senha precida de, pelo menos, 8 dígitos.")
    }

    if(!comparaSenha(senha.value, senha_confirm.value)){
        alert("A confirmação da senha não condiz com a original ou o campo não possui 8 dígitos.");
    }

    

    form_cadastro.submit();

})

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
    }else{
        alert("nn deu "+cpf.value)
    }
    return false;
}

function cepValido(cep){
    const cepRegex = new RegExp(
        /^[0-9]{5}-?[0-9]{3}/
    )

    if(cepRegex.test(cep)){
        alert(cep)
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