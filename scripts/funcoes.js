class MobileNavbar {
    constructor() {
        this.mobileMenu = document.querySelector(this.mobileMenu);
        this.navList = document.querySelector(this.navList);
        this.navLinks = document.querySelectorAll(this.navLinks);
        this.activeClass = "active";

        this.hadleClick = this.hadleClick.bind();
    }

    animateLinks(){
        this.navLinks.forEach((link) =>{
            link.style.animation ? (link.style.animation = "") : (link.style.animation = 'navLinkFade 0.5s case forwards $ {index / 7 + 0.3)} s');
        });
    }
    hadleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.hadleClick);
    }

    Init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    "mobile-menu",
    "nav-list",
    "nav-list-li",

);
mobileNavbar.Init();