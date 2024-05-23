document.addEventListener('DOMContentLoaded', function() {
    const allBeers = [
        {
            name: "BEAR REPUBLIC RIVER ROAD",
            img: "/pictures/IPA/BEAR REPUBLIC RIVER ROAD.webp",
            style:"IPA",
            flavour:"Hoppy & Aromatic",
            ABV:"7.5%",
            details: "Introducing River Road IPA, a journey through the West Coast IPA style that captures the spirit of Northern California! A West Coast IPA hopped with Amarillo, Citra, Cascade, El Dorado and Waimea hops.",
            top: true
        },
        {
            name: "DESCHUTES FRESH HAZE",
            img: "/pictures/IPA/DeschutesFreshHaze.webp",
            style:"IPA",
            flavour:"Hoppy & Aromatic",
            ABV:"6.5%",
            details: "Introducing the Deschutes Fresh Haze IPA, a twist on the flagship Fresh Squeezed IPA with a hazy and foggy body. This beer explodes in your mouth with orange and tangerine sweetness, with flaked barley and a soft malt body. Citrus-charged from Mandarina, Amarillo and Cashmere hops, this is orange juice for adults!",
        },
        {
            name: "DESCHUTES FRESH SQUEEZED IPA",
            img: "/pictures/IPA/DeschutesFreshSqueezed.webp",
            style:"IPA",
            flavour:"Hoppy & Aromatic",
            ABV:"6.4%",
            details: "The Deschutes Fresh Squeezed IPA is a mouthwatering and tasty beer that gets its flavour from Citra and Mosaic hops. The citrus and grapefruit gives a fresh aroma as though fresh hops were squeezed right into the bottle! Don't worry, no fruit was harmed in the making of this beer.",
        },
        {
            name: "HERETIC JUICIER THAN THOU",
            img: "/pictures/IPA/HereticJuicierThanThou.webp",
            style:"IPA",
            flavour:"Hoppy & Aromatic",
            ABV:"6.5%",
            details: "Heretic helped make America a little more juicy with their Make America Juicy Again, but some ‘juiceheads’ just can’t get enough. So now they’re making things even more juicy. They’ve upped our game by adding delicious mango and a bit of creamy lactose. This beer is full of juicy hops and juicy tropical fruit. And it could be so juicy, it is juicier than thou.",
            top: true
        },
        {
            name: "KNEE DEEP THUNDER BUDDIES",
            img: "/pictures/IPA/KneeDeepThunderBuddies.webp",
            style:"IPA",
            flavour:"Hoppy & Aromatic",
            ABV:"7.0%",
            details: "Knee Deep Brewing Company's Thunder Buddies Hazy IPA is a behemoth of a beer that embodies the essence of a juicy, hazy IPA. This beer pours a murky, golden-orange hue, reminiscent of a warm summer sunset. The aroma is a tropical explosion, with notes of pineapple, mango, and citrus fruits, tantalizing your senses and beckoning you to take a sip. Made using Rakau, Waimea, Wai-Ti, Huell Melon and Hallertau Blanc hops.",
        },
        {
            name: "Hoppy IPA1",
            img: "./pictures/hoppy_ipa.png",
            style: "IPA",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        {
            name: "Tropical IPA2",
            img: "./pictures/tropical_ipa.png",
            style: "IPA",
            flavour: "Citrus",
            ABV: "7%",
            details: "An exotic IPA with tropical fruit aromas and a refreshing citrus finish.",
            top: true
        },
        {
            name: "Chocolate Stout",
            img: "./pictures/chocolate_stout.png",
            style: "Stout",
            flavour: "Malty",
            ABV: "5.5%",
            details: "A rich stout with deep chocolate flavors and a smooth finish."
        },
        {
            name: "Pale Ale",
            img: "./pictures/pale_ale.png",
            style: "Ale",
            flavour: "Citrus",
            ABV: "5.5%",
            details: "A balanced pale ale with a crisp citrus bite and a hint of malt."
        },
        {
            name: "Amber Ale",
            img: "./pictures/amber_ale.png",
            style: "Ale",
            flavour: "Malty",
            ABV: "6%",
            details: "A smooth amber ale with rich malt flavors and a hint of caramel."
        }
    ];

    const beerList = document.getElementById('beer-list');
    const detailsSection = document.getElementById('details');
    const beerDetails = document.getElementById('beer-details');
    const styleFilter = document.getElementById('styleFilter');
    const flavourFilter = document.getElementById('flavourFilter');

    function displayBeers(beers) {
        const selectedStyle = styleFilter && styleFilter.value;
        const selectedFlavour = flavourFilter && flavourFilter.value;

        beerList.innerHTML = '';
        let filteredBeers;
        if (selectedStyle && selectedFlavour) {
            filteredBeers = beers.filter(beer => {
                return (selectedStyle === 'all' || beer.style === selectedStyle) &&
                       (selectedFlavour === 'all' || beer.flavour === selectedFlavour);
            });
        } else {
            filteredBeers = beers.filter(beer => {
                return beer.top
            })
        }

        filteredBeers.forEach(beer => {
            const beerItem = document.createElement('div');
            beerItem.classList.add('beer-item');
            beerItem.innerHTML = `
                <img src="${beer.img}" alt="${beer.name}">
                <h3>${beer.name}</h3>
                <p>${beer.flavour}</p>
                <button onclick="showDetails('${beer.name}')">View More</button>
            `;
            beerList.appendChild(beerItem);
        });
    }

    window.showDetails = function(beerName) {
        const beer = allBeers.find(b => b.name === beerName);
        beerDetails.innerHTML = `
        <div class="details-container">
            <img src="${beer.img}" alt="${beer.name}" class="small-image">
            <div>
                <h3>${beer.name}</h3>
                <p><strong>Style:</strong> ${beer.style}</p>
                <p><strong>Flavour:</strong> ${beer.flavour}</p>
                <p><strong>ABV:</strong> ${beer.ABV}</p>
                <p><strong>Details:</strong> ${beer.details}</p>
            </div>
        </div>
        `;
        detailsSection.style.display = 'block';
        beerList.style.display = 'none';
    }

    
    window.goBack = function() {
        detailsSection.style.display = 'none';
        beerList.style.display = 'flex';
    }

    styleFilter && styleFilter.addEventListener('change', () => displayBeers(allBeers));
    flavourFilter && flavourFilter.addEventListener('change', () => displayBeers(allBeers));

    displayBeers(allBeers);

});
