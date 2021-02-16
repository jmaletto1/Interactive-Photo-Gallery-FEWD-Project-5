// Global Variables
const searchBar = document.getElementById("search");
const searchValue = searchBar.value;
const data = document.getElementsByClassName("photo");

// Event Listener and Search Function
searchBar.addEventListener("keyup", () => {
  let input = searchBar.value.toLowerCase();
  console.log(input);

  for (x = 0; x < data.length; x++) {
    if (!data[x].innerHTML.toLowerCase().includes(input)) {
      data[x].style.display = "none";
    } else {
      data[x].style.display = "initial";
    }
  }
});
