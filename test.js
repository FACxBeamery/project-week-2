var test = require("tape");
var myFunctions = require("./pureFunctions.js");
var capFirstLetAndRemoveHyphen = myFunctions.capFirstLetAndRemoveHyphen;
var strExistsInArray = myFunctions.strExistsInArray;

test("Capitalises first letter and removes hyphen", t => {
	let actual = capFirstLetAndRemoveHyphen("fire-fighter");
	let expected = "Fire fighter";
	t.equal(
		actual,
		expected,
		"capFirstLetAndRemoveHyphen returns formatted string "
	);
	t.end();
});

test("Capitalises first letter and does not need to remove hyphen", t => {
	let actual = capFirstLetAndRemoveHyphen("Firefast");
	let expected = "Firefast";
	t.equal(
		actual,
		expected,
		"capFirstLetAndRemoveHyphen returns formatted string "
	);
	t.end();
});

test("Removes hyphen and capitalises first letter", t => {
	let actual = capFirstLetAndRemoveHyphen("-hello");
	let expected = "Hello";
	t.equal(
		actual,
		expected,
		"capFirstLetAndRemoveHyphen returns formatted string "
	);
	t.end();
});

test("String Exists in array - case sensitive", t => {
	t.equal(
		strExistsInArray("fire", ["water", "fire", "ground"]),
		true,
		"strExistsInArray returns true"
	);
	t.equal(
		strExistsInArray("2", ["water", "2", "ground"]),
		true,
		"strExistsInArray returns true"
	);
	t.equal(
		strExistsInArray("aoisndionqsnd", ["water", "fire", "aoisndionqsnd"]),
		true,
		"strExistsInArray returns true"
	);
	t.equal(
		strExistsInArray("Firkasmd", ["water", "Firkasmd", "ground"]),
		true,
		"strExistsInArray returns true"
	);
	t.end();
});

test("String does NOT exist in array", t => {
	t.equal(
		strExistsInArray("fire", ["water", "Fire", "ground"]),
		false,
		"strExistsInArray returns false"
	);
	t.equal(
		strExistsInArray("2", ["water", 2, "ground"]),
		false,
		"strExistsInArray returns false"
	);
	t.equal(
		strExistsInArray("aoisndionqsnd", ["water", "fire", "aoisndionqsnD"]),
		false,
		"strExistsInArray returns false"
	);
	t.equal(
		strExistsInArray("Firkasmd", ["water", "firkasmd", "ground"]),
		false,
		"strExistsInArray returns false"
	);
	t.end();
});
