let words = [];

let connectToBase = function(value, cb) {
  var reg = /^[a-z]+$/i;

  if( !reg.test(value) )
  return;

  let lastWord = value.split(' ');
  let lastWordF = ""

  if (lastWord[lastWord.length - 1].trim() === "")
    lastWordF = lastWord[0];
  else
    lastWordF = lastWord[lastWord.length - 1]

  fetch('/search?input=' + lastWordF)
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        response.json().then((data) => {
          words = data;
          cb(words);
        })
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });

}


if (typeof module !== "undefined") {
  module.exports = connectToBase;
}
