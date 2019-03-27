

let autocomplete = (inp) => {

  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) return false;

      connectToBase( this.value );
      console.log(countries);
      currentFocus = -1;

      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");

      this.parentNode.appendChild(a);

      for (i = 0; i < countries.length; i++) {

        if (countries[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

          b = document.createElement("DIV");

          b.innerHTML = "<strong>" + countries[i].substr(0, val.length) + "</strong>";
          b.innerHTML += countries[i].substr(val.length);

          b.innerHTML += "<input type='hidden' value='" + countries[i] + "'>";

          b.addEventListener("click", function(e) {

              inp.value = this.getElementsByTagName("input")[0].value;


              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {


        currentFocus++;

        addActive(x);
      } else if (e.keyCode == 38) {


        currentFocus--;

        addActive(x);
      } else if (e.keyCode == 13) {

        e.preventDefault();
        if (currentFocus > -1) {

          if (x) x[currentFocus].click();
        }
      }
  });

  function addActive(x) {

    if (!x) return false;

    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);

    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {

    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {


    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

autocomplete(document.getElementById("myInput"));
