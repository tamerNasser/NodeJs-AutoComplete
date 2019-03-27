let words = [];

let connectToBase = function(value, cb) {
  let lastWord = value.split(' ');
  let lastWordF = "";

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
          cb();
        })
      }
    )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });

}

const getAutoCompleteWords = () => {
  return words;
}

if (typeof module !== "undefined") {
  module.exports = connectToBase;
}
