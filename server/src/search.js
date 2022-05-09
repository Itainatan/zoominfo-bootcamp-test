const getData = require('./database');

/**
 * Task Server/3:
 * This function should return the data filtered by the term and the filter values.
 */
module.exports = async function search(term, filter) {
    const data = await getData();
    let { wood: wood, core: core, length: length } = filter;
    wood = wood === undefined ? "all" : wood;
    core = core === undefined ? "all" : core;
    length = length === undefined ? "all" : length;
    const dataFilteredByTerm = filterByTerm(data, term.toLowerCase());
    const dataFilteredByFilter = filterByFilter(dataFilteredByTerm, wood, core, length);
    return dataFilteredByFilter;
}

const filterByTerm = (data, term) => {
    return data.filter((wand) => {
        if(term === "all" || wand.owner.includes(term))
        {
            return true;
        }
    });
}

const filterByFilter = (data, wood, core, length) => {
    return data.filter((wand) => {
        if((wood === "all" || wand.wood === wood) &&
        (core === "all" || wand.core === core) &&
        (length === "all" || wand.length === length))
        {
            return true;
        }
    });
}
