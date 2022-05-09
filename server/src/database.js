/**
 * Task Server/1:
 * This function should return the content of the "data.json" file as array of objects (as-is).
 * The function should return a promise (do not remove the "async" keyword in front of the function).
 */
 const fs = require("fs");
 const path = require("path");
 const databasePath = path.resolve('src/data.json');

module.exports = async function getData() {
    const database = JSON.parse(fs.readFileSync(databasePath));

    return database;
}
