"use strict"

function renderCoffee(coffee) {
    var html = `<div class="coffee col-6">`;
    html += '<p class="d-none">' + coffee.id + '</p>';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p style="color: #999799; ">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// Loop from last element to first then add to html file.
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function updateCoffees(e) {
    event.preventDefault(); // don't submit the form, we just want to update the data



// Assigned empty array to have elements inserted into through loop.
    var filteredCoffees = [];

// Store querySelector for " #roast-selection " = (User's drop Menu selection's input(light, medium, dark)) with " .value "....
    var selectedRoast = roastSelection.value;

// Cycle Through each element in coffees Array, Assigned coffee parameter inside the function ....
    coffees.forEach(function (coffee) {
// ...and search for type of (selectedRoast) through <p> tag ( light , medium, dark) from (coffee.roast)
//    or    ...and search for the type of name equals to the string ("all") inside of select class.
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
//push all the selected option gathered from user's selection into blank filteredCoffee array [].
            filteredCoffees.push(coffee);
        }

    });
//Write to Html file once everything is stored inside updateCoffees function.
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

var roastSelection = document.querySelector('#roast-selection');

//Add Event Listener for when drop menu is changed then execute updateCoffee function.

roastSelection.addEventListener("change", updateCoffees);

// ASSIGN VARIABLE TO THE LIST OF ALL COFFEES IN COFFEE ARRAY
var tbody = document.querySelector('#coffees');


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var submitButton = document.querySelector('#submit');


//Since renderCoffee writes to page from last to first, add .reverse() to sort the "id".
// write to the file at the end of the function.
tbody.innerHTML = renderCoffees(coffees.reverse());


// FILTER COFFEE NAMES AS USER INPUT TO SEARCH BAR...
let coffeeInput = document.getElementById("search");

coffeeInput.addEventListener('keyup', function () {
    let search = coffeeInput.value;

    let searchFilter = coffees.filter(coffee => {
        return coffee.name.toLowerCase().includes(search.toLowerCase()) || coffee.roast.toLowerCase().includes(search.toLowerCase());
    });
    tbody.innerHTML = renderCoffees(searchFilter);
})

// ADDING A NEW COFFEE...
let addingCoffee = (e) => {

    e.preventDefault();

    let selectedRoast = newRoastInput.value;
    let coffeeName = newCoffee.value;
    let coffeeID = coffees.length + 1;

    let coffeeToAdd = {id: coffeeID, name: coffeeName, roast: selectedRoast};

    coffees.push(coffeeToAdd);

    updateCoffees();
}

let newRoastInput = document.getElementById('new-roast-selection');
let newCoffee = document.getElementById('submitCoffee');
let submitNewCoffees = document.getElementById("submitNew");


submitNewCoffees.addEventListener('click', addingCoffee);
submitButton.addEventListener('change', updateCoffees);

// -------------music player-------------
var music= document.getElementById("music");
var icon= document.getElementById("icon");

var iconplay = function() {
    if (music.paused){
        music.play();
        icon.src ="/files/pause.png"
    }else {
        music.pause();
        icon.src = "/files/play.png"
    }};