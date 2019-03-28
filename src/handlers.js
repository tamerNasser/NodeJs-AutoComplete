const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const logic = require('./logic')

let exType = {
  html: {
    "Content-Type": "text/html"
  },
  jpg: {
    "Content-Type": "text/jpeg"
  },
  css: {
    "Content-Type": "text/css"
  },
  js: {
    "Content-Type": "application/javascript"
  },
  json:{
    'Content-Type': 'application/json'
  }
};

const handleHome = (response) => {
  let filePath = path.join(__dirname, "..", "frontend", "layouts", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500);
      response.end("error500");
    } else {
      response.writeHead(200, exType.html);
      response.end(file);
    }
  });
}

const handleAutoComplete = (res, url, data) => {
  let search = querystring.parse(url.substring(url.indexOf('?') + 1)).input;
  data = JSON.parse(data);
  let searchobj = search[0].toUpperCase();
  let results = logic.getAutoCompleteWords(Object.keys(data[searchobj]),search);
  res.writeHead(200, exType.josn);
  res.end(JSON.stringify(results));
}

const handlePublic = (response, url) => {
  let extension = url.split(".")[1];
  let filePath = path.join(__dirname, "..", "frontend", url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500);
      response.end("error500");
    } else {
      response.writeHead(200, exType[extension]);
      response.end(file);
    }
  });
}



module.exports = {
  handleAutoComplete,
  handlePublic,
  handleHome
}
