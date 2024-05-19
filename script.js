document.addEventListener("DOMContentLoaded", () => {
    const beers = [
        {
            name: "Beer 1",
            image: "beer1.jpg",
            type: "Lager",
            volume: "500ml",
            abv: "5%",
            tasteProfile: "Crisp and clean",
            description: "A refreshing lager with a clean taste."
        },
        {
            name: "Beer 2",
            image: "beer2.jpg",
            type: "Ale",
            volume: "330ml",
            abv: "6%",
            tasteProfile: "Fruity and hoppy",
            description: "A fruity ale with a strong hop flavor."
        },
        // Add more beer objects here
    ];

    const topSellingBeersContainer = document.getElementById("top-selling-beers");

    beers.forEach((beer, index) => {
        const beerItem = document.createElement("div");
        beerItem.className = "beer-item";
        beerItem.innerHTML = `
            <img src="${beer.image}" alt="${beer.name}">
            <h3>${beer.name}</h3>
            <button onclick="viewMore(${index})">View More</button>
        `;
        topSellingBeersContainer.appendChild(beerItem);
    });

    window.viewMore = function(index) {
        localStorage.setItem("selectedBeer", JSON.stringify(beers[index]));
        window.location.href = "beer_details.html";
    }
});
