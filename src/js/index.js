import '../css/styles.css';

import { createAboutFragment } from './about.js';
import { createMenuFragment } from './menu.js';
import { createContactsFragment } from './contacts.js'

const aboutButton = document.querySelector('#about-button');
const menuButton = document.querySelector('#menu-button');
const contactsButton = document.querySelector('#contacts-button');

const pageContentElement = document.querySelector('#content');

const onAboutButtonClick = () => {
    pageContentElement.replaceChildren();
    pageContentElement.appendChild(createAboutFragment());
    
    aboutButton.classList.add('active');
    menuButton.classList.remove('active');
    contactsButton.classList.remove('active');
};

const onMenuButtonClick = () => {
    pageContentElement.replaceChildren();
    pageContentElement.appendChild(createMenuFragment());
    
    menuButton.classList.add('active');
    aboutButton.classList.remove('active');
    contactsButton.classList.remove('active');
};

const onContactsButtonClick = () => {
    pageContentElement.replaceChildren();
    pageContentElement.appendChild(createContactsFragment());
    
    contactsButton.classList.add('active');
    aboutButton.classList.remove('active');
    menuButton.classList.remove('active');
};

aboutButton.addEventListener('click', onAboutButtonClick);
menuButton.addEventListener('click', onMenuButtonClick);
contactsButton.addEventListener('click', onContactsButtonClick);

pageContentElement.appendChild(createAboutFragment());
aboutButton.classList.add('active');