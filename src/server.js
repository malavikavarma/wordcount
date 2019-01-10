import executelangDetect from './detect_lang';
import searchAPI from './search_api';

const express = require('express');
// var requestChecker  = require('./middleware');
const app = express();
// app.use(requestChecker);
app.use(express.static('public'));
app.get('/detectlanguage', executelangDetect);
app.get('/searchapi', searchAPI);
app.listen(8080);
