
// pokeapi 
var allPokemons = [];


(() => { function fn()  {
    // "On document ready" commands:
    getAllPokemons(1);
    
    const types = [];
    const typeSelector = document.querySelector('#types-selector');
    const typesXHR = new XMLHttpRequest();  
    const typesUrl = 'https://pokeapi.co/api/v2/type/';
    typesXHR.onreadystatechange = () => {
        if (typesXHR.readyState === 4 && typesXHR.status === 200) {
          JSON.parse(typesXHR.response).results.map(result => types.push(result.name));
          types.forEach((type) => {
            const newOption = document.createElement("OPTION");
            newOption.setAttribute("value", type);
            const newText = document.createTextNode(type);
            newOption.appendChild(newText);
            typeSelector.appendChild(newOption);
            
          });  
          // autocomplete(document.getElementById("myInput"), types);

          const regions = [];
          const regionSelector = document.querySelector('#regions-selector');
          const regionsXHR = new XMLHttpRequest();
          const regionsUrl = 'https://pokeapi.co/api/v2/pokedex/';
          regionsXHR.onreadystatechange = () => {
            if (regionsXHR.readyState === 4 && regionsXHR.status === 200) {
              JSON.parse(regionsXHR.response).results.map(result => regions.push(result.name));
              // console.log(regions);
              regions.forEach((region) => {
                const newOption = document.createElement("OPTION");
                newOption.setAttribute("value", region);
                const newText = document.createTextNode(region);
                newOption.appendChild(newText);
                regionSelector.appendChild(newOption);
              });
            }
          }
          regionsXHR.open("GET", regionsUrl, true);
          regionsXHR.send();

        } else {
          // add error message for not being able to retrieve types from api
          // add those types from static data

        }
    };
    typesXHR.open("GET", typesUrl, true);
    typesXHR.send();



  };  
  if (document.readyState != 'loading') {fn()}
  else {document.addEventListener('DOMContentLoaded', fn)}
})();

document.getElementById('form-1-button').addEventListener('click', (event) => {
  event.preventDefault();
  const section1 = document.getElementById('section-1');
  const pokemonId = document.getElementById('pokemon-id').value;
  console.log(pokemonId);

  const pokemonXHR = new XMLHttpRequest();
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  pokemonXHR.onreadystatechange = () => {
    if (pokemonXHR.readyState === 4 && pokemonXHR.status === 200) {
      console.log(JSON.parse(pokemonXHR.response)); 
      const response = JSON.parse(pokemonXHR.response);
      const pokemonCard = document.createElement("DIV");
      const pokemonTypesWrapper = document.createElement("DIV");
      pokemonCard.classList.add('pokemon-card');
      section1.appendChild(pokemonCard);
      // add class pokemon-card
      const pokemonName = addParagraph(response.name);
      pokemonName.classList.add('pokemon-card__name');
      pokemonCard.appendChild(pokemonName);

      const pokemonSprite = addImage(response.sprites.front_default);
      pokemonSprite.classList.add('pokemon-card__sprite');
      pokemonCard.appendChild(pokemonSprite);

      const pokemonTypes = addParagraph('Type(s):');
      pokemonCard.appendChild(pokemonTypes);
      pokemonTypesWrapper.classList.add('pokemon-card__type-wrapper')
      pokemonCard.appendChild(pokemonTypesWrapper);

      const pokemonType1 = addParagraph(response.types[0].type.name);
      pokemonType1.classList.add('pokemon-card__type');
      pokemonTypesWrapper.appendChild(pokemonType1);
      if (response.types.length > 1) {
        const pokemonType2 = addParagraph(response.types[1].type.name);
        pokemonTypesWrapper.appendChild(pokemonType2);
      }

      const pokemonMoves = addParagraph('Moves:');
      pokemonCard.appendChild(pokemonMoves);
      for (let i = 0; i < 4; i++) {
        let elem = addParagraph(response.moves[i].move.name);
        pokemonCard.appendChild(elem);
      }



      // add p tag with pokemon name

      // add img tag with sprite

      // add p tag with type name

      // add p tag with 2nd if exists type name

      // add p tag 




      // response.name

      // response.sprites.front_default

      // response.types[0].type.name
      // response.types[1].type.name
      
      // response.moves[0,1,2,3].move.name

      // 


      
    }
  }
  pokemonXHR.open("GET", pokemonUrl, true);
  pokemonXHR.send();
});

document.getElementById('form-2-button').addEventListener('click', (event) => {
  event.preventDefault();
  // const section1 = document.getElementById('section-1');
  // const pokemonId = document.getElementById('pokemon-id').value;
  // console.log(pokemonId);
  // let pokemonId = ;
  // const pokemonFound = requestPokemonByType(event.target.value);
  const input = document.getElementById('type').value;
  console.log(input);
  

  const hasType = allPokemons.filter((pokemon) => pokemon.types[0].type.name == input);
  
  console.log('okkkk', hasType[getRandomInt(hasType.length)]);

    
  // }
  // console.log('YAY: ', pokemonFound);
  
  // console.log('found it! ')
  console.log(allPokemons);
  
});

const requestPokemonByType = (typeToCheck) => {
  const pokemonXHR = new XMLHttpRequest();
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${getRandomInt(807)}/`;
  pokemonXHR.onreadystatechange = () => {
    if (pokemonXHR.readyState === 4 && pokemonXHR.status === 200) {
      console.log(JSON.parse(pokemonXHR.response)); 
      const response = JSON.parse(pokemonXHR.response);
      const types = response.types;
      if (types.length > 1) {
        if (types[1].type.name == typeToCheck) {
          console.log('here');
          
          return response.name;
        }
      } else if (types.length == 1) {
        if (types[0].type.name == typeToCheck) {
          return response.name;
        }
      } else {
        requestPokemonByType(typeToCheck);
      }
    }
      
  }
  pokemonXHR.open("GET", pokemonUrl, true);
  pokemonXHR.send();
};



// on load, add types and 

// /type

// and regions /pokedex

const addParagraph = ((content) => {
  const p = document.createElement('p');
  p.innerHTML = content;
  return p;
});

const addImage = ((url) => {
  const img = document.createElement("img");
  img.src = url;
  return img;
});

const getRandomInt = ((max) => Math.floor(Math.random() * Math.floor(max)));

const getAllPokemons = ((counter) => {
  const pokemonXHR = new XMLHttpRequest();
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${counter}/`;
  pokemonXHR.onreadystatechange = () => {
    if (pokemonXHR.readyState === 4 && pokemonXHR.status === 200) {
      // console.log(JSON.parse(pokemonXHR.response)); 
      allPokemons.push(JSON.parse(pokemonXHR.response));
      counter += 1;
      if (counter == 200) {
        console.log('done');
        return;
        // return allPokemons;
      } else {
        getAllPokemons(counter);
      }
    }
  }
  pokemonXHR.open("GET", pokemonUrl, true);
  pokemonXHR.send();
});


// finish cards

// finish random pokemon

// add warnings - look at project week 1

// add form input red - look at porject week 1


// add navigation


// do unit testing for: 

// make sure that: 
/**
 * first input is filled out
 * result is less than 806
 * first input is less than 403 and its an even number 
 */
// unit testing for multiplication lmao 

 // styling to pokemon card: smaller 

