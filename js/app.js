/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let ul = document.getElementById("navbar__list");
let fragment = document.createDocumentFragment();
const myElement = document.getElementById("containerdiv");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function navbuilder(){
    for(let i = 1; i <= myElement.children.length; i++) {
        let li = document.createElement("li");
        li.textContent = 'section' + i;
        fragment.appendChild(li);  
    }
    ul.appendChild(fragment);
}

function RemoveAllActiveClasses(){
    for (let i = 0; i < myElement.children.length; i++) {
        myElement.children[i].classList.remove('your-active-class');
    }

}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

navbuilder();



// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', function(e) {
    // determine the y position of the scroll
    lastPosition = window.scrollY;
    if(lastPosition >= 0 && lastPosition<800){
        let element = document.getElementById("section1");
        RemoveAllActiveClasses();
        element.classList.add("your-active-class");
    }
    else if(lastPosition>800 && lastPosition<1400){
        let element = document.getElementById("section2");
        RemoveAllActiveClasses();
        element.classList.add("your-active-class");
    }
    else if(lastPosition>1400 && lastPosition<2000){
        let element = document.getElementById("section3");
        RemoveAllActiveClasses();
        element.classList.add("your-active-class");
    }
    else if(lastPosition>2000){
        let element = document.getElementById("section4");
        RemoveAllActiveClasses();
        element.classList.add("your-active-class");
    }
});


// Scroll to anchor ID using scrollTO event

ul.addEventListener('click',
function scroll(evt){
    console.log(evt.target);
    let id=evt.target.textContent.replace(/[^0-9]/g,'');
    let width = document.getElementById(evt.target.textContent).scrollWidth;
    let height = document.getElementById(evt.target.textContent).scrollHeight;
    window.scrollTo(width,height*(id-0.4));
}
);



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


