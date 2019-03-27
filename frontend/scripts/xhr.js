var countries = [];

let connectToBase = function(value,cb) {
  // , { "mode" : "no-cors"}
  // console.log(value);

  let lastWord = value.split( ' ' );
  let lastWordF = "";
 if( lastWord[lastWord.length - 1].trim() === "")
 lastWordF = lastWord[0];

 else lastWordF = lastWord[lastWord.length - 1]

  fetch('/search?input=' + lastWordF)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        response.json().then(function(data) {
          // console.log(data);
          countries = data;
            cb();
          // console.log(countries);
        })
      }

    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

}

const changeValue = () => {
  return countries;
}

if (typeof module !== "undefined") {
  module.exports = connectToBase;
}
