const autocomplete = inp => {
  let currentFocus;
  inp.addEventListener("input", function(e) {
    let itemsDiv;
    let wordItemDiv;
    let i;
    let inputVal = this.value; //input value

    closeAllLists();

    if (!inputVal) return false;

    connectToBase(this.value, () => {
      words = getAutoCompleteWords(); // Getting the related words
      currentFocus = -1;

      itemsDiv = document.createElement("DIV");
      itemsDiv.setAttribute("id", this.id + "autocomplete-list");
      itemsDiv.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(itemsDiv);

      let newVal = inputVal.split(" ");

      if (newVal[newVal.length - 1] === undefined) {
        inputVal = newVal[0];
      } else {
        inputVal = newVal[newVal.length - 1];
      }

      let existing = localStorage.getItem("History");
      existing = existing ? existing.split(",") : [];

      for (i = 0; i < words.length; i++) {
        if (words[i].substr(0, inputVal.length).toUpperCase() == inputVal.toUpperCase()) {
          wordItemDiv = document.createElement("DIV");
          wordItemDiv.innerHTML = "<strong>" + words[i].substr(0, inputVal.length) + "</strong>";
          wordItemDiv.innerHTML += words[i].substr(inputVal.length);
          wordItemDiv.innerHTML += "<input type='hidden' value='" + words[i] + "'>";

          if (existing != null) {
            for (let x = 0; x < existing.length; x++) {
              if (words[i] === existing[x])
                wordItemDiv.style.color = "blue"
            }
          }

          wordItemDiv.addEventListener("click", function(e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
          });

          itemsDiv.appendChild(wordItemDiv);
        }
      }
    });
  });

  inp.addEventListener("keydown", function(e) {
    let x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      // Get the existing data
      var existing = localStorage.getItem("History");
      // If no existing data, create an array
      // Otherwise, convert the localStorage string to an array
      existing = existing ? existing.split(",") : [];
      // Add new data to localStorage Array
      existing.push(this.value);
      // Save back to localStorage
      localStorage.setItem("History", existing.toString());
      googleSearch(this.value);
      e.preventDefault();

      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);

    if (currentFocus >= x.length)
     currentFocus = 0;

    if (currentFocus < 0)
    currentFocus = x.length - 1;

    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    let x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
};

function googleSearch(query) {
  if (query.slice(0, 7) == "http://") {
    window.location.href = query;
  } else {
    window.location.href = "https://www.google.com/search?q=" + query;
  }
}

autocomplete(document.getElementById("myInput"));
