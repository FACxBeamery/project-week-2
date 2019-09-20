const capFirstLetAndRemoveHyphen = str => {
	let formattedString = str.replace(/-/, " ").trim();
	return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
};

const strExistsInArray = (input, arrayToCheck) => arrayToCheck.indexOf(input) > -1;

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
		capFirstLetAndRemoveHyphen,
		strExistsInArray
	};
}
