const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

var currentSlide = 0;

function hideSlider(){
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
}

btnNext.addEventListener("click", avancarSlider());
btnPrev.addEventListener("click", voltarSlider())
