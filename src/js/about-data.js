//  <section class="content-block">
//     <h1 class="content-block-header">From Our Village & Valued Neighbours</h1>
//     <p>
        
//     </p>
//     <img src="./assets/farming.jpg" alt="Farming">
//  </section>

import tavernImg from '../assets/interior.jpg';
import bonfireImg from '../assets/bonfire.jpg';
import farmingImg from '../assets/farming.jpg';

const aboutData = [
    {
        header: 'The Trebuhovo Tavern',
        text: 'Welcome, traveller, to The Trebuhovo Tavern - the heart and hearth of our \
        living medieval ethno-village project! Nestled away from the clamor \
        of the modern world, we invite you to step across our threshold \
        and back in time. More than just a restaurant, The Trebuhovo \
        is an experience woven into the fabric of our village, offering a warm refuge, \
        hearty fare, and a taste of history, thoughtfully recreated for your comfort \
        and enjoyment. Sit by the fire, raise a goblet, and become part of our story.',
        imgUrl: tavernImg,
        imgAlt: 'Tavern Interior',
    },
    {
        header: 'Serenity Over Struggle',
        text: 'Our passion lies in capturing the spirit, not necessarily the struggle, \
        of medieval life. While history had its hardships, we choose to celebrate \
        its quieter moments: the warmth of community, the connection to the land, \
        the simple pleasure of a well-cooked meal shared in good company. \
        Our philosophy centers on providing an atmosphere of peace and tranquility. \
        We aim to be an escape, a place where you can slow down, savor the present, \
        and experience the restorative serenity inspired by a bygone era, \
        without needing to darn your own tunic!',
        imgUrl: bonfireImg,
        imgAlt: 'Bonfire',
    },
    {
        header: 'From Our Village & Valued Neighbours',
        text: 'Authenticity guides our hand, right down to the ingredients on your plate. \
        We take immense pride in the provenance of our food and drink. \
        Many herbs, vegetables, and even some livestock are raised right here \
        within our ethno-village grounds, tended with traditional care. \
        What we do not produce ourselves, we source meticulously from local farmers, \
        dedicated artisans, and small, independent producers who share our commitment \
        to quality and sustainable practices. You will not find fare from \
        distant corporations here - only the honest bounty of our land and \
        the craft of our community, brought fresh to your table.',
        imgUrl: farmingImg,
        imgAlt: 'Farming',
    },
];

export { aboutData };