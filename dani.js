const bouquet = document.getElementById('bouquet');

bouquet.addEventListener('mouseenter', () => {
    bouquet.classList.add('hovered');
});

bouquet.addEventListener('mouseleave', () => {
    bouquet.classList.remove('hovered');
});

bouquet.addEventListener('click', () => {
    bouquet.classList.toggle('hovered');
});
