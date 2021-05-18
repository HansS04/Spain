







$(document).ready(function () {
    $("#Obecne").on("click", function () {
        $("#Pocatek h4, #Pocatek p, #Pocatek img").toggle(2000);

    });
    function eventsBlock(events) {
    events.forEach((event) => {
        $(".event-hide").hide();
        $("#stoleti ").append(`
        <h4 class="ramec ramec2 event-stoleti bg-dark ">${event.stoleti}- <i style="color:white; font-weight: 300;">${event.udalost}</i></h4>
        <div class="row  event-hide bg-dark text-white p-3 ml-3 mr-2" style="margin-top:-10px!important;">
      
         <div class="col-sm-6 event-podrobnosti">
        <p id="podrobnosti" style="font-weight: 280;" >${event.podrobnosti}</p>
            </div>
        <div class="col-sm-5 event-podrobnosti">
            <img class="img-fluid mt-2 ramecek" style="width: ${event.type}" src="${event.img}" alt="Obrazek">
        </div>
    </div>`);
    });

    $(".event-stoleti").on("click", function () {
        $(".event-hide").hide();
        $(this).next().toggle(500);
    });
    
    };
// načte data z externího json souboru 
    fetch('../data/events.json')
    .then(response => {
       console.log(response);
       return response.json()
    })
    .then(json => {
       console.log(json);
       eventsBlock(json);
    })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });

// Funkce v galerii, kde se na pevno vypíšou, jednotlivé obrázky s jmenovkami 
    function heroesBlock(heroes) {
    heroes.forEach((hero) => {
        $(".galery-content").hide()
        $(".galery1 ").append(`
        <div class="galery col-sm-3 " style="margin-left: 50px!important;">
                    <img class="ramecek" style="width: 200px;" src="${hero.img}" alt="${hero.jmeno}">
                    <h5 class="jmenovka">${hero.jmeno}</h5>
                    <p class="galery-content">${hero.popis} <a href="${hero.online}">odkaz...</a></p>
                </div>
        `);
    });
    $(".jmenovka ").on("click", function () {
        $(".galery-content").hide();
        $(this).next().toggle(500);
    });
};

//Načte data z externího Json souboru 
    fetch('../data/heroes.json')
    .then(response => {
       console.log(response);
       return response.json()
    })
    .then(json => {
       console.log(json);
       heroesBlock(json);
    })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });




   
    });


