document.addEventListener('DOMContentLoaded', function() {
    const beers = [
        {
            name: "Golden Lager",
            img: "./pictures/golden_lager.png",
            style: "Lager",
            flavour: "Malty",
            ABV: "5%",
            details: "A smooth and refreshing lager with a perfect balance of malt and hops."
        },
        {
            name: "Hoppy IPA",
            img: "./pictures/hoppy_ipa.png",
            style: "IPA",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        {
            name: "Hoppy IPA",
            img: "./pictures/hoppy_ipa.png",
            style: "IPA",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        {
            name: "Hoppy IPA",
            img: "./pictures/hoppy_ipa.png",
            style: "IPA",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        {
            name: "Hoppy IPA",
            img: "./pictures/hoppy_ipa.png",
            style: "IPA",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        {
            name: "Hoppy IPA",
            img: "./pictures/hoppy_ipa.png",
            style: "IPA",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        {
            name: "Hoppy IPA",
            img: "./pictures/hoppy_ipa.png",
            style: "IPA",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        {
            name: "Hoppy IPA",
            img: "./pictures/hoppy_ipa.png",
            style: "IPA",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        {
            name: "Hoppy IPA",
            img: "./pictures/hoppy_ipa.png",
            style: "IPA",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        {
            name: "Hoppy IPA",
            img: "./pictures/hoppy_ipa.png",
            style: "IPA",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        {
            name: "Hoppy IPA",
            img: "./pictures/hoppy_ipa.png",
            style: "IPA",
            flavour: "Hoppy",
            ABV: "6.5%",
            details: "A bold IPA with strong hoppy flavors and a hint of citrus."
        },
        // Add more beer objects as needed
    ];

    const beerList = document.getElementById('home-beer-list');
    const beerDetails = document.getElementById('beer-details');
    const styleFilter = document.getElementById('styleFilter');
    const flavourFilter = document.getElementById('flavourFilter');

    function displayHomeBeers() {
        beerList.innerHTML = '';

        for (let i = 0; i < 8; i++) {
            const beer = beers[i];
            const beerItem = document.createElement('div');
            beerItem.className = 'beer-item';
            beerItem.innerHTML = `
                <img src="${beer.img}" alt="${beer.name}">
                <h3>${beer.name}</h3>
                <p>${beer.flavour}</p>
                <button onclick="showDetails('${beer.name}')">View More</button>
            `;
            beerList.appendChild(beerItem);
        }
    }

    window.showDetails = function(beerName) {
        const beer = beers.find(b => b.name === beerName);
        localStorage.setItem("selectedBeer", JSON.stringify(beer));
        window.location.href = "beer_details.html";
    }

    displayHomeBeers();
});

function goBack() {
    window.location.href = "beer_discovery.html";
}

displayBeerDetails();
backButton.addEventListener('click', goBack);
