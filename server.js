var express = require('express');
const app = express();
app.use(express.static('public'));
console.log('this has been ran')
