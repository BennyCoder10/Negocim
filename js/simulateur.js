// SIMULATEUR STEPS 
var steps = document.getElementsByClassName("steps");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var stepName = document.getElementById("step-name");
var bar = document.getElementById("bar");

var currentStep = 0;
steps[currentStep].style.display = "block";

if (currentStep == 0) 
{
  nextBtn.onclick = ()=> {
    currentStep++;
    var backStep = currentStep -1;
    if ((currentStep > 0) && (currentStep < 4))
    {
      steps[currentStep].style.display = "block";
      steps[backStep].style.display = "none";
      stepName.innerHTML = "Étape " + (currentStep+1);
      bar.style.width = ((currentStep+1) * 30)+"px";
    }

    //  SHOW Mentions Légales LINK ON THE LAST PAGE
    if (currentStep == 3) {
      var legales = document.getElementById("legales");
      legales.style.display = "inline-block";
      nextBtn.style.display = "none"
    }
  }
  prevBtn.onclick = () => {
    if (currentStep > 0)
    {
      currentStep--;
      var backStep = currentStep + 1;
      steps[currentStep].style.display = "block";      
      steps[backStep].style.display = "none";
      stepName.innerHTML = "Étape " + (currentStep+1);
      bar.style.width = ((currentStep+1) * 30)+"px";   
    }   

    //  HIDE Mentions Légales LINK EXCEPT ON THE LAST PAGE
    if (currentStep !== 3) {
      var legales = document.getElementById("legales");
      legales.style.display = "none";
      nextBtn.style.display = "block"
    }    
    if (currentStep == 0) {
      prevBtn.setAttribute("onclick", "window.location='simulateur.html'");  
    }
  }
};