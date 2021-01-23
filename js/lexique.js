const input = document.getElementById("search");

// SEARCH AND DISPLAY 
function search() {
  var filter, contentsArea, content, a, i, txtValue;
  filter = input.value.toUpperCase();
  contentsArea = document.getElementById("lexique-contents");
  content = contentsArea.getElementsByClassName("content");

  for (i = 0; i < content.length; i++) {
      a = content[i].getElementsByTagName("h3")[0];
      txtValue = a.textContent || a.innerText;
      
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        content[i].style.display = "";
      } else  {
        content[i].style.display = "none";
      }  
  };
};




// DELETE & RESET BUTTON
const delReset = document.getElementById("delReset");

function delAndReset() {
  input.value = '';
  search();
  delReset.style.display = "none";
};

input.addEventListener('input', () => {

  if (input.value.length > 0) {
    delReset.style.display = "inline-block";
  } else {
    delReset.style.display = "none";
  }
});




// SEARCH BUTTON
input.addEventListener("keyup", function(event) {
  // ENABLE "ENTER" BUTTON TO START SEARCH
  if (event.keyCode === 13) {
    search();
  }
});
  

