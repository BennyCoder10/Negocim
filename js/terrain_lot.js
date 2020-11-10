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

  if (tableRow[i].classList.contains("active")) {
    // ADJUST EACH LINK & SIMULER BUTTON ACCORDINGLY WHEN CLASS "ACTIVE" ADDED
    tableRow[i].setAttribute("onclick", "window.location='terrain_sudouest_plan_lot_1877.html'");
    rowTd[rowTd.length-1].innerHTML = "<button class='simuler_un_credit'><a href='simulateur.html'>Simuler un crédit</a></button>";
    reserve.innerHTML = "<td></td>";
  } else {
    
  }
}


  
 
