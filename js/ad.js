const ads = [
    {
        img: 'patreon-structurizr.png',
        href: 'https://patreon.com/structurizr',
        expiry: new Date('2026-12-31'),
        targets: [ 'structurizr', 'simonbrown' ]
    },
    {
        img: 'patreon-c4model.png',
        href: 'https://patreon.com/c4model',
        expiry: new Date('2026-12-31'),
        targets: [ 'c4model', 'simonbrown' ]
    },
    {
        img: 'trifork-nl.png',
        href: 'https://trifork.nl/academy/our-courses/software-architecture-for-developers/',
        expiry: new Date('2025-11-11'),
        targets: [ 'structurizr', 'c4model', 'simonbrown' ]
    },
    {
        img: 'yow-melbourne.png',
        href: 'https://yowcon.com/melbourne-2025/masterclasses/541/visualising-software-architecture-with-the-c4-model',
        expiry: new Date('2025-12-02'),
        targets: [ 'structurizr', 'c4model', 'simonbrown' ]
    },
    {
        img: 'yow-sydney.png',
        href: 'https://yowcon.com/sydney-2025/masterclasses/542/visualising-software-architecture-with-the-c4-model',
        expiry: new Date('2025-12-09'),
        targets: [ 'structurizr', 'c4model', 'simonbrown' ]
    }
];

function showAd(id, target) {
    try {
        const baseUrl = 'https://simonbrown.je';

        var ad;
        if (target === undefined) {
            while (ad === undefined || ad.expiry < new Date()) {
                const randomNumber = Math.floor(Math.random() * ads.length);
                ad = ads[randomNumber];
            }
        } else {
            while (ad === undefined || ad.expiry < new Date() || ad.targets.indexOf(target) === -1) {
                const randomNumber = Math.floor(Math.random() * ads.length);
                ad = ads[randomNumber];
            }
        }

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
        mainContentElement.insertBefore(a, mainContentElement.firstChild);
    } catch (e) {
        log.warn(e);
    }
}