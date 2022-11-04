

const menu = document.querySelector('.menu');
const opcoes = document.querySelector('.opcoes');

menu.addEventListener('click', function () {
    if (opcoes.style.display === "flex") {
        opcoes.style.display = "none";
    } else {
        opcoes.style.display = "flex";
    }
})