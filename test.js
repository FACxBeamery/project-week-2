var test = require('tape');
var myFunctions = require("./pureFunctions.js");
var capFirstLetAndRemoveHyphen = myFunctions.capFirstLetAndRemoveHyphen;

test('Capitalises first letter and removes hyphen', (t) => {
  let actual = capFirstLetAndRemoveHyphen('fire-fighter');
  let expected = 'Fire fighter';
  t.equal(actual, expected, 'capFirstLetAndRemoveHyphen returns formatted string ');
  t.end();
});

