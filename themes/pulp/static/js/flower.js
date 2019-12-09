const button = document.getElementById('radial-menu');
const container = document.getElementById('nav');

button.addEventListener('click', function(e){
    button.classList.toggle('is-active');
    container.classList.toggle('is-active');
})