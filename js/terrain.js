const main = document.getElementsByTagName("main")[0];

// FOR TERRRAINS_PRESENTATION PAGE
if (main.getAttribute("id") === "terrain_single_page") {

  // MODAL FOR PRESENTATION IMAGES
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
  // END OF MODAL FOR PRESENTATION IMAGES


  // SPLIDE CAROUSEL 
  const carousel = document.getElementById("carousel");
  const splideSlide = document.getElementsByClassName("splide__slide");
  
  // LESS THAN 3 IMAGES
  if (splideSlide.length < 3) {
    carousel.classList.remove("splide");
    carousel.classList.add("carousel");    
  } else { // MORE THAN 2 IMAGES
    carousel.classList.add("splide"); 
    carousel.classList.remove("carousel");

    document.addEventListener( 'DOMContentLoaded', function () {
      
      if (window.innerWidth > 500) {
        new Splide( '.splide', {
          type   : 'loop',
          perPage: 3,
          perMove: 1,
          focus  : 'center',
        } ).mount();
      } else { // WHEN SCREEN WIDTH IS LESS THAN 500PX
        new Splide( '.splide', {
          type   : 'loop',
          perPage: 2,
          perMove: 1,
          focus  : 'center', 
        } ).mount();
      }      
    }); 
  } 
  // END OF SPLIDE CAROUSEL 
}


// FOR TERRRAINS_GRILLE PAGE
if (main.getAttribute("id") === "terrain_grille") {

  var grille = document.getElementsByClassName("grille")[0];
  var lotTable = grille.getElementsByTagName("table")[0];
  var tableRow = lotTable.getElementsByTagName("tr");


  for (i = 0; i < tableRow.length; i++) {
    var i;
    var reserve = tableRow[i].getElementsByClassName("reserve")[0];
    var rowTd = tableRow[i].getElementsByTagName("td");

    if (! tableRow[0] || tableRow[i].classList.contains("active")) {
      // ADJUST EACH LINK & SIMULER BUTTON ACCORDINGLY WHEN CLASS "ACTIVE" ADDED
      tableRow[i].setAttribute("onclick", "window.location='terrains_plan_lot.html'");
      rowTd[rowTd.length-1].innerHTML = "<button class='simuler_un_credit'><a href='simulateur.html'>Simuler un crédit</a></button>";
      reserve.textContent = "";
    }    
  }
}


  
 




