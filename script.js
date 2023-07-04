// Slider

const slides = document.getElementById('slides');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const timeout = 6000;
const speed = 10;

let allSlides;
let lastSlide;
let nextTimeout;
let animating = false;

nextTimeout = setTimeout(nextSlide , timeout);

function nextSlide(){
    allSlides = document.querySelectorAll('.slide');
    lastSlide = allSlides[allSlides.length - 1];
    requestAnimationFrame(moveRight);
    animating = true;
}

function moveRight(){
    const left = parseInt(lastSlide.style.left);
    lastSlide.style.left = (left + speed) + 'px';
    if(left < 400){
        requestAnimationFrame(moveRight);
    }else{
        slides.insertBefore(lastSlide , slides.firstElementChild);
        lastSlide.style.left = '0';
        nextTimeout = setTimeout(nextSlide , timeout);
        animating = false;
    }
}

next.addEventListener('click' , function(){
    if(!animating){
        clearTimeout(nextTimeout);
        nextSlide();
    }
});

previous.addEventListener('click' , function(){
    if(!animating){
        clearTimeout(nextTimeout);
        previousSlide();
    }
});

function previousSlide(){
    slides.firstElementChild.style.left = '400px';
    slides.appendChild(slides.firstElementChild);
    allSlides = document.querySelectorAll('.slide');
    lastSlide = allSlides[allSlides.length - 1];
    requestAnimationFrame(moveLeft);
    animating = true;
}

function moveLeft(){
    const left = parseInt(lastSlide.style.left);
    lastSlide.style.left = (left - speed) + 'px';
    if(left > speed){
        requestAnimationFrame(moveLeft);
    }else{
        nextTimeout = setTimeout(nextSlide , timeout);
        animating = false;
    }
}


//tab

let softwareTab=document.getElementById('software');
let androidTab=document.getElementById('android');
let softwareContent=document.getElementsByClassName('softwareContent');
let androidContent=document.getElementsByClassName('androidContent');

softwareTab.addEventListener('click',function (){
    androidTab.classList.remove('active');
    softwareTab.classList.add('active');
    softwareContent[0].style.display='block';
    androidContent[0].style.display='none';
});
androidTab.addEventListener('click',function (){
    softwareTab.classList.remove('active');
    androidTab.classList.add('active');
    androidContent[0].style.display='block';
    softwareContent[0].style.display='none';
});



// show list

let continuelist=document.getElementById('continueList');
let content=document.querySelector('#softwareList .img');

continuelist.addEventListener('click',function (){

        content.classList.toggle('active');
})

// habmergermenu

const hambergericon = document.getElementById('hambergericon');
const mobilemenu = document.getElementById('mobilemenu');

hambergericon.addEventListener('click',function () {
    mobilemenu.classList.toggle('active');
})