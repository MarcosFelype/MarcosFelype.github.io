const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

var currentSlide = 0;

btnNext.addEventListener("click", avancarSlider());
btnPrev.addEventListener("click", voltarSlider());


/*function hideSlider(){
    slider.forEach(item => item.classList.remove('slider'));

    console.log(slider)
}

function showSlider(){
    slider[currentSlide].classList.add('slider');
    console.log(slider)
}

function avancarSlider(){
    hideSlider();
    if(currentSlide == slider.length -1){
        currentSlide = 0; 
    } else{
        currentSlide++
    }
    showSlider();
}

function voltarSlider(){
    hideSlider();
    if(currentSlide == 0){
        currentSlide = slider.length -1;
    }else{
        currentSlide--;
    }
    showSlider();
    alert("clicou esquerda")
}*/



function validacao(){
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    
    if(nome.value == ""){
        alert("Preencha o nome.");
    }

    if(email.value == "" || !emailValido(email.value)){
        alert("E-mail inválido.")
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
