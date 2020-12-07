const main = document.getElementsByTagName("main")[0];


// FOR TERRRAINS_PRESENTATION PAGE
if (main.getAttribute("id") === "terrain_presentation") {

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



  // CAROUSEL 
  const carouselImages = document.getElementsByTagName("figure")[0].getElementsByTagName("img");

  // if (carouselImages.length < 3) {
  //   var i;
  //   for (i = 0; i < carouselImages.length; i++) {
  //     carouselImages[i].style.width = "40%"; 
  //     carouselImages[i].style.position = "static"; 
  //   }
     
  
  // } else {

  //   window.addEventListener('load', () => {
  //     var
  //       carousels = document.querySelectorAll('.carousel')
  //     ;

  //     for (var i = 0; i < carousels.length; i++) {
  //       carousel(carousels[i]);
  //     }
  //   });

  //   function carousel(root) {
  //     var
  //       figure = root.querySelector('figure'),
  //       nav = root.querySelector('nav'),
  //       images = figure.children,
  //       n = images.length,
  //       gap = root.dataset.gap || 0,
  //       bfc = 'bfc' in root.dataset,
        
  //       theta =  2 * Math.PI / n,
  //       currImage = 0
  //     ;
      
  //     setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  //     window.addEventListener('resize', () => { 
  //       setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
  //     });

  //     setupNavigation();

  //     function setupCarousel(n, s) {
  //       var	
  //         apothem = s / (2 * Math.tan(Math.PI / n))
  //       ;
        
  //       figure.style.transformOrigin = `50% 50% ${- apothem}px`;

  //       for (var i = 0; i < n; i++)
  //         images[i].style.padding = `${gap}px`;
  //       for (i = 1; i < n; i++) {
  //         images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
  //         images[i].style.transform = `rotateY(${i * theta}rad)`;
  //       }
  //       if (bfc)
  //         for (i = 0; i < n; i++)
  //           images[i].style.backfaceVisibility = 'hidden';
        
  //       rotateCarousel(currImage);
  //     }

  //     function setupNavigation() {
  //       nav.addEventListener('click', onClick, true);
        
  //       function onClick(e) {
  //         e.stopPropagation();
          
  //         var t = e.target;
  //         if (t.tagName.toUpperCase() != 'BUTTON')
  //           return;
          
  //         if (t.classList.contains('next')) {
  //           currImage++;
  //         }
  //         else {
  //           currImage--;
  //         }
          
  //         rotateCarousel(currImage);
  //       }        
  //     }

  //     function rotateCarousel(imageIndex) {
  //       figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
  //     }    
  //   }
  // } 
  // END OF CAROUSEL

  


}


// FOR TERRRAINS_PRESENTATION PAGE
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


  
 




