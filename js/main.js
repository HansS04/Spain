
$(document).ready(function(){
  
    $("#obecne").on("click", function(){
      $("#politika h4, #politika p").toggle(2000);
    
});

   $("#statni").on("click", function(){
     $("#symboly h4, #symboly p,#symboly img").toggle(2000);
});


});


let nav = document.getElementById("sidebar");

nav.addEventListener("click", function(){



function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
});