document.addEventListener('DOMContentLoaded', function() {
    const beerList = document.getElementById('beer-list');
    const detailsSection = document.getElementById('details');
    const beerDetails = document.getElementById('beer-details');

    function showDetails(beerName) {
        const beerItem = document.querySelector(`.beer-item[data-name="${beerName}"]`);
        const beerStyle = beerItem.getAttribute('data-style');
        const beerFlavour = beerItem.getAttribute('data-flavour');
        const beerABV = beerItem.getAttribute('data-abv');
        const beerDetailsText = beerItem.getAttribute('data-details');

        beerDetails.innerHTML = `
            <img src="${beerItem.querySelector('img').src}" alt="${beerName}">
            <h3>${beerName}</h3>
            <p>Style: ${beerStyle}</p>
            <p>Flavour: ${beerFlavour}</p>
            <p>ABV: ${beerABV}</p>
            <p>${beerDetailsText}</p>
        `;
        detailsSection.style.display = 'block';
        beerList.style.display = 'none';
    }

    window.goBack = function() {
        detailsSection.style.display = 'none';
        beerList.style.display = 'block';
    }

    const viewMoreButtons = document.querySelectorAll('.beer-item button');
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const beerName = this.parentNode.getAttribute('data-name');
            showDetails(beerName);
        });
    });
});
