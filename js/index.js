// GOBACK BUTTON
function goBack() {
  window.history.back();
}

// HEADER MENU TOGGLE BUTTON
function menuToggle(x) {
  x.classList.toggle("change");
  document.getElementById("menu").classList.toggle("appear");
  document.getElementsByTagName("body")[0].classList.toggle("overlay");
}


// SIDEBAR MENU DROP DOWN
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
};

// TERRAIN SIDEBAR CHANGE
function orleanaisSidebar() {
  document.getElementById("float-left").style.display = "none";
  document.getElementById("sidebar-orleanais").style.display = "block";
  document.getElementsByClassName("main-right")[0].style.marginLeft = "5rem";
};
