
function addRecommendation(){
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var result = document.getElementById("result");
    
       result.innerHTML = "<p><q>"+message+"</q></p>";
        document.getElementById("message").value ="";
       showPopup(true);
    
}

function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }