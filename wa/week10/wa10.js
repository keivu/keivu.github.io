let nameBtn = document.querySelector("#js-new-pokemonName").addEventListener('click', newPokemon); 
let typesBtn = document.querySelector('#js-pokemontypes').addEventListener('click', newtypes);
let current = {
    name: "",
    types: "",
}  

async function newPokemon() {  
    let id = Math.floor(Math.random() * 800) + 1;
    try {  
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); 
        if (!response.ok) { 
            throw Error(response.statusText);
        }
        const json = await response.json(); 
        displayName(json["name"]);
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
    nameText.textContent = current.name.charAt(0).toUpperCase() + current.name.slice(1);    
    typesText.textContent = "" 
    console.log(current.name)
}

function newtypes() {
   
    const typesText = document.querySelector('#js-types-text');
    typesText.textContent = current.types.charAt(0).toUpperCase() + current.types.slice(1);
}

newPokemon()