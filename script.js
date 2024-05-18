document.addEventListener('DOMContentLoaded', function() {
    const beers = [
        {
            name: "HERETIC JUICIER THAN THOU",
            img: "pictures/IPA/HereticJuicierThanThou_2048x.webp",
            style: "IPA",
            flavour: "Citrus",
            ABV: "6.5%",
            details: "Heretic helped make America a little more juicy with their Make America Juicy Again, but some ‘juiceheads’ just can’t get enough. So now they’re making things even more juicy. They’ve upped our game by adding delicious mango and a bit of creamy lactose. This beer is full of juicy hops and juicy tropical fruit. And it could be so juicy, it is juicier than thou."
        },
        {
            name: "Craft Beer 2",
            img: "https://via.placeholder.com/150",
            style: "Stout",
            flavour: "Malty",
            details: "This is a rich stout with malty flavors."
        },
        {
            name: "Craft Beer 3",
            img: "https://via.placeholder.com/150",
            style: "Lager",
            flavour: "Hoppy",
            details: "This is a crisp lager with hoppy notes."
        },
        {
            name: "Craft Beer 4",
            img: "https://via.placeholder.com/150",
            style: "Lager",
            flavour: "Hoppy",
            details: "This is a crisp lager with hoppy notes."
        },
        {
            name: "Craft Beer 5",
            img: "https://via.placeholder.com/150",
            style: "Lager",
            flavour: "Hoppy",
            details: "This is a crisp lager with hoppy notes."
        },
        {
            name: "Craft Beer 6",
            img: "https://via.placeholder.com/150",
            style: "Lager",
            flavour: "Hoppy",
            details: "This is a crisp lager with hoppy notes."
        },
        {
            name: "Craft Beer 7",
            img: "https://via.placeholder.com/150",
            style: "Lager",
            flavour: "Hoppy",
            details: "This is a crisp lager with hoppy notes."
        },
        {
            name: "Craft Beer 8",
            img: "https://via.placeholder.com/150",
            style: "Lager",
            flavour: "Hoppy",
            details: "This is a crisp lager with hoppy notes."
        },
        // Add more beer objects here
    ];

    const beerList = document.getElementById('beer-list');
    const beerDetails = document.getElementById('beer-details');
    const styleFilter = document.getElementById('styleFilter');
    const flavourFilter = document.getElementById('flavourFilter');

    function displayBeers() {
        beerList.innerHTML = '';
        const selectedStyle = styleFilter.value;
        const selectedFlavour = flavourFilter.value;

        const filteredBeers = beers.filter(beer => {
            return (selectedStyle === 'all' || beer.style === selectedStyle) &&
                   (selectedFlavour === 'all' || beer.flavour === selectedFlavour);
        });

        filteredBeers.forEach(beer => {
            const beerItem = document.createElement('div');
            beerItem.className = 'beer-item';
            beerItem.innerHTML = `
                <img src="${beer.img}" alt="${beer.name}">
                <h3>${beer.name}</h3>
                <p>${beer.details}</p>
                <button onclick="showDetails('${beer.name}')">View Details</button>
            `;
            beerList.appendChild(beerItem);
        });
    }

    window.showDetails = function(beerName) {
        const beer = beers.find(b => b.name === beerName);
        beerDetails.innerHTML = `
            <div class="beer-detail-item">
                <img src="${beer.img}" alt="${beer.name}">
                <h3>${beer.name}</h3>
                <p><strong>Style:</strong> ${beer.style}</p>
                <p><strong>Flavour Profile:</strong> ${beer.flavour}</p>
                <p>${beer.details}</p>
            </div>
        `;
    }

    styleFilter.addEventListener('change', displayBeers);
    flavourFilter.addEventListener('change', displayBeers);

    displayBeers();
});
