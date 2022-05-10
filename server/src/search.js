const getData = require('./database');

/**
 * Task Server/3:
 * This function should return the data filtered by the term and the filter values.
 */
module.exports = async function search(term, filter) {
    const data = await getData();
    const dataFilteredByTerm = filterByTerm(data, term.toLowerCase());
    const dataFilteredByFilter = filterByFilter(dataFilteredByTerm, filter);
    
    return dataFilteredByFilter;
}

const filterByTerm = (data, term) => {
    if (term === "all"){
        return data;
    }

    return data.filter((wand) => {
        if(wand.owner.includes(term))
        {
            return true;
        }
    });
}

const filterByFilter = (data, filterObj) => {
    let filterResult;
    if (Object.keys(filterObj).length === 0) {
        return data;
    }

    return data.filter((wand) => {
        filterResult = true;
        Object.entries(filterObj).forEach(([key, value]) => {
            if (wand[key] !== value){
                filterResult = false;
            }
        })
        return filterResult;
    });
}
