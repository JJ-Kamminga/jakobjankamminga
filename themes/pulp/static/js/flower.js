const button = document.getElementById('radial-menu');
const buttonIcon = document.getElementById('button-icon');
const container = document.getElementById('nav');

button.addEventListener('click', function(e){
    button.classList.toggle('is-active');
    container.classList.toggle('is-active');
    buttonIcon.classList.toggle('fa-minus-circle');
})