// Global Variables
const searchBar = document.getElementById("search");
const searchValue = searchBar.value;
const data = document.getElementsByClassName("photo");

// Event Listener and Search Function
searchBar.addEventListener("keyup", () => {
  let input = searchBar.value.toLowerCase();
  console.log(input);

  /*
    Here, we loop through the data to check if the innerHTML, which has been
    converted to lowercase, contains the same input as the search bar. If it
    doesn't, said (non-matching) items are hidden. If there is a match (or 
    if the search term is removed), the display is set to "initial".
  */

  for (x = 0; x < data.length; x++) {
    if (!data[x].innerHTML.toLowerCase().includes(input)) {
      data[x].style.display = "none";
    } else {
      data[x].style.display = "initial";
    }
  }
});
