const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

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
  // let arrsearch = search.split(' ');
  // console.log(arrsearch[arrsearch.length-1]);
  data = JSON.parse(data)
  // console.log(data);
  // console.log(url);
  let searchobj = search[0].toUpperCase();
console.log(searchobj);
  // console.log(search);
  let results = Object.keys(data[searchobj])
    .reduce((acc, currentObj) => {
      if (acc === undefined || acc.length < 6) {
        if (search === currentObj.substr(0, search.length)) {
          return acc.concat(currentObj);
        }
        return acc;
      }else {
        return acc;
      }
    }, [])

  console.log(results);
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(results));
  // console.log("autocomplete : ", results);

}

const handlePublic = (response, url) => {
  let extension = url.split(".")[1];
  let filePath = path.join(__dirname, "..", "frontend", url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500);
      response.end("error500");
    } else {
      response.writeHead(200, exType.extension);
      response.end(file);
    }
  });
}

const handleHistory = (res, url, data) => {
  let searchValue = querystring.parse(url.substring(url.indexOf('?') + 1)).submitvalue;
  console.log("searchValue", searchValue);
  console.log("url : ", url);
  data.searchValue = 0;

  fs.writeFile(__dirname + '/words.json', data,(err) => {
    if (err) {
      res.writeHead(500);
      res.end("SERVER ERROR");
    } else {
      res.writeHead(200);
      res.end();
    }
  })
}

module.exports = {
  handleAutoComplete,
  handlePublic,
  handleHome,
  handleHistory
}
