const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");
const panels = document.querySelectorAll(".panel");

// loop through the panels 
panels.forEach((panel) => {
    // add a class of active to whichever panel is clicked on
    panel.addEventListener('click', () => {
        // remove the active class from the panels that weren't clicked
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
    item.addEventListener("keypress", toggleItem, false);
}
