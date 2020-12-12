const main = document.getElementsByTagName("main")[0];


// FOR TERRRAINS_PRESENTATION PAGE
if (main.getAttribute("id") === "terrain_presentation") {

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
  
  console.log(splideSlide.length);

  // LESS THAN 3 IMAGES
  if (splideSlide.length < 3) {
    carousel.classList.remove("splide");
    carousel.classList.add("carousel");   
     
  
  } else { // MORE THAN 2 IMAGES
    carousel.classList.add("splide"); 
    carousel.classList.remove("carousel");

    document.addEventListener( 'DOMContentLoaded', function () {
      new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        flickPower: 500,
        focus  : 'center',      
      } ).mount();
    }); 
  } 
  // END OF SPLIDE CAROUSEL 
}


// FOR TERRRAINS_GRILLE PAGE
if (main.getAttribute("id") === "terrain_grille") {

  // var planImg = document.getElementById("plan_img");
  // var lot = planImg.getElementsByTagName("a");


  // for (i = 0; i < lot.length; i++) {
  //   var i;
  //   if (lot[i].classList.contains("active")) {
  //     // ADJUST EACH LINK ACCORDINGLY
  //     lot[i].setAttribute("href", "terrain_sudouest_plan_lot_1877.html"); 
  //     // CHANGE "VENDU" IMG TO "OPTION" IMG
  //     lot[i].getElementsByTagName("img")[0].src = "images/lotissement/vignette_option_16.png";
  //   }
  // };

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

     
      //   <button class="simuler_un_credit">
//   <a href="simulateur.html">Visite Virtuelle</a>
// </button>



    }    
  }
}


  
 




