const progressBar = document.querySelector('#progress-bar');
const section =document.querySelector('section');

const animateProgressBar = () => {
    // gives the distance when your scroll in pixels 
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100
    console.log(scrollDistance);

    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";
    
    if(value < 0 ){
        progressBar.style.width = "0%"

    }
};

window.addEventListener("scroll", animateProgressBar);