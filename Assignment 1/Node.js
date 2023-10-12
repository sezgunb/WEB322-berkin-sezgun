const lights = [
    {colour: "Red", duration: 5000},
    {colour: "Yellow", duration: 2000},
    {colour: "Green", duration: 5000}
];

let colourID = 0;

function changeColour() {
    console.log(lights[colourID].colour);
    colourID++;

    if (colourID === lights.length) {
        colourID = 0;
    }

    console.log("The light just changed");

    setTimeout(changeColour, lights[colourID].duration);
}

changeColour();