let = isMouseEnter = false;

const divVictorCamera = window.document.querySelector('div#VictorCamera');

const imgVictorDesenho = window.document.querySelector('img#VictorDesenho');
const imgCamera = window.document.querySelector('img#Camera')

divVictorCamera.addEventListener('mouseenter', () => {
    isMouseEnter = true;
    imgCamera.style.transform = 'rotate(10deg)';
    imgVictorDesenho.style.transform = 'rotate(-5deg)';
});

divVictorCamera.addEventListener('mouseleave', () => {
    isMouseEnter = false;
    imgCamera.style.transform = 'rotate(-10deg)';
    imgVictorDesenho.style.transform = 'rotate(5deg)';
})