const imgGallery = document.querySelectorAll ('.imgGallery');
const btnPrev = document.getElementById ('prevbutton');
const btnNext =document.getElementById ('nextbutton');

let currentSlide = 0;

function hideSlider(){
    imgGallery.forEach(item=> item.classList.remove('on'))
}

function showSlider() {
    imgGallery[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if(currentSlide === imgGallery.length -1){
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if(currentSlide === 0){
        currentSlide = imgGallery.length -1
    } else {
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

console.log (imgGallery)