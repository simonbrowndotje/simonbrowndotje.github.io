const ads = [
    // {
    //     img: 'patreon-structurizr.png',
    //     href: 'https://patreon.com/structurizr',
    //     expiry: new Date('2026-12-31'),
    //     targets: [ 'structurizr', 'simonbrown' ]
    // },
    // {
    //     img: 'patreon-c4model.png',
    //     href: 'https://patreon.com/c4model',
    //     expiry: new Date('2026-12-31'),
    //     targets: [ 'c4model', 'simonbrown' ]
    // },
    {
        img: 'book.png',
        href: 'https://www.oreilly.com/library/view/the-c4-model/9798341660113/',
        expiry: new Date('2026-12-31'),
        targets: [ 'c4model', 'structurizr' ]
    },
    // {
    //     img: 'structurizr.png',
    //     href: 'https://docs.structurizr.com',
    //     expiry: new Date('2026-12-31'),
    //     targets: [ 'c4model', 'simonbrown' ]
    // },
    {
        img: 'trifork-nl.png',
        href: 'https://trifork.nl/academy/our-courses/software-architecture-for-developers/',
        expiry: new Date('2026-05-11'),
        targets: [ 'structurizr', 'c4model', 'simonbrown' ]
    },
    // {
    //     img: 'goto-cph.png',
    //     href: 'https://gotocph.com/2026/masterclasses/583/2-days-software-architecture-for-developers',
    //     expiry: new Date('2026-09-27'),
    //     targets: [ 'structurizr', 'c4model', 'simonbrown' ]
    // },
    // {
    //     img: 'sa4d-workshop.png',
    //     href: 'https://simonbrown.je/workshops',
    //     expiry: new Date('2026-12-31'),
    //     targets: [ 'structurizr', 'c4model', 'simonbrown' ]
    // },
    {
        img: 'c4-workshop.png',
        href: 'https://simonbrown.je/workshops',
        expiry: new Date('2026-12-31'),
        targets: [ 'structurizr', 'c4model', 'simonbrown' ]
    }
];

function showAd(id, target) {
    try {
        const baseUrl = 'https://simonbrown.je';

        const possibleAds = [];
        ads.forEach(function(ad) {
            if (target === undefined || ad.targets.indexOf(target) > -1) {
                if (new Date() < ad.expiry) {
                    possibleAds.push(ad);
                }
            }
        });

        if (possibleAds.length > 0) {
            const randomNumber = Math.floor(Math.random() * possibleAds.length);
            const ad = possibleAds[randomNumber];

            const img = document.createElement('img');
            img.src = baseUrl + '/img/ads/' + ad.img;
            img.style.width = '728px';
            img.style.borderRadius = '5px';
            img.style.border = 'solid 1px black';

            const a = document.createElement('a');
            a.href = ad.href;
            a.target = '_blank';
            a.append(img);

            const mainContentElement = document.getElementById(id);
            if (mainContentElement) {
                mainContentElement.insertBefore(a, mainContentElement.firstChild);
            }
        }
    } catch (e) {
        console.log(e);
    }
}