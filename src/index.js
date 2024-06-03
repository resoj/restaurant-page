
import resetContent from "./reset";
import loadHomeContent from "./home";
import loadMenuContent from "./menu";
import loadAboutContent from "./about";

const contentContainer = document.getElementById('content');

loadHomeContent(contentContainer);

const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const aboutButton = document.getElementById('about-button');

homeButton.addEventListener('click', () => {
    resetContent(contentContainer);
    loadHomeContent(contentContainer);
})

menuButton.addEventListener('click', () => {
    resetContent(contentContainer);
    loadMenuContent(contentContainer);
})

aboutButton.addEventListener('click', () => {
    resetContent(contentContainer);
    loadAboutContent(contentContainer);
})