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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const ul=document.getElementById("navbar__list");
const sections=Array.from(document.querySelectorAll("section"));


function createListItem(){
    for ( let section of sections) {
        sectionName=section.getAttribute('dataset.nav');
        sectionLink=section.getAttribute('id');
        listItem=document.createElement("li") ;
        listItem.innerHTML=`<a href="#${sectionLink}" data-nav="${sectionLink}"  class="menu__link">${section.dataset.nav}</a>`
     

        ul.appendChild(listItem);
    }

    }createListItem();
    
    //using getBoundingClientRect to styling for active
    window.onscroll=function(){
       document.querySelectorAll("section").forEach(function (active){
       if(
        active.getBoundingClientRect().top>=-400 &&
        active.getBoundingClientRect().top<=150
       ){
        active.classList.add("your-active-class");
       }else{
        active.classList.remove("your-active-class");
       }
       });
    };
    //using arrow function to scroll section when click an any section in the navigation bar
    ul.addEventListener("click",(toSection) => {
        toSection.preventDefault();
            if(toSection.target.dataset.nav){
                document
                .getElementById(`${toSection.target.dataset.nav}`)
               .scrollIntoView({behavior:"smooth"});
                
            }
        });




