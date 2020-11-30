const main = document.getElementsByTagName("main")[0];

// CREATE A BUTTON VISITE VIRTUELLE WHEN MAIN TAG HAS A CLASS "VISIT"

// ABLE TO CHOOSE FROM CLASS NAME OR DATA- NAMES
// if (main.getAttribute("data-visit_name") === "418-languidic-les-champs-fleuris") {

if (main.classList.contains("visit")) {
  const sidebarMenu = document.getElementsByClassName("sidebar-menu")[0];
  const visitButton = document.createElement("button");
  const aLink = document.createElement("a");
  var visitValue = main.getAttribute('data-visit_name');
 
  visitButton.setAttribute("class", "visite_virtuelle");
  // visitButton.setAttribute("style", "position: relative");
  // visitButton.setAttribute("style", "span:before");

  aLink.setAttribute("href", "http://negocim.fr/lotissements/460-plouhinec-ar-ti-gar-kozh/lots/06/visite");
  aLink.innerHTML = "<img src='images/lotissement/vr_icon.png'>Visit virtuelle";
  // visitButton.textContent += ;

  visitButton.appendChild(aLink)
  sidebarMenu.insertBefore(visitButton, sidebarMenu.childNodes[2]);


  // CREATE VISITE VIRTUELLE BUTTON IN THE MAIN-RIGHT SECTION FOR EACH TERRAIN PAGE
  // FOR terrain_presentation PAGE
  if (main.getAttribute("id") === "terrain_presentation") {
      // CREATE VISITE VIRTUELLE BUTTON IN THE MAIN RIGHT PAGE
      const btm = document.getElementsByClassName("btm")[0];
      const visitButton = document.createElement("button");
      const aLink = document.createElement("a");
      // var visitValue = main.getAttribute('data-visit_name');
    
      visitButton.setAttribute("class", "visite_virtuelle");
  
      aLink.setAttribute("href", "http://negocim.fr/lotissements/460-plouhinec-ar-ti-gar-kozh/lots/06/visite");
      aLink.innerHTML = "<img src='images/lotissement/vr_icon.png'>Visit virtuelle";
      // visitButton.textContent += ;
  
      visitButton.appendChild(aLink);
      btm.parentNode.insertBefore(visitButton, btm);
    }

  // FOR terrain_plan PAGE
  if (main.getAttribute("id") === "terrain_plan") {

    const click = document.getElementsByClassName("click")[0];
    const pTag = document.createElement("p");
    pTag.innerHTML = "Cliquez sur &nbsp;<img src='images/lotissement/vr_icon.png'>&nbsp; pour visiter le lot comme si vous y étiez";
    pTag.setAttribute("style", "padding-bottom: 0.5rem; font-size: .9rem; font-style: italic;");
    
    click.parentNode.insertBefore(pTag, click.nextSibling);    
  }


  // FOR terrain_plan_lot PAGE
  if (main.getAttribute("id") === "terrain_plan_lot") {

    const visitButton = document.createElement("button");
    const aLink = document.createElement("a");
    const lotImage = document.getElementsByClassName("lot_image")[0];
  
    visitButton.setAttribute("class", "visite_virtuelle");

    aLink.setAttribute("href", "http://negocim.fr/lotissements/460-plouhinec-ar-ti-gar-kozh/lots/06/visite");
    aLink.innerHTML = "<img src='images/lotissement/vr_icon.png'>Visit virtuelle";
    // visitButton.textContent += ;

    visitButton.appendChild(aLink);
    lotImage.appendChild(visitButton);
    // lotImage.insertBefore(visitButton, lotImage.childNodes(-1));    
  }
}



// CREATE A RETOUR BUTTON RESPECTIVELY ACCORDING TO EACH AGENCE
const goback = document.getElementById("goback").getElementsByTagName("a")[0];
var aTag = document.getElementById("sidebar-left").getElementsByTagName("h2")[0].getElementsByTagName("a")[0];
var hrefValue = aTag.getAttribute('href');

goback.setAttribute("href", hrefValue);


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


  // window.addEventListener('mouseup', function(event){
  //   var modalImage = document.getElementById('modal-content');
  //   if(event.target !== modalImage && event.target.parentNode !== modalImage) {
  //     closeModal();
  //   }
  // });
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

      if (tableRow[i].classList.contains("visite_virtuelle")) {
        const visitButton = document.createElement("button");
        const aLink = document.createElement("a");
    
        // visitButton.setAttribute("class", "visite_virtuelle");
  
        aLink.innerHTML = "<img src='images/lotissement/vr_icon.png'>Visit virtuelle";
        aLink.setAttribute("style", "font-style: italic");
        aLink.setAttribute("href", "http://negocim.fr/lotissements/460-plouhinec-ar-ti-gar-kozh/lots/06/visite");

        
        // visitButton.textContent += ;
    
        visitButton.appendChild(aLink);
        rowTd[rowTd.length-1].appendChild(visitButton);
      }
      //   <button class="simuler_un_credit">
//   <a href="simulateur.html">Visite Virtuelle</a>
// </button>



    }    
  }
}


  
 




