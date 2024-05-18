const animatedElement = document.getElementById('.video');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        animatedElement.classList.add('no-animation');
    } else {
        animatedElement.classList.remove('no-animation');
    }
});