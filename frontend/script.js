function fetchBurnedBeers(){
    const beersdata =
    {
        "id": "beers",
        "logo": "Best Beers",
        "button": "details",
        "cards": [
            {
                "title": "Mango Bay",
                "sub": "Mad Scientist Beer",
                "text": "Pale Ale - American"
            },
            {
                "title": "Távoli Galaxis",
                "sub": "Rothbeer Brewery",
                "text": "IPA - American"
            },
            {
                "title": "Flying Rabbit AIPA",
                "sub": "MONYO Brewing Co.",
                "text": "IPA - American"
            },
            {
                "title": "Liquid Cocaine",
                "sub": "Mad Scientist Beer",
                "text": "IPA - Imperial"
            },
            {
                "title": "Organic Chocolate Stout",
                "sub": "Samuel Smith Old Brewery",
                "text": "Stout - English"
            },
            {
                "title": "Bracia",
                "sub": "Thornbridge Brewery",
                "text": "Strong Ale - English"
            },
            {
                "title": "Oatmeal Stout",
                "sub": "Samuel Smith Old Brewery",
                "text": "Stout - Oatmeal"
            },
            {
                "title": "Black Tokyo Horizon",
                "sub": "BrewDog",
                "text": "Stout - American Imperial"
            },
            {
                "title": "Vintage Ale",
                "sub": "Fuller's",
                "text": "Old Ale"
            },
            {
                "title": "All the Leaves are Brown",
                "sub": "Tempest Brewing Company",
                "text": "Brown Ale - American"
            }
        ]
    };

    return beersdata;
}

async function fetchBeers(){
    const res = await fetch("./frontend/data/data.json");
    const resJson = await res.json(res);
    console.log(resJson);
    return resJson;
}

function cardComponent({title, sub, text}, buttonText, key){
    return `
        <div class="beer" data-key="${key}">
            <!--<div class="circle">${key}</div>-->            
            <h2>${title}</h2>
            <div class="details">
                <h3>${sub}</h3>
                <h4>${text}</h4>
            </div>
            <div class="button">
                <div class="details-text">${buttonText}</div>
                <span class="material-icons">arrow_forward</span><!--e5c8-->
            </div>
        </div>
    `;
}

function beersComponent(beers, buttonText){
    return `
        <section class="beers">
            ${beers.map((beer, index) => cardComponent(beer, buttonText, index+1)).join('')}
        </section>
    `;
}

function header(){
    return `
        <header>
            <h2 class="title">Best Beers<h2>
            <button>
                <h2><span class="material-icons">menu</span><h2>
            </button>
        </header>
    `;
}

async function loadEvent(){

    const beersData = await fetchBeers();
    console.log(beersData);

    // console.log(beers);

    // const beersData = fetchBurnedBeers();

    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML('beforeend', header());
    rootElement.insertAdjacentHTML('beforeend', beersComponent(beersData.cards, beersData.button));

}

window.addEventListener("load", loadEvent);