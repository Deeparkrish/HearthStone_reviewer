// by - Dyravuth yorn 
// Add dependencies 
var axios = require("axios").default;

//api key
310;b70840fmsh006ff0bae02189dp17560cjsn18ddba0b2af8

var options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards',
  headers: {'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'}
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});