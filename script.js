// The code begins with an event listener that waits for the entire document to be loaded before executing the enclosed functions. This ensures that all elements are available in the DOM when the script runs.

// An array allBeers contains objects representing different beers. Each beer object includes properties such as name, img (image path), style, flavour, ABV, details, and top.

document.addEventListener('DOMContentLoaded', function() {
    const allBeers = [
        {
            name: "BEAR REPUBLIC RIVER ROAD",
            img: "/pictures/IPA/BEARREPUBLICRIVERROAD.webp",
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
            flavour:["Light & Easy Going","Fruity & Juicy"],
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
            name: "REVISION REEFER TRUCK",
            img: "/pictures/IPA/RevisionReeferTruck.webp",
            style: "IPA",
            flavour: "Bold & Bitter",
            ABV: "6.5%",
            details: "A collaboration brew with Cellarmaker Brewing Company. With a shared love of hops and dedication to drinkability, we teamed up with Cellarmaker Brewing to create an IPA with truckloads of hoppiness without super harsh edges. Hopped with Nelson Sauvin™, Cashmere and Simcoe® CRYO HOPS® Reefer Truck delivers notes of sweet pine, lychee, mandarin and gooseberry with an easy-drinking body and crisp finish. You know, for that cotton mouth."
        },
        {
            name: "STONE RUINATION",
            img: "/pictures/IPA/StoneRuination.webp",
            style: "IPA",
            flavour: "Bold & Bitter",
            ABV: "8.2%",
            details: "Wonderfully delicious and intensely bitter flavor on a refreshing malt base. Those who seek, crave and rejoice in beers with big, bold, bitter character will find true nirvana."
        },
        {
            name: "REVISION CITRA SLAM",
            img: "pictures/IPA/RevisionCitraSlam.webp",
            style: "IPA",
            flavour: "Medium & Balanced",
            ABV: "6.5%",
            details: "Creating a flavour crater of awesomeness, this West Coast IPA hopped exclusively with the one and only Citra® hop is built for enjoyment. Tropically sweet hop flavours and aromas bring to mind ripe tangerine with an edge of passionfruit. Go ahead and crush it, gulp it, guzzle it, slam it. "
        },
        {
            name: "THE 1925 SMALL MONSTER",
            img: "pictures/IPA/The1925SmallMonsterSessionIPA.webp",
            style: "IPA",
            flavour: "Light & Easy Going",
            ABV: "4.8%",
            details: "A session-able IPA brewed with a combination of up to 3 different types of hops. A robust ale with a smooth mouth feel which finishes with the lingering notes of hops and mild dryness. Despite its style, the Small Monster is an IPA designed to quench the thirst of any avid drinker."
        },
        {
            name: "NORTH COAST OLD RASPUTIN RUSSIAN IMPERIAL STOUT",
            img: "pictures/Stout/northcoastoldrasputin.webp",
            style: "Stout",
            flavour: "Bold & Bitter",
            ABV: "9.0%",
            details: "Produced in the tradition of 18th Century English brewers who supplied the court of Russia’s Catherine the Great, Old Rasputin seems to develop a cult following wherever it goes. It’s a rich, intense brew with big complex flavors and a warming finish. The Old Rasputin brand image is a drawing of Rasputin with a phrase in Russian encircling it — A sincere friend is not born instantly."
        },
        {
            name: "LERVIG TOASTED MAPLE STOUT",
            img: "pictures/Stout/LervigToastedMapleStout.webp",
            style: "Stout",
            flavour: "Bold & Bitter",
            ABV: "12.0%",
            details: "Toasted Maple Stout is an Imperial Stout brewed with maple syrup, vanilla, lots of dark roasted toasty malts and a touch of lactose for the finishing touch."
        },
        {
            name: "PUHASTE WALKING FANTASY",
            img: "pictures/Stout/PuhasteWalkingFantasy.webp",
            style: "Stout",
            flavour: "Bold & Bitter",
            ABV: "12.0%",
            details: "Imperial stout brewed with Tonka beans and Ceylon cinnamon."
        },
        {
            name: "THE 1925 KAYA TOAST STOUT",
            img: "pictures/Stout/The1925KayaToastStout.webp",
            style: "Stout",
            flavour: "Medium & Balanced",
            ABV: "4.3%",
            details: "This stout is brewed using surplus fresh bread provided by Redmart. Kaya Toast Stout is a collaboration beer proudly brewed locally by The 1925 Brewing Co. and Crust. Enjoy the sweet aromas of pandan and coconut, followed by the light caramel profile of bread and creaminess and roasted notes of the stout. A traditional dish served non-traditionally, this beer is essentially a Singaporean breakfast in a bottle!",
            top: true
        },
        {
            name: "ANDERSON VALLEY TROPICAL HAZY SOUR ALE",
            img: "pictures/Sour/TropicalHazySourAle.webp",
            style: "Sour",
            flavour:["Fruity & Juicy","Light & Easy Going"],
            ABV: "4.2%",
            details: "This tropical hazy sour ale is brewed using traditional kettle souring recipes. Tropical flavours such as guava and passionfruit are introduced during the fermentation process. The haziness creates an aromatic beer that is perfectly balanced. As a bonus, this beer is low in carbs and calories."
        },
        {
            name: "DESCHUTES CATHARINA GUAVA SOUR",
            img: "pictures/Sour/DeschutesCatharinaGuavaSour.webp",
            style: "Sour",
            flavour:["Tart & Sour"],
            ABV: "5.0%",
            details: "Flavour starts fruity and tropical and finishes with a refreshing acidity. This sour ale is brewed with real Guava and Raspberry puree. Catharina Sour is a Latin American beer style originally from Brazil with additions of bright tropical fruit."
        },
        {
            name: "VAULT CITY STRAWBERRY SUNDAE",
            img: "pictures/Sour/VaultCityStrawberrySundae.webp",
            style: "Sour",
            flavour:["Tart & Sour","Light & Easy Going"],
            ABV: "5.0%",
            details: "Strawberries and Vault City go hand in hand, and this delightful sour is strawberries and cream in a glass. Sweet and juicy Scottish strawberries pair perfectly with our sour base beer to create something smooth and full bodied. You can expect mouth-watering flavours of traditional strawberries and cream with the addition of lactose and smooth vanilla."
        },
        {
            name: "MOUNTAIN CULTURE STATUS QUO",
            img: "pictures/PaleAle/MountainCultureStatusQuo.webp",
            style: "Pale Ale",
            flavour:["Fruity & Juicy","Light & Easy Going"],
            ABV: "5.2%",
            details: "Status Quo is a juicy New England Pale Ale. Made for hop lovers with massive late and dry hop additions, it's full flavoured and more tropical than the Hawaiian ukulele orchestra."
        },
        {
            name: "SWEETWATER 420 XPA",
            img: "pictures/PaleAle/Sweetwater420XPA.webp",
            style: "Pale Ale",
            flavour:["Hoppy & Aromatic","Light & Easy Going"],
            ABV: "5.7%",
            details: "Our most popular brew! First brewed on April 20th 1997, this tasty West Coast style Extra Pale Ale is accentuated with a stimulating hop character and a crisp finish. First conceived in our bat cave on 4/20, this kind of beer keeps the wheels on the bus going round and round!"
        },
        {
            name: "THE 1925 YELLOW VAN",
            img: "pictures/PaleAle/The1925YellowVanPaleAle.webp",
            style: "Pale Ale",
            flavour:["Light & Easy Going"],
            ABV: "4.8%",
            details: "Brewed primarily with the Citra hops. Designed to be a session beer, the pale ale seeks a delicate balance between both hops and malt. It brings familiarity, yet never fails to surprise the palate with the subtle bursts of Citra. Pours well with a fully formed head of foam and is probably the most versatile beer to pair with any foods."
        },
        {
            name: "LION CITY SPICED MEAD",
            img: "pictures/IPA/lion-city_Spiced-Mead.webp",
            style: "Mead and Ale",
            flavour:["Light & Easy Going", "Medium & Balanced"],
            ABV: "5.5%",
            details: "A homage to the masala chai, this clear blonde mead is a pleasant surprise with its taste profile and complex long finish. Spices like cinnamon, cloves, and star anise were roasted whole and fermented with a custom blend of eucalyptus honey. Best savoured chilled and in a glass.Took home Silver in Category and Best of Singapore at Beerfest Asia 2019.",
            top: true
        },
        {
            name: "LION CITY HIBISCUS & BLUEBERRY MEAD",
            img: "pictures/IPA/lion-city_Hibiscus-Blueberry-Mead.webp",
            style: "Mead and Ale",
            flavour:["Light & Easy Going", "Fruity & Juicy"],
            ABV: "5.5%",
            details: "Hibiscus tea - whole dried flowers are steeped to extract the flavour and colour - is fermented with a custom blend of eucalyptus honey, then finished with both whole-crushed and pureed blueberries. The result? A tannin-rich, floral mead with a dry wine-like finish that is excellent with any meal consisting of red meat. Dark crimson, it's lovely in both sight and taste."
        },

    ];


  // Get the element where the list of beers will be shown
  const beerList = document.getElementById('beer-list');
  // Get the section where detailed information about a beer will be shown
  const detailsSection = document.getElementById('details');
  // Get the element where beer details will be placed
  const beerDetails = document.getElementById('beer-details');
  // Get the dropdown for filtering by style
  const styleFilter = document.getElementById('styleFilter');
  // Get the dropdown for filtering by flavour
  const flavourFilter = document.getElementById('flavourFilter');
  // Get the search input box
  const searchInput = document.getElementById('searchInput');
  // Get the search button
  const searchButton = document.getElementById('searchButton');


   // Function to display the list of beers based on filters or search
    function displayBeers(beers) {
        // Get the selected style from the dropdown
        const selectedStyle = styleFilter && styleFilter.value;
        // Get the selected flavour from the dropdown
        const selectedFlavour = flavourFilter && flavourFilter.value;

        //incase the code below breaks, this is my original code for without the multiple flavour filter.
        // beerList.innerHTML = '';
        // let filteredBeers;
        // if (selectedStyle && selectedFlavour) {
        //     filteredBeers = beers.filter(beer => {
        //         return (selectedStyle === 'all' || beer.style === selectedStyle) &&
        //                (selectedFlavour === 'all' || beer.flavour === selectedFlavour);
        //     });
        // } else {
        //     filteredBeers = beers.filter(beer => {
        //         return beer.top
        //     })
        // }
        
        // Clear the current list of beers
        beerList.innerHTML = '';
        let filteredBeers;
        if (selectedStyle && selectedFlavour) {
            // Filter beers by both style and flavour
            filteredBeers = beers.filter(beer => {
                return (selectedStyle === 'all' || beer.style === selectedStyle) &&
                       (selectedFlavour === 'all' || beer.flavour.includes(selectedFlavour));
            });
        } else if (selectedStyle) {
            // Filter beers by style only
            filteredBeers = beers.filter(beer => selectedStyle === 'all' || beer.style === selectedStyle);
        } else if (selectedFlavour) {
            // Filter beers by flavour only
            filteredBeers = beers.filter(beer => selectedFlavour === 'all' || beer.flavour.includes(selectedFlavour));
        } else {
             // Show top-rated beers if no filters are selected
            filteredBeers = beers.filter(beer =>{
                return beer.top
            })
        }
        // For each filtered beer, create a little box with its picture, name, and a button for details
        filteredBeers.forEach(beer => {
            const beerItem = document.createElement('div');
            beerItem.classList.add('beer-item');
            beerItem.innerHTML = `
                <img src="${beer.img}" alt="${beer.name}">
                <h3>${beer.name}</h3>
                <p>${beer.style}</p>
                <button onclick="showDetails('${beer.name}')">View More</button>
            `;
            beerList.appendChild(beerItem);
        });
    }

   
 // Function to show detailed information about a beer
    window.showDetails = function(beerName) {
    // Find the beer by its name
        const beer = allBeers.find(b => b.name === beerName);
    // Display detailed information about the beer
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
    // Show the details section and hide the beer list
        detailsSection.style.display = 'block';
        beerList.style.display = 'none';
    }

    // The searchBeers function filters beers based on a search query entered by the user. It checks if the beer name includes the search query (case-insensitive).
    // Function to search beers by name
    function searchBeers(query) {
         // Find beers that match the search query
        const lowercaseQuery = query.toLowerCase();
        const filteredBeers = allBeers.filter(beer => {
            // Display the matched beers
            return beer.name.toLowerCase().includes(lowercaseQuery);
        });
        displayBeers(filteredBeers);
    }

    // Event listener for search button click and pressing Enter in the search input field
     // Function to handle search actions
    function handleSearch() {
        const searchQuery = searchInput.value.trim();
        if (searchQuery!==''){
        // If there's a search query, search for beers
        searchBeers(searchQuery);
        }
    }
    // Function to go back to the beer list from the details view
        window.goBack = function() {
        detailsSection.style.display = 'none';
        beerList.style.display = 'flex';
    }

    // Add event listeners to filters and search components
    styleFilter && styleFilter.addEventListener('change', () => displayBeers(allBeers));
    flavourFilter && flavourFilter.addEventListener('change', () => displayBeers(allBeers));

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is Enter
        if (event.key === 'Enter') {
            // Prevent the default Enter key behavior (e.g., form submission)
            event.preventDefault();
            // Call the handleSearch function
            handleSearch();
        }
    });

    // Calls displayBeers with the full list of beers to initialize the display when the page loads.
    displayBeers(allBeers);

});