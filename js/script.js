let shareButton = document.querySelector('.js-preview__txt__btm__r');
let shareWindow = document.querySelector('.js-preview__txt__btm__share');
let card = document.querySelector('.js-preview');

const showWindow = () => {

    setTimeout(() => {
        shareWindow.style.display = 'flex';
        setTimeout(() => {
            shareWindow.style.opacity = 1;
        }, 10);
    }, 0);

    if (window.matchMedia("(max-width: 777px)").matches) {
        shareWindow.style.bottom = '-2rem';
    }
}

const hideWindow = () => {
    
    setTimeout(() => {
        shareWindow.style.opacity = 0;
        setTimeout(() => {
            shareWindow.style.display = 'none';
        }, 100);
    }, 0);

    if (window.matchMedia("(max-width: 777px)").matches) {
        shareWindow.style.bottom = '-6.4rem';
    }
    
}

shareButton.addEventListener('mouseover', showWindow);
shareButton.addEventListener('click', showWindow);
card.addEventListener('mouseleave', hideWindow);

window.addEventListener('click', (event)=>{
    if (event.target === card) {
        hideWindow();
    }
});






