import './index.css'
import 'flowbite'


document.addEventListener("DOMContentLoaded", function() {

    // navbar element
    const navBars = document.querySelectorAll(".navbar");
    navBars.forEach(navBar => {
        navBar.classList.add("navbar-visible");
    });
});


// intro section
const fadeInSections = document.querySelectorAll(".fade-in-section");
fadeInSections.forEach(section => {
    section.classList.add("fade-in-section-visible");
});


function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
}


//about me section
function checkAboutMeInView() {
    const aboutMeSections = document.querySelectorAll(".about-me-js");
    aboutMeSections.forEach(section => {
        if (isInView(section)) {
            section.classList.add("about-me-js-visible");
        }
    });
}


// Experience section desktop view
function checkExperienceInView() {
    const experienceSections = document.querySelectorAll(".experience-dt-js");
    experienceSections.forEach(section => {
        if (isInView(section)) {
            section.classList.add("experience-dt-js-visible");
        }
    });
}

// Experience section desktop view
function checkProjectInView() {
    const projectSections = document.querySelectorAll(".projects-js");
    projectSections.forEach(section => {
        if (isInView(section)) {
            section.classList.add("projects-js-visible");
        }
    });
}

window.addEventListener("scroll", function() {
    checkAboutMeInView();
    checkExperienceInView();
    checkProjectInView();
});

// for the intro animation
document.addEventListener("DOMContentLoaded", function() {
    const hiIAmElement = document.querySelector(".intro-name");

    if (hiIAmElement) {
        hiIAmElement.classList.add("blinking");
    }
});


//responsive buttons in experience section in mobile view
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Hide all content sections
            contents.forEach(content => content.classList.add('hidden'));

            // Show the clicked tab's content and add 'active' class to the button
            targetContent.classList.remove('hidden');
            button.classList.add('active');
        });
    });
});


//responsive buttons in experience section in desktop view
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button-group .tab-button');
    const contents = document.querySelectorAll('.job-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Hide all content sections
            contents.forEach(content => content.classList.remove('active'));

            // Show the clicked tab's content and add 'active' class to the button
            targetContent.classList.add('active');
            button.classList.add('active');
        });
    });
});

// smooth tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const jobContents = document.querySelectorAll('.job-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all job contents
        jobContents.forEach(content => content.classList.remove('active'));

        // Get the target content and add 'active' class to it
        const target = button.getAttribute('data-target');
        document.querySelector(`#${target}`).classList.add('active');
    });
});
