
//Skill animation

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBar(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBar();

function fillBar(){
    for(let bar of progressBars){
        let targetWidth=bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth>targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        },3);
    }
}

function checkScroll(){
    // to check whether skill container is visible 
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<=window.innerHeight){
        animationDone=true;
        fillBar();
    }else if(coordinates.top>window.innerHeight){
         animationDone=false;
         initialiseBar();
    }
}