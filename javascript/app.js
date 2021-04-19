import Highway from '@dogstudio/highway';
import Fade from './transitions';




const H=new Highway.Core({
    transitions:{
        default: Fade
    }
});


  const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const image = document.querySelector('.image');
const cards=document.querySelector('.cards1');
const column=document.querySelector('.column img');


card1.addEventListener('mouseenter', (e) =>{
    card1.style.transform = "translateY(-20px)";
    card1.style.transition="all 0.2s ease-in";
});

//AnimateOut
card1.addEventListener("mouseleave", (e) =>{
    card1.style.transition = "all 0.5s ease";
    card1.style.transform = "translateY(0px)";
});


card2.addEventListener('mouseenter', (e) =>{
    card2.style.transform = "translateY(-20px)";
    card2.style.transition="all 0.2s ease-in";
});

//AnimateOut
card2.addEventListener("mouseleave", (e) =>{
    card2.style.transition = "all 0.5s ease";
    card2.style.transform = "translateY(0px)";
});


card3.addEventListener('mouseenter', (e) =>{
    card3.style.transform = "translateY(-20px)";
    card3.style.transition="all 0.2s ease-in";
});

//AnimateOut
card3.addEventListener("mouseleave", (e) =>{
    card3.style.transition = "all 0.5s ease";
    card3.style.transform = "translateY(0px)";
});


column.addEventListener('mouseenter', (e) =>{
    cardt.style.transform = "translateY(-20px)";
    cardt.style.transition="all 0.2s ease-in";
});

//AnimateOut
cardt.addEventListener("mouseleave", (e) =>{
    cardt.style.transition = "all 0.5s ease";
    cardt.style.transform = "translateY(0px)";
});