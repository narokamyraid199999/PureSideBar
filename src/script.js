const sidebar = document.getElementById("sidebar");
const searchButton = document.getElementById("searchButton");
const menuToggleButton = document.getElementById("menuToggleButton");
const menuToggleWrap = document.getElementById("menuToggleWrap");

let isExpanded = localStorage.getItem("is_expanded") === "true";
let hideExpand = false;

function updateFullSideBar() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    hideExpand = false;
    searchButton.style.display = "none";
  } else {
    isExpanded = false;
    hideExpand = true;
    searchButton.style.display = "block";
  }
}

function toggleMenu() {
  isExpanded = !isExpanded;
  localStorage.setItem("is_expanded", isExpanded);
  sidebar.classList.toggle("is-expanded", isExpanded);
}

menuToggleButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", updateFullSideBar);

updateFullSideBar();
if (isExpanded) {
  sidebar.classList.add("is-expanded");
}
