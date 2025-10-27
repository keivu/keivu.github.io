let nameBtn = document.querySelector("#js-new-pokemonName").addEventListener('click', newPokemon); //in generate new trivia btn, newTrivia is the function that is run when click

let typesBtn = document.querySelector('#js-pokemontypes').addEventListener('click', newtypes);

let current = {
    name: "",
    types: "",
}   //put into newTrivia and takes the info from there puts it into here so that we can put this into answer and have question and answer pairs

async function newPokemon() {  //getQuote on assignment, async tells it to operate separately
    //console.log("success");

    let id = Math.floor(Math.random() * 800) + 1;

    try {   //try to do this thing and if it works then do one thing but if not do something else
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); //tries to go get the question answer file and trigger response
        if (!response.ok) { //if the response is not ok we'll throw error
            throw Error(response.statusText);
        }
        const json = await response.json(); //if they do fetch something then wait for the command and when it resolves assign it to json
        displayName(json["name"]);  //just takes the question part and runs it through displayTrivia
        current.name = json["name"];
        current.types = json["types"][0]["type"]['name'];
        console.log(current.name);
        console.log(current.types);
        console.log(json);

    }
    catch (err) {
        console.log(err);
        alert('Failed to get new trivia');
    }
}

function displayName() {
    const nameText = document.querySelector('#js-name-text');
    const typesText = document.querySelector('#js-types-text');
    nameText.textContent = current.name.charAt(0).toUpperCase() + current.name.slice(1);    // take something out of json variable and put it into displayTrivia to update the button
    typesText.textContent = "" //resets the question so that answers aren't the same as past questions, when rerun, both the question and answer resets
    console.log(current.name)
}

function newtypes() {
    //console.log("success == answer!");
    const typesText = document.querySelector('#js-types-text');
    typesText.textContent = current.types.charAt(0).toUpperCase() + current.types.slice(1);
}

newPokemon(); // calls the function and puts it on immediately when it loads
displayName()
