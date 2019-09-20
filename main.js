var allPokemons = [];

(() => {
	function fn() {
		getAllPokemons(1);

		const types = [];
		const typeSelector = document.querySelector("#types-selector");
		const typesXHR = new XMLHttpRequest();
		const typesUrl = "https://pokeapi.co/api/v2/type/";
		const header = document.querySelector("#header");
		typesXHR.onreadystatechange = () => {
			if (typesXHR.readyState === 4 && typesXHR.status === 200) {
				JSON.parse(typesXHR.response).results.map(result => types.push(result.name));
				types.forEach(type => {
					typeSelector.appendChild(addOption(type));
				});
			} else if (typesXHR.readyState === 4 && typesXHR.status === 404) {
				const warning = addParagraph("Types from POKEAPI could NOT be retrieved. Status 404 not found.");
				warning.classList.add("form__warning");
				header.appendChild(warning);
			}
		};
		typesXHR.open("GET", typesUrl, true);
		typesXHR.send();
	}
	if (document.readyState != "loading") {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
})();

document.getElementById("challenge-button").addEventListener("click", event => {
	event.preventDefault();
	const sectionChallenge = document.getElementById("section-challenge");
	toggleWarning(sectionChallenge);
	toggleCard(sectionChallenge);
	const first = Number(document.getElementById("first-operand").value);
	const second = Number(document.getElementById("second-operand").value);
	if (first * second === 800) {
		const pokemonCardWrapper = document.createElement("DIV");
		pokemonCardWrapper.classList.add("pokemon-card-wrapper");
		sectionChallenge.appendChild(pokemonCardWrapper);
		fetchPokemonByIDToWrapper(pokemonCardWrapper, second);
		fetchPokemonByIDToWrapper(pokemonCardWrapper, first);
	} else {
		const warning = addParagraph("800 = 400 * 2. Try this example first. Also, only NUMBERS are allowed");
		warning.classList.add("form__warning");
		sectionChallenge.appendChild(warning);
	}
});

document.getElementById("form-1-button").addEventListener("click", event => {
	event.preventDefault();
	const section1 = document.getElementById("section-1");
	const pokemonId = document.getElementById("pokemon-id").value;
	toggleWarning(section1);
	toggleCard(section1);

	const pokemonXHR = new XMLHttpRequest();
	const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
	pokemonXHR.onreadystatechange = () => {
		if (pokemonXHR.readyState === 4 && pokemonXHR.status === 200) {
			const response = JSON.parse(pokemonXHR.response);
			const pokemonCard = addPokemonCard(response);
			section1.appendChild(pokemonCard);
		} else if (pokemonXHR.readyState === 4 && pokemonXHR.status === 404) {
			const warning = addParagraph("There is no Pokémon with this ID. There are 802 Pokémon. Try a different input😃");
			warning.classList.add("form__warning");
			section1.appendChild(warning);
		}
	};
	pokemonXHR.open("GET", pokemonUrl, true);
	pokemonXHR.send();
});

document.getElementById("form-2-button").addEventListener("click", event => {
	event.preventDefault();
	const section2 = document.getElementById("section-2");
	const allTypes = [];
	for (let i = 0; i < document.getElementById("types-selector").options.length; i++) {
		allTypes.push(document.getElementById("types-selector").options[i].text);
	}
	toggleWarning(section2);
	toggleCard(section2);
	const input = document.getElementById("type").value;
	if (strExistsInArray(input.toLowerCase(), allTypes)) {
		const hasType = filterByType(allPokemons, input.toLowerCase());
		const pokemonRequested = hasType[getRandomInt(hasType.length)];

		if (pokemonRequested) {
			const pokemonCard = addPokemonCard(pokemonRequested);
			section2.appendChild(pokemonCard);
		} else {
			const warning = addParagraph("Pokémon not found with this type. Please choose another from the dropdown list");
			warning.classList.add("form__warning");
			section2.appendChild(warning);
		}
	} else {
		const warning = addParagraph("That is not a Pokémon Type. Please open the dropdown list. Example: Fire");
		warning.classList.add("form__warning");
		section2.appendChild(warning);
	}
});

const addPokemonCard = pokemon => {
	const pokemonCard = document.createElement("DIV");
	const pokemonTypesWrapper = document.createElement("DIV");
	const pokemonMovesWrapper = document.createElement("DIV");
	pokemonCard.classList.add("pokemon-card");
	const pokemonName = addParagraph(capFirstLetAndRemoveHyphen(`#${pokemon.id} ${pokemon.name}`));
	pokemonName.classList.add("pokemon-card__name");
	pokemonCard.appendChild(pokemonName);

	const pokemonSprite = addImage(pokemon.sprites.front_default);
	pokemonSprite.classList.add("pokemon-card__sprite");
	pokemonCard.appendChild(pokemonSprite);

	const pokemonTypes = addParagraph("Type(s):");
	pokemonTypes.classList.add("bold");
	pokemonTypes.classList.add("margin--no");
	pokemonCard.appendChild(pokemonTypes);

	pokemonTypesWrapper.classList.add("pokemon-card__type-wrapper");
	pokemonCard.appendChild(pokemonTypesWrapper);

	const pokemonType1 = addParagraph(capFirstLetAndRemoveHyphen(pokemon.types[0].type.name));
	pokemonType1.classList.add("pokemon-card__type");
	pokemonTypesWrapper.appendChild(pokemonType1);
	if (pokemon.types.length > 1) {
		const pokemonType2 = addParagraph(capFirstLetAndRemoveHyphen(pokemon.types[1].type.name));
		pokemonTypesWrapper.appendChild(pokemonType2);
	}

	const pokemonMoves = addParagraph("Moves:");
	pokemonMoves.classList.add("bold");
	pokemonMoves.classList.add("margin--no");
	pokemonCard.appendChild(pokemonMoves);

	pokemonMovesWrapper.classList.add("pokemon-card__move-wrapper");
	pokemonCard.appendChild(pokemonMovesWrapper);
	for (let i = 0; i < 4; i++) {
		let elem = addParagraph(capFirstLetAndRemoveHyphen(pokemon.moves[i].move.name));
		elem.classList.add("pokemon-card__move");
		pokemonMovesWrapper.appendChild(elem);
	}
	return pokemonCard;
};

const fetchPokemonByIDToWrapper = (wrapper, id) => {
	const pokemonXHR = new XMLHttpRequest();
	const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
	pokemonXHR.onreadystatechange = () => {
		if (pokemonXHR.readyState === 4 && pokemonXHR.status === 200) {
			const pokemonCard = addPokemonCard(JSON.parse(pokemonXHR.response));
			pokemonCard.classList.remove("pokemon-card");
			pokemonCard.classList.add("pokemon-card--small");
			wrapper.appendChild(pokemonCard);
		}
	};
	pokemonXHR.open("GET", pokemonUrl, true);
	pokemonXHR.send();
};

const getAllPokemons = counter => {
	const pokemonXHR = new XMLHttpRequest();
	const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${counter}/`;
	pokemonXHR.onreadystatechange = () => {
		if (pokemonXHR.readyState === 4 && pokemonXHR.status === 200) {
			allPokemons.push(JSON.parse(pokemonXHR.response));
			counter += 1;
			if (counter == 200) {
				return;
			} else {
				getAllPokemons(counter);
			}
		}
	};
	pokemonXHR.open("GET", pokemonUrl, true);
	pokemonXHR.send();
};

const addOption = content => {
	const newOption = document.createElement("OPTION");
	newOption.setAttribute("value", content);
	const newText = document.createTextNode(content);
	newOption.appendChild(newText);
	return newOption;
};

const addParagraph = content => {
	const p = document.createElement("p");
	p.innerHTML = content;
	return p;
};

const addImage = url => {
	const img = document.createElement("img");
	img.src = url;
	return img;
};

const toggleWarning = section => {
	if (section.contains(section.querySelector(".form__warning"))) {
		section.removeChild(section.childNodes[section.childNodes.length - 1]);
	}
};

const toggleCard = section => {
	if (section.contains(section.querySelector(".pokemon-card"))) {
		section.removeChild(section.childNodes[section.childNodes.length - 1]);
	}
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const filterByType = (array, input) => array.filter(pokemon => pokemon.types[0].type.name == input.toLowerCase());
