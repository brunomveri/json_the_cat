const breed = process.argv[2];

const request = require('request');

const url = 'https://api.thecatapi.com/v1/breeds/search';

request(url + '?q=' + breed, (error, response, body) => {
  if (error) {
    console.log('Server failed to reponse', error);
    return error;
  }
  const data = JSON.parse(body);
  const catBreed = data[0];
 if (catBreed) {
   console.log(catBreed.description);
 } else {
 console.log(`Failed to find ${breed}`);
 }
});