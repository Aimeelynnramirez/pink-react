var keyphrase = '{"{"documents": [    {  "language": "en",  "id": "1",  "text": "We love this trail and make the trip every year. The views are breathtaking and well worth the hike!"  },  {"language": "en",  "id": "2",    "text": "Poorly marked trails! I thought we were goners. Worst hike ever."    },    {"language": "en",  "id": "3",  "text": "Everyone in my family liked the trail but thought it was too challenging for the less athletic among us. Not necessarily recommended for small children."  },  {  "language": "en",  "id": "4",    "text": "It was foggy so we missed the spectacular views, but the trail was ok. Worth checking out if you are in the area."},    {  "language": "en","id": "5",  "text": "This is my favorite trail. It has beautiful views and many places to stop and rest"  }]}"}'
// need to cors the origin for call for apis
console.log(keyphrase, 'this key has been found');
  const backend = require('superagent');
    backend
    .get('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases')
    .end(function(err, res, backend){
      console.log(backend, res, 'this backend got called');
    });
