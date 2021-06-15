let kraje = [
{
    "id": "Salamanca",
    "city": "Salamanca",
    "peoples": 48479,
    "sign": "salamanca.jpg",
    "text": "Salamanca je univerzitní město ve Španělsku. Je hlavním městem stejnojmenné provincie a součástí autonomního společenství Kastilie a León. Leží 175 km západně od Madridu na řece Tormes. V roce 2019 zde žilo přes 144 000 obyvatel a patřila tak mezi 50 největších španělských měst"
},
{
    "id": "Sevilla",
    "city": "Sevilla",
    "peoples": 48479,
    "sign": "sevila.jpg",
    "text": "Sevilla je kulturní centrum jihu Španělska, leží na řece Guadalquivir a je hlavní město stejnojmenné provincie a celé Andalusie. S více než přibližně 691 tisíci[1] obyvateli je 4. největší město ve Španělsku (po Madridu, Barceloně a Valencii)."
},
{
    "id": "Barcelona",
    "city": "Barcelona",
    "peoples": 48479,
    "sign": "barcelona.jpg",
    "text": "Barcelona je hlavní město Katalánska, současně je i hlavní město provincie Barcelona. Leží při pobřeží Středozemního moře na východě Španělska. Po Madridu je druhým největším španělským městem. Je známá také díky originálním stavbám architekta Antoni Gaudího a jeho současníků"
},
{
    "id": "Madrid",
    "city": "Madrid",
    "peoples": 48479,
    "sign": "madrid.jpg",
    "text": "Madrid je hlavní a největší město Španělska. Ve městě žije přibližně 3,33 milionu[1] obyvatel a metropolitní oblast obývá kolem 6,3 milionů lidí. Jedná se o třetí největší město v Evropské unii, po Londýně a Berlíně, a madridská metropolitní oblast je třetí největší v Evropské unii, po Paříži a Londýně. Město zaujímá celkovou rozlohu 604,3 km²."
},

]




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


    
   

    $("rect").on("click", function(){
        let id = $(this).attr('id');
        console.log(id);
        $("rect").css("fill", fillRect);
        $(this).css("fill", "yellow");
        let mesto = kraje.find(item => {return item.id == id});
        console.log(mesto);
        $('#info').fadeOut(300, function() {$('#info').html(`<div class="card text-left">
        <img class="card-img-top" src="../img/${mesto.sign}" alt="${mesto.sign}">
        <div class="card-body">
          <h4 class="card-title" >${mesto.city}</h4>
          <p class="card-text">${mesto.text}</p>
        </div>
      </div>`)});
        $('#info').fadeIn(800);

    });


   



    

})