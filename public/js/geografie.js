




$(function(){
    let fillPath = $("path").css("fill");
    let fillRect = $("rect").css("fill");

    $("path").on("click", function(){
        $("path").popover("hide"); 
    });

    $("path").on("mouseover", function(){
        $("path").css("fill", fillPath);
        $(this).css("fill", "red");
  
        $(this).popover({

            'trigger':'click',

            'placement': 'right',

            'offset': '10%, -20',

            'title': $(this).find('title').text()
        }); 
        
    });


    
    function KrajeBlock(kraj){

    $("rect").on("click", function(){
        
        let id = $(this).attr('id');
        console.log(id);
        $("rect").css("fill", fillRect);
        $(this).css("fill", "yellow");
        
        let mesto = kraj.find(item => {return item.id == id});
        console.log(mesto);
        $('#info').fadeOut(300, function() {$('#info').html(`<div class="card text-left">
        <img class="card-img-top" src="../img/${mesto.sign}" alt="${mesto.sign}">
        <div class="card-body">
          <h4 class="card-title" >${mesto.city}</h4>
          <p class="card-text">${mesto.text}</p>
        </div>
      </div>`)});
        $('#info').fadeIn(800);

    });}


   
    fetch('../data/kraje.json')
    .then(response => {
       console.log(response);
       return response.json()
    })
    .then(json => {
       console.log(json);
       KrajeBlock(json);
    })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });


    

})