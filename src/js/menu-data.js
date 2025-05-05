import ryeBreadImg from '../assets/menu-images/menu-rye-bread.jpg';
import cheesePlankImg from '../assets/menu-images/menu-cheese-plank.jpg';
import roastedRootsImg from '../assets/menu-images/menu-roasted-roots.jpg';
import mushroomTartletsImg from '../assets/menu-images/menu-mushroom-tartlets.jpg';
import troutPateImg from '../assets/menu-images/menu-trout-pate.jpg';
import venisonStewImg from '../assets/menu-images/menu-venison-stew.jpg';
import roastedHenImg from '../assets/menu-images/menu-roasted-hen.jpg';
import shepherdsPieImg from '../assets/menu-images/menu-shepherds-pie.jpg';
import panSearedSalmonImg from '../assets/menu-images/menu-pan-seared-salmon.jpg';
import ploughmansPotPieImg from '../assets/menu-images/menu-ploughmans-pot-pie.jpg';
import boarSausagesImg from '../assets/menu-images/menu-boar-sausages.jpg';
import porkRoastImg from '../assets/menu-images/menu-pork-roast.jpg';
import barleyPottageImg from '../assets/menu-images/menu-barley-pottage.jpg';
import darkAleImg from '../assets/menu-images/menu-dark-ale.jpg';
import meadImg from '../assets/menu-images/menu-mead.jpg';
import ciderImg from '../assets/menu-images/menu-cider.jpg';
import cordialImg from '../assets/menu-images/menu-cordial.jpg';
import spicedWineImg from '../assets/menu-images/menu-spiced-wine.jpg';

const appetizersData = {
  sectionHeader: 'Appetizers',
  sectionItemsList: 
  [
    {
        name: "Wayfarer's Rye Bread",
        price: 6,
        desc: "Thick slices of hearty dark rye bread served warm with churned herb butter and coarse salt. Perfect for starting your journey.",
        imgUrl: ryeBreadImg,
        imgAlt: "Slices of dark rye bread on a wooden board with a pat of herb butter."
    },
    {
        name: "Cheese Monger's Plank",
        price: 10,
        desc: "A selection of local hard and soft cheeses, served with dried fruits, nuts, and crusty oatcakes. A taste of the village larder.",
        imgUrl: cheesePlankImg,
        imgAlt: "Wooden plank with various cheeses, grapes, walnuts, and rustic crackers."
    },
    {
        name: "Roasted Root Medley",
        price: 7,
        desc: "A warm bowl of seasonal root vegetables like carrots, parsnips, and beets, roasted with thyme and garlic. Simple and satisfying.",
        imgUrl: roastedRootsImg,
        imgAlt: "Bowl of colorful roasted root vegetables, slightly caramelized, maybe with herbs sprinkled on top."
    },
    {
        name: "Forager's Mushroom Tartlets",
        price: 9,
        desc: "Small, savory tartlets filled with creamy wild mushrooms and herbs in a flaky pastry crust. A bite of the forest.",
        imgUrl: mushroomTartletsImg,
        imgAlt: "Two or three small, rustic tartlets filled with mushrooms on a plate."
    },
    {
        name: "Smoked River Trout Pâté",
        price: 11,
        desc: "Creamy pâté made from locally smoked trout, served chilled with toasted barley bread. A delicate start from the nearby river.",
        imgUrl: troutPateImg,
        imgAlt: "Small crock of light pink pâté with pieces of toasted dark bread."
    }
  ],
};

