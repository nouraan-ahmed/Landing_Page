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
const myElementchildren = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function navbuilder(){
    for(let i = 1; i <= myElement.children.length; i++) {
        let li = document.createElement("li");
        li.textContent = 'section' + i;
        li.setAttribute('val','section'+i);
        fragment.appendChild(li);  
    }
    ul.appendChild(fragment);
}

function RemoveAllActiveClasses(myEl){
    for (let i = 0; i < myEl.children.length; i++) {
        myEl.children[i].classList.remove('your-active-class');
        myEl.children[i].classList.remove('active');
    }

}

function scroll(){
    ul.addEventListener('click',
    function scroll(evt){
        window.scrollTo({top:document.getElementById(evt.target.textContent).offsetTop, behavior: "smooth"});
    });
}

function getsection(){
    myElementchildren.forEach((child) => {
        const section = child.getBoundingClientRect();
        if (section.top >= 0 && section.top <= 250) {
        RemoveAllActiveClasses(myElement);
        child.classList.add("your-active-class");
        const lis = document.querySelectorAll('li');
        lis.forEach((el)=>{
            let val=el.getAttribute('val');
            if(val===child.id){
                RemoveAllActiveClasses(ul);
                el.classList.add("active");
            }
        });
        }
    });
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

navbuilder();



// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', getsection);


// Scroll to anchor ID using scrollTO event

scroll();



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


