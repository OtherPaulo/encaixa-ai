/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
sr.reveal('.video-container', { interval: 200 }); // Adicionamos a classe para o vídeo

document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay");
    var salvarBtn = document.getElementById("salvar");

    // Adiciona um evento de clique ao botão "Salvar"
    salvarBtn.addEventListener("click", function() {
        // Mescla as imagens
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var img1 = document.getElementById('img1');
        var img2 = document.getElementById('img2');
        
        canvas.width = img1.width;
        canvas.height = img1.height;
        
        context.drawImage(img1, 0, 0);
        context.globalAlpha = 0.5; // altere a opacidade conforme necessário
        context.drawImage(img2, 0, 0);
        
        // Salva a imagem mesclada
        var link = document.createElement('a');
        link.download = 'imagem_mesclada.png';
        link.href = canvas.toDataURL();
        link.click();
    });

    // Adicione a lógica para alterar a cor da imagem aqui
    // Por exemplo, você pode adicionar um evento de clique ao overlay
    overlay.addEventListener("click", function() {
        overlay.style.backgroundColor = "rgba(0, 0, 255, 0.5)"; // Altera a cor do overlay para azul com 50% de opacidade
    });
});

// (function() {
//     var originalAlert = window.alert;
//     window.alert = function() {
//         originalAlert('A inspeção do código é desencorajada.');
//     };
//     console.log = function() {};
//     console.dir = function() {};
//     document.addEventListener('contextmenu', function(e) {
//         e.preventDefault();
//     });
// })();

// document.addEventListener("keydown", function(event) {
//     if (event.key === "PrintScreen" || event.key === "PrtScn" || (event.ctrlKey && event.key === "c")) {
//         event.preventDefault();
//         alert("Captura de tela desativada.");
//     }
// });