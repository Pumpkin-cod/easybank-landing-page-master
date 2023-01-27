const closeBtn = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay')
const fadedElems = document.querySelectorAll('.faded')
header.addEventListener('click', () =>{
    if(header.classList.contains('open')){
        // closes hamburger menu
        header.classList.remove('open')
        // this is to remove the overflow so that when we close the menu we can scroll once again
        body.classList.remove('noscroll')
        fadedElems.forEach((element) => {
        element.classList.add('fade-in')
        // this opens the fade in 
        element.classList.remove('fade-out')
        // this closes the fade out
        })
        
    }else{
        // opens hamburger menu
        header.classList.add('open')
        // This is for the overflow so that when the menu is opened we cant scroll.
        body.classList.add('noscroll')
        fadedElems.forEach((element) =>{
        element.classList.add('fade-out')
        // this opens the fade out 
        element.classList.remove('fade-in')
        // this closes the fade-in 
        })
      
    }
})