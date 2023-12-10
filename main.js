let stars = document.getElementById('stars')
let meteorId = document.getElementById('meteorId')
let rocket = document.getElementById('rocket')
let text = document.getElementById('text')
let button = document.getElementById('button')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    rocket.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
});