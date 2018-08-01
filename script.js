const BEERS = [];
function BeerConstructor(name, category) {
    this.beerName = name;
    this.beerCategory = category;
};
function addBeer(name, category) {
    let beerObject = new BeerConstructor(name, category);
    BEERS.push(beerObject);
};
function renderBeers() {
    $('.beers-list').find('li').remove();
    for (let i = 0 ; i<BEERS.length; i++) {
        $('ul.beers-list').append(('<li>'));
        $('li').text(BEERS[i].beerName+" " + BEERS[i].beerCategory);
    }
};
$('.post-beer').click(function () {
    addBeer($('#beer-value').val(), $('#category-value').val());
    renderBeers();
});
