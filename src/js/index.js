import '../css/styles.css';
import { createAboutPageFragment } from './about.js';

const aboutButton = document.querySelector('#about-button');
const menuButton = document.querySelector('#menu-button');
const contactsButton = document.querySelector('#contacts-button');

const pageContentElement = document.querySelector('#content');

aboutButton.addEventListener('click', () => {
    pageContentElement.appendChild(createAboutPageFragment());
    aboutButton.classList.add('active');
});
