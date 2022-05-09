const getData = require('./database');

/**
 * Task Server/2:
 * This function should return the data sorted and without duplications
 */
module.exports = async function getOptions(type) {
    let i = 0;
    data = await getData();
    const valuesOfType = getAllValuesOfType(data,type).sort();
    const uniqTypes = valuesOfType.filter(() => {
        console.log(uniqTypes.length);
        i++;
        return true;
    })
    
    return valuesOfType;
}

const getAllValuesOfType = (data, type) => {
    return data.map((wand) => {
        return wand[type]
    });
}