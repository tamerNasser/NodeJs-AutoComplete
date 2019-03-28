const handlers = require("./handlers");
const obj = require('./words.json');
console.time("Stored data in ")
const data = JSON.stringify(obj);
console.timeEnd("Stored data in ")

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    handlers.handleHome(response);
  } else if (url.substring(0, 7) === "/search") {
    console.time('Finding the autocomple words took ')
    handlers.handleAutoComplete(response, url, data);
    console.timeEnd('Finding the autocomple words took ');
  } else if (url.indexOf('.') > 0) {
    handlers.handlePublic(response, url);
  } else {
    handlers.handleHome(response);
  }
};

module.exports = router;
