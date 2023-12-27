
/* ANIMAR */
function animar() {
    const btn = document.getElementById('btn-menu')
    btn.classList.toggle('ativar')
    menuShow()
} 


/* MENU SHOW */
function menuShow() {
    let menuMobile = document.querySelector('.navbar');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

function clickMenu() {
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

window.addEventListener("scroll", function(){
    let header = document.querySelector('.cabecalho')
    header.classList.toggle('rolagem', window.scrollY > 0)
});
    

var onda1= documento.getElementById('onda1')
var onda2= documento.getElementById('onda2')
var onda3= documento.getElementById('onda3')
var onda4= documento.getElementById('onda4')

window.addEventListener('scrool', function(){
    var rolagemPos = window.scrollY

    onda1.style.backgroundPositionX = 400 + rolagemPos * 8 + 'px'
    onda2.style.backgroundPositionX = 300 + rolagemPos * -6 + 'px'
    onda3.style.backgroundPositionX = 200 + rolagemPos * 4 + 'px'
    onda4.style.backgroundPositionX = 100 + rolagemPos * -2 + 'px'
})


