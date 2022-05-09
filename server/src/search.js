const getData = require('./database');

/**
 * Task Server/3:
 * This function should return the data filtered by the term and the filter values.
 */
module.exports = async function search(term, filter) {
    const data = await getData();
    const dataFilteredByTerm = filterByTerm(data, term.toLowerCase());

    return dataFilteredByTerm;
}

const filterByTerm = (data, term) => {
    return data.filter((wand) => {
        if(term === "all" || wand.owner.includes(term))
        {
            return true;
        }
    });
}
