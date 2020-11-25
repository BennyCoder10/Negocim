
// LOTISSEMENT IMAGES
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
};

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
};

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
};

// DISPLAY CLICKED IMAGE (IGNORING ORDER)
function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } 
  slides[slideIndex-1].style.display = "block";
};


// window.addEventListener('mouseup', function(event){
//   var modalImage = document.getElementById('modal-content');
//   if(event.target !== modalImage && event.target.parentNode !== modalImage) {
//     closeModal();
//   }
// });


// CREATE A BUTTON VISITE VIRTUELLE WHEN MAIN TAG HAS A CLASS "VISIT"
// const main = document.getElementsByTagName("main")[0];


// if (main.classList.contains("visit")) {
//   const sidebarMenu = document.getElementsByClassName("sidebar-menu")[0];
//   const presentationButton = document.getElementById("presentation");
//   var value = main.getAttribute('data-visit_name');

//   var visitButton = document.createElement("button");
//   visitButton.setAttribute("id", "visit");
//   visitButton.setAttribute("style", "position: relative");
//   visitButton.setAttribute("style", "span:before");
  
//   visitButton.innerHTML = "<span>Visit virtuelle</span>";
//   // visitButton.textContent += ;

//   visitButton.setAttribute("onclick", "window.location='http://www.negocim.fr/lotissements/" + value + "/lots/01/visite'");

//   sidebarMenu.insertBefore(visitButton, sidebarMenu.childNodes[2]);
// }