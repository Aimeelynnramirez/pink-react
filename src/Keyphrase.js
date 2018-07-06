// const options = { method: 'POST', url: 'https://eastus.api.cognitive.microsoft.com/text/analytics/v2.0/languages', body: { documents: [{ "text": event.text }] }, json: true, headers: { 'Ocp-Apim-Subscription-Key': process.env.MS_LOCALE_KEY } };
//console.log(options, 'this key has been found');
  // const backend = require('superagent');
  //   backend
  //   .get('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases')
  //   .end(function(err, res, backend){
  //     console.log(backend, res, 'this backend got called');
  //   });
  'use strict';

  let https = require ('https');

  // **********************************************
  // *** Update or verify the following values. ***
  // **********************************************

  // Replace the accessKey string value with your valid access key.
  let accessKey = 'enter key here';

  // Replace or verify the region.

  // You must use the same region in your REST API call as you used to obtain your access keys.
  // For example, if you obtained your access keys from the westus region, replace
  // "westcentralus" in the URI below with "westus".

  // NOTE: Free trial access keys are generated in the westcentralus region, so if you are using
  // a free trial access key, you should not need to change this region.
  let uri = 'westus.api.cognitive.microsoft.com';
  let path = '/text/analytics/v2.0/keyPhrases';

  let response_handler = function (response) {
      let body = '';
      response.on ('data', function (d) {
          body += d;
      });
      response.on ('end', function () {
          let body_ = JSON.parse (body);
          let body__ = JSON.stringify (body_, null, '  ');
          console.log (body__);
      });
      response.on ('error', function (e) {
          console.log ('Error: ' + e.message);
      });
  };

  let get_key_phrases = function (documents) {
      let body = JSON.stringify (documents);

      let request_params = {
          method : 'POST',
          hostname : uri,
          path : path,
          headers : {
              'Ocp-Apim-Subscription-Key' : accessKey,
          }
      };

      let req = https.request (request_params, response_handler);
      req.write (body);
      req.end ();
  }

  let documents = { 'documents': [
      { 'id': '1', 'language': 'en', 'text': 'I really enjoy the new XBox One S. It has a clean look, it has 4K/HDR resolution and it is affordable.' },
      { 'id': '2', 'language': 'es', 'text': 'Si usted quiere comunicarse con Carlos, usted debe de llamarlo a su telefono movil. Carlos es muy responsable, pero necesita recibir una notificacion si hay algun problema.' },
      { 'id': '3', 'language': 'en', 'text': 'The Grand Hotel is a new hotel in the center of Seattle. It earned 5 stars in my review, and has the classiest decor I\'ve ever seen.' }
  ]};

  get_key_phrases (documents);
