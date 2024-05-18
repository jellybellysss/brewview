document.addEventListener('DOMContentLoaded', function() {
    const beers = [
        {
            name: "Craft Beer 1",
            img: "https://via.placeholder.com/150",
            style: "IPA",
            flavour: "Citrus",
            details: "This is a great IPA with citrus notes."
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
        }
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
