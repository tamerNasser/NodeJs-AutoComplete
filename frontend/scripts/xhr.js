
let connectToBase = function( value ) {
// , { "mode" : "no-cors"}
fetch('/search?input=' + value )
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        console.log(data);
        countries = JSON.parse(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
if (typeof module !== "undefined") {
module.exports = connectToBase;
}
