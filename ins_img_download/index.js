'use strict';

const server = require('./server');
const pageDef = require('./page_def');
const writeFile = require('./write_file');
const img_download_server = require('./img_download_server');

//let url = 'https://www.instagram.com/p/BhO2iQmFUFV/';
let url ='https://www.instagram.com/p/Bhbwsfblpzr/';

server.spiderServer(url, pageDef.regexImgUrl, writeFile.writeFileHtml, img_download_server.imgDown);


