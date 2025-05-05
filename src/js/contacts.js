import { CONTENT_TYPE_LIST, CONTENT_TYPE_LIST_ITEM_ITALIC, CONTENT_TYPE_LIST_ITEM_BOLD, CONTENT_TYPE_PARA, CONTENT_TYPE_PARA_BOLD, contactsData } from './contacts-data.js';

const sectionClass = 'content-block';
const sectionHeaderClass = 'content-block-header';
const boldClass = 'span-bold';
const italicClass = 'span-italic';

const createParagraph = (paraData) => {
    const p = document.createElement('p');
    switch(paraData.type) {
        case CONTENT_TYPE_PARA:
            p.textContent = paraData.text;
            break;
        case CONTENT_TYPE_PARA_BOLD:
            const boldSpan = document.createElement('span');
            boldSpan.classList.add(boldClass);
            boldSpan.textContent = paraData.boldText;
            p.append(boldSpan, paraData.plainText);
            break;
    }

    return p;
};

const createListItem = (listItemData) => {
    const li = document.createElement('li');

    switch(listItemData.type) {
        case CONTENT_TYPE_LIST_ITEM_BOLD:
            const boldSpan = document.createElement('span');
            boldSpan.classList.add(boldClass);
            boldSpan.textContent = listItemData.boldText;
            li.append(boldSpan, listItemData.plainText);
            break;
        case CONTENT_TYPE_LIST_ITEM_ITALIC:
            const italicSpan = document.createElement('span');
            italicSpan.classList.add(italicClass);
            italicSpan.textContent = listItemData.italicText;
            li.append(italicSpan, listItemData.plainText);
            break;
    }

    return li;
};

const createList = (listData) => {
    const ul = document.createElement('ul');

    listData.items.forEach((listItemData) => {
        const listItem = createListItem(listItemData);
        ul.appendChild(listItem);
    });

    return ul;
};

const createContactsSection = (sectionData) => {
    const contactsSection = document.createElement('section');
    contactsSection.classList.add(sectionClass);

    const contactsSectionHeader = document.createElement('h1');
    contactsSectionHeader.classList.add(sectionHeaderClass);
    contactsSectionHeader.textContent = sectionData.header;

    contactsSection.appendChild(contactsSectionHeader);

    sectionData.content.forEach((contentItemData) => {
        let contentElement;

        switch(contentItemData.type) {
            case CONTENT_TYPE_PARA:
            case CONTENT_TYPE_PARA_BOLD:
                contentElement = createParagraph(contentItemData);
                console.log(contentElement);
                break;
            case CONTENT_TYPE_LIST:
                contentElement = createList(contentItemData);
                console.log(contentElement);
                break;
        }

        contactsSection.appendChild(contentElement);
    });

    return contactsSection;
};

const createContactsFragment = () => {
    const contactsFragment = new DocumentFragment();

    contactsData.forEach((sectionData) => {
        contactsFragment.appendChild(createContactsSection(sectionData));
    });
    
    return contactsFragment;
}

export { createContactsFragment };