const entreesData = {
  sectionHeader: 'Entrees',
  sectionItemsList: 
  [
    {
        name: "Hunter's Venison Stew",
        price: 18,
        desc: "Slow-cooked chunks of tender venison and root vegetables in a rich, dark ale gravy. Served in a bread bowl.",
        imgUrl: venisonStewImg,
        imgAlt: "Thick, dark stew with chunks of meat and vegetables served inside a hollowed-out round loaf of bread."
    },
    {
        name: "Hearth-Roasted Hen",
        price: 19,
        desc: "Half a succulent chicken, rubbed with sage and butter, roasted golden brown over the hearth. Served with roasted potatoes and drippings.",
        imgUrl: roastedHenImg,
        imgAlt: "Golden-brown half roasted chicken on a plate with roasted potatoes."
    },
    {
        name: "Shepherd's Hearty Pie",
        price: 16,
        desc: "Minced lamb and peas simmered in gravy, topped with a crust of mashed parsnips and potatoes. Comfort food for a weary traveler.",
        imgUrl: shepherdsPieImg,
        imgAlt: "Individual shepherd's pie in a ceramic dish with a golden-brown mashed vegetable topping."
    },
    {
        name: "Pan-Seared Salmon",
        price: 21,
        desc: "A generous fillet of salmon, seared crispy-skin-on, served atop wilted greens and drizzled with lemon-herb butter. A catch from the coast.",
        imgUrl: panSearedSalmonImg,
        imgAlt: "Pan-seared salmon fillet with crispy skin, sitting on a bed of dark leafy greens."
    },
    {
        name: "Ploughman's Pot Pie",
        price: 15,
        desc: "A vegetarian delight! Hearty lentils, mushrooms, carrots, and barley baked in a savory vegetable broth under a golden pastry lid.",
        imgUrl: ploughmansPotPieImg,
        imgAlt: "Individual pot pie with a flaky golden crust, showing vegetable filling."
    },
    {
        name: "Boar Sausages & Mash",
        price: 17,
        desc: "Three robust wild boar sausages, grilled and served over creamy mashed turnips and potatoes with a rich onion gravy.",
        imgUrl: boarSausagesImg,
        imgAlt: "Grilled sausages resting on a pile of creamy mashed vegetables, generously drizzled with dark gravy."
    },
    {
        name: "Feastmaster's Pork Roast",
        price: 20,
        desc: "Thick slices of slow-roasted pork shoulder, tender and juicy, served with braised red cabbage and a dollop of spiced apple compote.",
        imgUrl: porkRoastImg,
        imgAlt: "Slices of roasted pork next to vibrant braised red cabbage and a small amount of apple sauce."
    },
    {
        name: "Barley and Mushroom Pottage",
        price: 14,
        desc: "A thick, nourishing pottage made from pearl barley, wild mushrooms, leeks, and herbs. Can be served with optional crumbled bacon.",
        imgUrl: barleyPottageImg,
        imgAlt: "Thick, porridge-like barley dish in a rustic bowl, garnished with herbs or mushrooms."
    }
  ],
};

// Beverages Array
const beveragesData = {
  sectionHeader: 'Beverages',
  sectionItemsList: 
  [
    {
        name: "Village Dark Ale",
        price: 7,
        desc: "A robust, malty dark ale brewed right here in the village tradition. Served cool in a clay tankard.",
        imgUrl: darkAleImg,
        imgAlt: "Frothy dark beer in a rustic earthenware or wooden tankard."
    },
    {
        name: "Golden Honey Mead",
        price: 9,
        desc: "Sweet and warming fermented honey wine, crafted from local wildflower honey. Served slightly chilled.",
        imgUrl: meadImg,
        imgAlt: "Clear, golden liquid in a simple medieval-style goblet or cup."
    },
    {
        name: "Orchard Hard Cider",
        price: 7,
        desc: "Crisp and refreshing dry cider made from a blend of village apples. A tart counterpoint to a hearty meal.",
        imgUrl: ciderImg,
        imgAlt: "Slightly cloudy, pale golden cider in a simple glass or mug."
    },
    {
        name: "Meadowsweet Cordial",
        price: 5,
        desc: "A fragrant, non-alcoholic cordial made from meadowsweet flowers and lemon balm. Served chilled with spring water.",
        imgUrl: cordialImg,
        imgAlt: "Pale yellow, clear liquid in a glass, perhaps garnished with a small flower or mint leaf."
    },
    {
        name: "Spiced Warm Wine",
        price: 8,
        desc: "Red wine gently warmed with cinnamon, cloves, and orange peel. Perfect for a chilly evening (seasonal).",
        imgUrl: spicedWineImg,
        imgAlt: "Dark red wine in a mug or heatproof glass, possibly with a cinnamon stick or orange slice."
    }
  ],
};

export { appetizersData, entreesData, beveragesData };