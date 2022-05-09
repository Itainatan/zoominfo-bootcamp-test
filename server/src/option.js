const getData = require('./database');

/**
 * Task Server/2:
 * This function should return the data sorted and without duplications
 */
module.exports = async function getOptions(type) {
    let i = 0;
    data = await getData();
    const valuesOfType = getAllValuesOfType(data,type).sort();
    const uniqTypes = removeDuplicates(valuesOfType);
    
    return uniqTypes;
}

const getAllValuesOfType = (data, type) => {
    return data.map((wand) => {
        return wand[type]
    });
}

const removeDuplicates = (data) => {
    const seen = {};
    return data.filter((value) => {
        return seen.hasOwnProperty(value) ?  false : (seen[value] = true);
    })
}