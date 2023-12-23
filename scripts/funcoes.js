/* == INICIO ==*/

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


