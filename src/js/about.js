import { aboutData } from './about-data.js';

const sectionClass = 'content-block';
const sectionHeaderClass = 'content-block-header';

const createAboutFragment = () => {
    const aboutFragment = new DocumentFragment();

    aboutData.forEach((sectionData) => {
        const newSection = document.createElement('section');
        newSection.classList.add(sectionClass);

        const newSectionHeader = document.createElement('h1');
        newSectionHeader.classList.add(sectionHeaderClass);
        newSectionHeader.textContent = sectionData.header;

        const newSectionText = document.createElement('p');
        newSectionText.textContent = sectionData.text;

        const newSectionImg = document.createElement('img');
        newSectionImg.src = sectionData.imgUrl;
        newSectionImg.alt = sectionData.imgAlt;

        newSection.appendChild(newSectionHeader);
        newSection.appendChild(newSectionText);
        newSection.appendChild(newSectionImg);

        aboutFragment.appendChild(newSection);
    });

    return aboutFragment;
};

export { createAboutFragment };