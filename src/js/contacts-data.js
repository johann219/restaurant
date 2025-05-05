
//             <section class="content-block">
//                 <h1 class="content-block-header">Send us Your Word</h1>
//                     <p>Should you need to reserve a table for your guild, inquire about lost goblets, or simply share tidings, reach us through these modern contrivances or traditional means:</p>
//                     <p>
//                         <strong>Email:</strong>
//                         <a href="mailto:innkeeper@trebuhovo-village.mock">innkeeper@trebuhovo-village.mock</a>
//                     </p>
//                     <p>
//                         <strong>Phone:</strong>
//                         <a href="tel:+0123-456-7890">+0123-456-7890</a>
//                     </p>
//             </section>

const CONTENT_TYPE_PARA = 'paragraph';
const CONTENT_TYPE_PARA_BOLD = 'paragraph-with-bold';
const CONTENT_TYPE_LIST = 'list';
const CONTENT_TYPE_LIST_ITEM_BOLD = 'list-item-bold';
const CONTENT_TYPE_LIST_ITEM_ITALIC = 'list-item-italic';

const contactsData = [
    {
        header: 'The Path',
        content: [
            {
                type: CONTENT_TYPE_PARA,
                text: 'Our humble Ethno-Village lies 30 km shy away from Stupino. One can take a train to Stupino station and then find a fine carriage that would take him right to our welcoming gates.',
            },
            {
                type: CONTENT_TYPE_PARA_BOLD,
                boldText: 'Our Address:',
                plainText: ' The Trebuhovo Tavern, Moscow Oblast, Russia.',
            },
        ]
    },
    {
        header: 'Hours of Feasting & Revelry',
        content: [
            {
                type: CONTENT_TYPE_PARA,
                text: 'Our hearth is warm and the ale flows freely during these appointed times. Join us when the village bell tolls thusly:',
            },
            {
                type: CONTENT_TYPE_LIST, 
                items: [
                    {
                        type: CONTENT_TYPE_LIST_ITEM_BOLD,
                        boldText: 'Monday:',
                        plainText: ' Closed for preparations',
                    },
                    {
                        type: CONTENT_TYPE_LIST_ITEM_BOLD,
                        boldText: 'Tuesday - Thursday:',
                        plainText: ' 12:00 - 22:00',
                    },
                    {
                        type: CONTENT_TYPE_LIST_ITEM_BOLD,
                        boldText: 'Friday - Saturday:',
                        plainText: ' 16:00 - 08:00',
                    },
                    {
                        type: CONTENT_TYPE_LIST_ITEM_BOLD,
                        boldText: 'Sunday:',
                        plainText: ' 16:00 - 22:00',
                    },
                    {
                        type: CONTENT_TYPE_LIST_ITEM_ITALIC,
                        italicText: '*Hours may vary during village festivals and harsh winter storms!*',
                        plainText: '',
                    },
                ],
            },
        ],
    },
    {
        header: 'Send us Your Word',
        content: [
            {
                type: CONTENT_TYPE_PARA,
                text: 'Should you need to reserve a table for your guild, inquire about lost goblets, or simply share tidings, reach us through these modern contrivances or traditional means:',
            },
            {
                type: CONTENT_TYPE_PARA_BOLD,
                boldText: 'Email:',
                plainText: ' innkeeper@trebuhovo-village.mock',
            },
            {
                type: CONTENT_TYPE_PARA_BOLD,
                boldText: 'Phone:',
                plainText: ' +0123-456-7890',
            },

        ]
    }
];

export { CONTENT_TYPE_LIST, CONTENT_TYPE_LIST_ITEM_ITALIC, CONTENT_TYPE_LIST_ITEM_BOLD, CONTENT_TYPE_PARA, CONTENT_TYPE_PARA_BOLD, contactsData };