import { appetizersData, entreesData, beveragesData } from './menu-data.js';

const sectionClass = 'content-block';
const sectionHeaderClass = 'content-block-header';
const menuGridClass = 'menu-grid';
const menuItemClass = 'menu-item';
const menuItemNameClass =  'menu-item-name';
const menuItemPriceClass = 'menu-item-price';
const menuItemDescClass = 'menu-item-desc';
const menuItemImgClass = 'menu-item-img';

const createMenuSectionGrid = (sectionItemsList) => {
    const menuSectionGrid = document.createElement('div');
    menuSectionGrid.classList.add(menuGridClass);

    sectionItemsList.forEach((item) => {
        const menuItem = document.createElement('article');
        menuItem.classList.add(menuItemClass);
        
        const menuItemImage = document.createElement('img');
        menuItemImage.classList.add(menuItemImgClass);
        menuItemImage.src = item.imgUrl;
        menuItemImage.alt = item.imgAlt;

        const menuItemName = document.createElement('h2');
        menuItemName.classList.add(menuItemNameClass);
        menuItemName.textContent = item.name;

        const menuItemPrice = document.createElement('p');
        menuItemPrice.classList.add(menuItemPriceClass);
        menuItemPrice.textContent = `Price: $${item.price}`;

        const menuItemDesc = document.createElement('p');
        menuItemDesc.classList.add(menuItemDescClass);
        menuItemDesc.textContent = item.desc;

        menuItem.appendChild(menuItemImage);
        menuItem.appendChild(menuItemName);
        menuItem.appendChild(menuItemPrice);
        menuItem.appendChild(menuItemDesc);

        menuSectionGrid.appendChild(menuItem);
    });

    return menuSectionGrid;
};

const createMenuSection = (menuSectionData) => {
    const menuSection = document.createElement('section');
    menuSection.classList.add(sectionClass);

    const menuSectionHeader = document.createElement('h1');
    menuSectionHeader.classList.add(sectionHeaderClass);
    menuSectionHeader.textContent = menuSectionData.sectionHeader;

    menuSection.appendChild(menuSectionHeader);
    menuSection.appendChild(createMenuSectionGrid(menuSectionData.sectionItemsList));

    return menuSection;
};

const createMenuFragment = () => {
    const menuFragment = new DocumentFragment();

    menuFragment.appendChild(createMenuSection(appetizersData));
    menuFragment.appendChild(createMenuSection(entreesData));
    menuFragment.appendChild(createMenuSection(beveragesData));
    
    return menuFragment;
};

export { createMenuFragment };