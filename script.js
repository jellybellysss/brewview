document.addEventListener('DOMContentLoaded', function() {
    const allBeers = [
        {
            name: "Golden Lager",
            img: "./pictures/golden_lager.png",
            style: "Lager",
            flavour: "Malty",
            ABV: "5%",
            details: "A smooth and refreshing lager with a perfect balance of malt and hops."
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
            details: "An exotic IPA with tropical fruit aromas and a refreshing citrus finish."
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
        const selectedStyle = styleFilter.value;
        const selectedFlavour = flavourFilter.value;

        beerList.innerHTML = '';
        const filteredBeers = beers.filter(beer => {
            return (selectedStyle === 'all' || beer.style === selectedStyle) &&
                   (selectedFlavour === 'all' || beer.flavour === selectedFlavour);
        });

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
            <img src="${beer.img}" alt="${beer.name}">
            <h3>${beer.name}</h3>
            <p>Style: ${beer.style}</p>
            <p>Flavour: ${beer.flavour}</p>
            <p>ABV: ${beer.ABV}</p>
            <p>${beer.details}</p>
        `;
        detailsSection.style.display = 'block';
        beerList.style.display = 'none';
    }

    
    window.goBack = function() {
        detailsSection.style.display = 'none';
        beerList.style.display = 'flex';
    }

    styleFilter.addEventListener('change', () => displayBeers(allBeers));
    flavourFilter.addEventListener('change', () => displayBeers(allBeers));

    displayBeers(allBeers);
});
