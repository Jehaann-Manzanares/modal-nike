
const $overlay = document.getElementById('overlay');
const $showModal =document.getElementById('modal');

function logonike(){
    

    
    $showModal.style.animation = 'animationIn 1s forwards';
    $overlay.classList.add('active');

}

function HideModal(){
    
    $showModal.style.animation = 'animationOut .8s forwards';
    $overlay.style.transitionDelay = '.8s';
    $overlay.classList.remove('active');
    
}