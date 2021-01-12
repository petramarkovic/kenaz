//SEARCH BAR
var searchInputs = document.getElementById('search-inputs');
var searchIcon = document.getElementById('search-icon');

searchIcon.addEventListener('click', showSearchBar);

function showSearchBar(e){
    e.preventDefault();
    
        if(searchInputs.style.display === 'block'){
            searchInputs.style.display = 'none';
          } else {
            searchInputs.style.display = 'block';
        
          }
}

//DROPDOWN MENU
var menuIcon = document.getElementById('menu-icon');
var menuUl = document.getElementById('ul-menu');

menuIcon.addEventListener('click', dropMenu);

function dropMenu(e){
  e.preventDefault();
  if(menuUl.style.display === 'block'){
    menuUl.style.display = 'none';
  } else {
    menuUl.style.display = 'block';
  }
}

//SLIDER
let slides = document.querySelectorAll('.slide');
let arrowRight = document.getElementById('arrow-right');
let arrowLeft = document.getElementById('arrow-left');
var currentSlide = 0;

function reset(){
    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
}

function startSlide(){
    reset();
    slides[0].style.display = 'block';
}

function slideLeft(){
    reset();
    slides[currentSlide - 1].style.display = 'block';
    currentSlide --;
}

function slideRight(){
    reset();
    slides[currentSlide + 1].style.display = 'block';
    currentSlide ++;
}

arrowLeft.addEventListener('click', function(){
    if(currentSlide === 0){
        currentSlide = slides.length;
    }
    slideLeft();
});

arrowRight.addEventListener('click', function(){
    if(currentSlide === slides.length -1){
        currentSlide -1;
    }

    slideRight();
});

startSlide();