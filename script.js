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
            name: "Hoppy IPA2",
            img: "./pictures/hoppy_ipa.png",
            style: "Stout",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        {
            name: "Golden Lager2",
            img: "./pictures/golden_lager.png",
            style: "Lager",
            flavour: "Malty",
            ABV: "5%",
            details: "A smooth and refreshing lager with a perfect balance of malt and hops."
        },
        {
            name: "Stout",
            img: "./pictures/golden_lager.png",
            style: "Stout",
            flavour: "Malty",
            ABV: "5%",
            details: "A smooth and refreshing lager with a perfect balance of malt and hops."
        },
        {
            name: "Citrus Eg",
            img: "./pictures/golden_lager.png",
            style: "Lager",
            flavour: "Citrus",
            ABV: "5%",
            details: "A smooth and refreshing lager with a perfect balance of malt and hops."
        },
        {
            name: "Golden Lager456",
            img: "./pictures/golden_lager.png",
            style: "Stout",
            flavour: "Hoppy",
            ABV: "5%",
            details: "A smooth and refreshing lager with a perfect balance of malt and hops."
        },
        {
            name: "Another example",
            img: "./pictures/golden_lager.png",
            style: "IPA",
            flavour: "Citrus",
            ABV: "5%",
            details: "A smooth and refreshing lager with a perfect balance of malt and hops."
        },
        // Add more beer objects as needed
    ];

    const beerList = document.getElementById('beer-list');
    const styleFilter = document.getElementById('styleFilter');
    const flavourFilter = document.getElementById('flavourFilter');

    function displayBeers(beers) {
        beerList.innerHTML = '';
        const selectedStyle = styleFilter.value;
        const selectedFlavour = flavourFilter.value;

        const filteredBeers = beers.filter(beer => {
            const styleMatch = selectedStyle === 'all' || beer.style === selectedStyle;
            const flavourMatch = selectedFlavour === 'all' || beer.flavour === selectedFlavour;
            return styleMatch && flavourMatch;
        });

        filteredBeers.forEach(beer => {
            const beerItem = document.createElement('div');
            beerItem.className = 'beer-item';
            beerItem.innerHTML = `
                <img src="${beer.img}" alt="${beer.name}">
                <h3>${beer.name}</h3>
                <p>${beer.flavour}</p>
                <button onclick="showDetails('${beer.name}', '${beer.img}', '${beer.style}', '${beer.flavour}', '${beer.ABV}', '${beer.details}')">View More</button>
            `;
            beerList.appendChild(beerItem);
        });
    }

    function showDetails(name, img, style, flavour, ABV, details) {
        const beer = { name, img, style, flavour, ABV, details };
        localStorage.setItem("selectedBeer", JSON.stringify(beer));
        window.location.href = "Pages/beer_details.html";
    }

    function goBack() {
        window.location.href = "Pages/beer_discovery.html";
    }

    if (window.location.pathname === '/index.html') {
        // Homepage logic
        const topSellingBeers = allBeers.filter(beer => 
            beer.name === "Golden Lager456" || 
            beer.name === "Another example" || 
            beer.name === "Stout"
        ); // Select top selling beers
        topSellingBeers.forEach(beer => {
            const beerItem = document.createElement('div');
            beerItem.className = 'beer-item';
            beerItem.innerHTML = `
                <img src="${beer.img}" alt="${beer.name}">
                <h3>${beer.name}</h3>
                <p>${beer.flavour}</p>
                <button onclick="showDetails('${beer.name}', '${beer.img}', '${beer.style}', '${beer.flavour}', '${beer.ABV}', '${beer.details}')">View More</button>
            `;
            beerList.appendChild(beerItem);
        });
    } else {
        // Beer discovery page logic
        styleFilter.addEventListener('change', function() {
            displayBeers(allBeers);
        });
        
        flavourFilter.addEventListener('change', function() {
            displayBeers(allBeers);
        });

        displayBeers(allBeers);

        const backButton = document.getElementById('back-button');
        if (backButton) {
            backButton.addEventListener('click', goBack);
        }
    }
});
