const handlers = require("./handlers");
const obj = require('./words.json');
const data = JSON.stringify(obj);
const router = (request, response) => {
  const url = request.url;
  if(url === '/'){
    handlers.handleHome(response);
  }else if (url.substring(0,7) === "/search") {
    handlers.handleAutoComplete(response,url,data);
  }else if(url.indexOf('.')>0){
    handlers.handlePublic(response,url);
  }else {
    handlers.handleHome(response);
  }
};

module.exports = router;
