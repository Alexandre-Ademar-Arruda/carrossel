const ChangeSlideButton = document.querySelectorAll('[data-change-slide-button]'); //capitura os 2 buttons com atrib ... e adiciona na changeSlideButton

ChangeSlideButton.forEach(button=> { // aqui percorre changeSlideButton
    button.addEventListener('click', () => { // adiciona nele o envento click 
        //precisamos descobrir qual slide esta ativo e qual button recebeu o click
        const slides = document.querySelector('.slides'); //pra isso vamos capturar a ul que tem a lista com slides
        const activeSlide = slides.querySelector('[data-active]');// aqui vamos capturar o slide que tem o atributo data-active
        let indexActiveSlide = Array.from(slides.children).indexOf(activeSlide);//aqui vamos  adicionar o index do slide ativo no indexActiveSlide
        //console.log(indexActiveSlide);
        
        indexActiveSlide = button.dataset.ChangeSlideButton === 'next' 
        ? indexActiveSlide + 1 
        : indexActiveSlide - 1 // se o button que recebeu o click for o next ele soma 1 no index do slide ativo se for o previous ele subtrai 1
        
        if(indexActiveSlide >= slides.children.length) {
            indexActiveSlide = 0;
        }
        if(indexActiveSlide < 0) {
            indexActiveSlide = slides.children.length -1; // aqui faz o loop do slide, se o index for maior ou igual ao tamanho da lista ele volta pro 0, se for menor que 0 ele volta pro ultimo slide
        }
        activeSlide.removeAttribute('data-active');
        slides.children[indexActiveSlide].dataset.active = true; 

    })
})

