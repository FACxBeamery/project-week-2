
// pokeapi 

// window.onload = (event => {
//     fetch('https://pokeapi.co/api/v2/pokemon/id/', options)
//         .then(response => response.json())
//         .then(result => console.log(result))
// }, false);

(() => { function fn()  {
    // "On document ready" commands:
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

          const regions = [];
          const regionSelector = document.querySelector('#regions-selector');
          const regionsXHR = new XMLHttpRequest();
          const regionsUrl = 'https://pokeapi.co/api/v2/pokedex/';
          regionsXHR.onreadystatechange = () => {
            if (regionsXHR.readyState === 4 && regionsXHR.status === 200) {
              JSON.parse(regionsXHR.response).results.map(result => regions.push(result.name));
              console.log(regions);
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

// on load, add types and 

// /type

// and regions /pokedex