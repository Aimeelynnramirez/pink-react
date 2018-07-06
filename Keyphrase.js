const options = { method: 'POST', url: 'https://eastus.api.cognitive.microsoft.com/text/analytics/v2.0/languages', body: { documents: [{ "text": event.text }] }, json: true, headers: { 'Ocp-Apim-Subscription-Key': process.env.MS_LOCALE_KEY } };
console.log(options, 'this key has been found');
  const backend = require('superagent');
    backend
    .get('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases')
    .end(function(err, res, backend){
      console.log(backend, res, 'this backend got called');
    });
