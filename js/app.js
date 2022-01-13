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
const sections = document.querySelectorAll('section')
const navBarList = document.getElementById("navbar__list");


/**
 * Start Helper Functions
 * 
*/
function scrolltoLink(sectionId){
    console.log(sectionId)
    let s = document.getElementById(sectionId); 
    s.scrollIntoView({behavior: "smooth"});    
}

function scroll(clickedElement, scrolledElement) {
    clickedElement.addEventListener("click", function (e) {
      e.preventDefault();
      scrolledElement.scrollIntoView({ behavior: "smooth" });
      changeActiveClass(scrolledElement);
    });
  }

function makeActive() {
    for (const section of sections) {
        const position = section.getBoundingClientRect();
        if (position.top <= 120 && position.bottom >= 120) {
            section.classList.add("your-active-class");
            
        } else {
            const id = section.getAttribute("id");
            section.classList.remove("your-active-class");
        }
    }
}
function changeActiveClass(sectionId){    
    const menuElements = document.getElementsByClassName("menu__link");
    for (menu of menuElements){
        if (menu.getAttribute('data-link') == sectionId){
            menu.classList.add("active");         
        } else {
            if (menu.classList.contains("active")){
                menu.classList.remove("active");           
            }
        }
    }    
}


/**
 *
 * Begin Main Function
 * 
*/

// build the nav


for (let i=0; i<sections.length; i++)
    {const listItem = document.createElement('li');
    
    const a = document.createElement("a"); 
    listItem.setAttribute("class", "navbar__menu")
    section = sections[i]
    a.innerHTML += `<a  class="menu__link" name-link = "${section.id}">${section.dataset.nav}</a>`
    listItem.appendChild(a);
    navBarList.appendChild(listItem);
    scroll(a,section);
    }

    const links = document.querySelectorAll('.menu__link');

   
    

    // Add class 'active' to section when near top of viewport and Set sections as active

    document.addEventListener('scroll', function () {
        makeActive();
    });



    

