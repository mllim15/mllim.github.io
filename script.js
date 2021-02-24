// first need to bring all panels into the javascript
// querySelector allows us to select anything like a p or class/id etc
/* querySelectorAll allows us to select all of a certain element
 and puts it into an array */
const panels = document.querySelectorAll('.panel');

// for parallex effect on welcome page
const translateY = document.querySelectorAll('.translateY');
const translateX = document.querySelectorAll('.translateX');

window.addEventListener('scroll', () => {
    // get number of pixels by which user scrolled upwards
    let scroll = window.pageYOffset;

    // get value of attribute data-speed for each element
    translateY.forEach(element => {
        let speed = element.dataset.speed;

        // move each element based on result of multiplying scroll value and data-speed value
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
    translateX.forEach(element => {
        let speed = element.dataset.speed;

        element.style.transform = `translateX(${scroll * speed}px)`
    })
})

// loop through the panels 
panels.forEach((panel) => {
    // add a class of active to whichever panel is clicked on
    panel.addEventListener('click', () => {
        // remove the active class from the panels that weren't clicked
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}
