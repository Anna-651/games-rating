const fs = require('fs').promises;
const httpUtils = require('../appModules/http-utils');
const { createRating, config, updateRating } = require('../appModules/rating');
async function voteRouteController(req, res) {
      if (req.method !== "POST"){
        res.statusCode = 404;
        res.end("NotFound");
      }else {
        res.statusCode = 200;
        const body = await httpUtils.parseBody(req);
        const data = JSON.parse(body);
        const rating = createRating(data, config.WEIGHT);
        const ratingFile = await fstat.ratingFile(config.PATH_TO_RATING_FILE);
        const ratingArray = JSON.parse(ratingFile);
        const newRating = updateRating(ratingArray, data.id, rating);
        await fs.writeFile(config.PATH_TO_RATING_FILE, JSON.stringify(newRating));
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(newRating.sort((a,b) => b.rating - a.rating)));
      }
      
     
      res.end(JSON.stringify({ hello: "World"}));
      
  }
  module.exports = voteRouteController;