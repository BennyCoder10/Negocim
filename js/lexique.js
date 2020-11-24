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
      } else {
        content[i].style.display = "none";
        //   ul.textContent = "<h3>No Result</h3>";          
      }  
  };
};

// ENABLE "ENTER" BUTTON TO START SEARCH
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    document.getElementById("searchButton").click();    
  }
});