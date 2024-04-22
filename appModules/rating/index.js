
const { createRating, updateRating } = require("./calculations");
const config = require("./config");
const makeRatingFile = require("./rating-file");

module.exports = {
    makeRatingFile,
    config,
    createRating,
    updateRating
};