const capFirstLetAndRemoveHyphen = ((str) => {
    let formattedString = str.replace(/-/, ' ');
    return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
  });
  
const strExistsInArray = ((input, arrayToCheck) => arrayToCheck.indexOf(input) > -1);

// export {capFirstLetAndRemoveHyphen, strExistsInArray}; 

module.exports = {
    capFirstLetAndRemoveHyphen,
    strExistsInArray
 }