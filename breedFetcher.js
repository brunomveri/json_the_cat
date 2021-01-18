// const breed = process.argv[2]; //Moved to index.js

const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = function(breedName, callback) {

  request(url + '?q=' + breedName, (error, response, body) => {
    
    if (error) {
      callback(error, null);
      return;
    }
    
    const data = JSON.parse(body);
    const catBreedDescription = data[0];
    
    if (catBreedDescription) {
      callback(null, catBreedDescription.description);
    } else {
      // console.log(`Failed to find ${breedName}`); //FIX THIS!!
      callback(`Failed to find ${breedName}`, null);
    }

  });

};


module.exports = { fetchBreedDescription };
