// SIMULATEUR CHOICE PAGE
var simulateur = document.getElementById("simulateur");
var simulateurSteps = document.getElementById("simulateur_steps");
var choiceTerrain = document.getElementById("choice");
var choiceTerrain_Const = document.getElementById("choice_terrainConst");
var nature = document.getElementById("nature");


function myChoice(clicked_id) {
  simulateur.style.display = "none";
  simulateurSteps.style.display = "block";

  if (clicked_id == "choice_terrain") {
    nature.innerText = "Terrain seul";
  } else { 
    nature.innerText = "Terrain + Construction";
  }  
}

// END OF SIMULATEUR CHOICE PAGE

// SIMULATEUR STEPS

var steps = document.getElementsByClassName("steps")[0];
var stepWrapperUp = document.getElementsByClassName("step_wrapper_up");
var stepWrapperDown = document.getElementsByClassName("step_wrapper_down");
var recap = document.getElementById("recap");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var stepName = document.getElementById("step-name");
var bar = document.getElementById("bar");


var currentStep = 0;
steps.style.display = "block";
stepWrapperUp[currentStep].style.display = "block";
stepWrapperDown[currentStep].style.display = "block";


// PREV & NEXT BUTTONS ON EACH PAGE
if (currentStep == 0) 
{
  nextBtn.onclick = ()=> {
    currentStep++;
    var backStep = currentStep -1;
    if ((currentStep > 0) && (currentStep < 4))
    {
      stepWrapperUp[currentStep].style.display = "block";
      stepWrapperDown[currentStep].style.display = "block";
      stepWrapperUp[backStep].style.display = "none";
      stepWrapperDown[backStep].style.display = "none";
      stepName.innerHTML = "Étape " + (currentStep+1);
      bar.style.width = ((currentStep+1) * 30)+"px";
    }

    //  ON THE LAST PAGE
    if (currentStep == 3) {
      // SHOW Mentions Légales LINK
      var legales = document.getElementById("legales");
      legales.style.display = "inline-block";
      nextBtn.style.display = "none";
      
      // HIDE Récapitulatif TABLE
      recap.style.display = "none";
    }
  }
  prevBtn.onclick = () => {
    if (currentStep == 0) {
      simulateur.style.display = "block";
      simulateurSteps.style.display = "none";
    }

    if (currentStep > 0)
    {
      currentStep--;
      var backStep = currentStep + 1;
      stepWrapperUp[currentStep].style.display = "block";      
      stepWrapperDown[currentStep].style.display = "block";      
      stepWrapperUp[backStep].style.display = "none";
      stepWrapperDown[backStep].style.display = "none";
      stepName.innerHTML = "Étape " + (currentStep+1);
      bar.style.width = ((currentStep+1) * 30)+"px";   

      // SHOW Récapitulatif TABLE
      recap.style.display = "block";
    }   

    //  HIDE Mentions Légales LINK EXCEPT ON THE LAST PAGE
    if (currentStep !== 3) {
      var legales = document.getElementById("legales");
      legales.style.display = "none";
      nextBtn.style.display = "block"
    }       
  }
};


// END OF SIMULATEUR STEPS



// INPUT FIELD
const region = document.getElementById("agences_select");
const commune = document.getElementById("cities_select");
const lotissement = document.getElementById("lotissements_select");
const lot = document.getElementById("lots_select");
const apport = document.getElementById("apport");

// OUTPUT FIELD
const communeValue = document.getElementById("commune_value");
const lotissementValue = document.getElementById("lotissement_value");
const lotValue = document.getElementById("lot_value");
const apportValue = document.getElementById("apport_value");


commune.addEventListener('change', ($event) => {
  communeValue.textContent = $event.target.options[$event.target.selectedIndex].text;
});

lotissement.addEventListener('change', ($event) => {
  lotissementValue.textContent = $event.target.options[$event.target.selectedIndex].text;
});

lot.addEventListener('change', ($event) => {
  lotValue.textContent = $event.target.options[$event.target.selectedIndex].text;
});

apport.addEventListener('input', ($event) => {
  apportValue.textContent = "- " + $event.target.value + " €";
});


// CALCULATE BUTTON 
// const calc = document.getElementById("calc");
const notaire = document.getElementById("notaire");
const hypo = document.getElementById("hypo");

function calculate1() {
  notaire.textContent = "20" + " €";
  hypo.textContent = "5 000" + " €";
}





