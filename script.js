// let darkMode = [];

// var body = document.body;

// // https://materialdesignicons.com/ -> theme-light-dark

// toggleDarkModeButton.addEventListener("click", () => {
//     // body.classList.toggle("dark-mode");
//     var count = 0;
//     console.log(count);
// });

// sticky navbar
// style mode toggler
// animated background
// format contact and projects
// dynamic timestamp
// responsive
// padding vs. margin

function toggleMode() {
    var darkElements = [];

    var header = document.getElementsByTagName("header")[0];
    var nav = Array.from(document.getElementsByClassName("nav-link"));
    var heroButtons = Array.from(document.getElementsByClassName("hero-button"));
    var contentSections = Array.from(document.getElementsByClassName("content-section"));
    var portrait = document.getElementsByClassName("portrait")[0];
    var skills = Array.from(document.getElementsByClassName("skill-icon"));

    darkElements.push(header);
    nav.forEach((navLink) => {
        darkElements.push(navLink);
    });
    heroButtons.forEach((heroButton) => {
        darkElements.push(heroButton);
    });
    contentSections.forEach((contentSection) => {
        darkElements.push(contentSection);
    });
    darkElements.push(portrait);
    skills.forEach((skill) => {
        darkElements.push(skill);
    });

    darkElements.forEach((element) => {
        // console.log(element);
        element.classList.toggle("dark");
    });
}