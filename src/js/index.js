import '../css/styles.css';
import { createAboutFragment } from './about.js';
import { createMenuFragment } from './menu.js';
import { createContactsFragment } from './contacts.js';

const aboutButton = document.querySelector('#about-button');
const menuButton = document.querySelector('#menu-button');
const contactsButton = document.querySelector('#contacts-button');

const pageContentElement = document.querySelector('#content');

aboutButton.addEventListener('click', () => {
    pageContentElement.appendChild(createAboutFragment());
    aboutButton.classList.add('active');
});

menuButton.addEventListener('click', () => {
    pageContentElement.appendChild(createMenuFragment());
    menuButton.classList.add('active');
});

contactsButton.addEventListener('click', () => {
    pageContentElement.appendChild(createContactsFragment());
    menuButton.classList.add('active');
});