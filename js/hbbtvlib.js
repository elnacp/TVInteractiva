/*
 * To use This library, You need to add the OIPF application manager objects to your HTML page,
 *
 *	<object id="oipfAppMan" type="application/oipfApplicationManager"></object>
 */

function hbbtvlib_red_initialize(){
  //should be called show() function, if not the application will not be shown;
  var appManager = document.getElementById("oipfAppMan").getOwnerApplication(document);

  appManager.show();

  redButton();



  // IMPORTANT!!: only RED button should be accepted.
  appManager.privateData.keyset.setValue(0x1);

};

function redButton(){
  //buttonContainer

  $('#segonPanell').hide();
  $('#okContainer').hide();
  $('#catalog').hide();

  setTimeout(function(){
    $('#buttonContainer').show().delay(10000).fadeOut( function(){
          $('#buttonContainer').hide().delay(5000).fadeIn( function(){
              $('#buttonContainer').show().delay(5000).fadeOut( function(){
                $('#buttonContainer').hide().delay(60000).fadeIn( function(){
                  $('#buttonContainer').show().delay(5000).fadeOut( function(){
                    $('#buttonContainer').hide();
                  });
                });
              });
          });
    });
  });
};

function generarNumero(){
    var numero;
    var numero="";
    var cifra=[];
    for(a=0;a<4;a++){
        cifra[a]=parseInt(Math.random()*10);
        if(a==0){	//quita esto si el número puede empezar por cero
            cifra[a]=parseInt(Math.random()*9)+1;//quita esto si el número puede empezar por cero
        }//quita esto si el número puede empezar por cero
        for(aa=0;aa<a;aa++){
            if(cifra[a]==cifra[aa]){a-=1;break}

        }
    }
    for(a=0;a<4;a++){
        numero+=cifra[a];
    }
    numero=parseInt(numero);//quita esto para que pueda empezar por cero.

    //document.write(numero);
    return numero;
};


function hbbtvlib_synchronization(){

    $('#catalog').hide();
    var button = document.getElementById('divGraphic');
    button.style.display = "none";
    $('#segonPanell').show();
    $('#okContainer').show();
    var num = generarNumero();
    document.getElementById('numeroRandom').innerHTML = num;
    //console.log(num);

};


function hbbtvlib_catalog(){

    $('#segonPanell').hide();
    $('#okContainer').hide();
    $('#buttonContainer').hide();
    $('#catalog').show();

    llegir_json();
    llegir_usuaris();


};


function llegir_json() {


    var fileName = "dades.json";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange= function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var dades =[];
            didResponse(xmlhttp.responseText, dades);
            omplirInformacio(dades);
        }
    }
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open("GET", "/data/"+fileName, true);
    xmlhttp.send();

};

function didResponse(response, dades) {

    jsonArray = JSON.parse(response);
    for ( i = 0; i < jsonArray.videos.length; i++ ){
        var aux = [];
        aux.push( jsonArray.videos[i].albumName);
        aux.push(jsonArray.videos[i].artistName);
        aux.push(jsonArray.videos[i].votes);
        aux.push(jsonArray.videos[i].description);
        aux.push(jsonArray.videos[i].src);

        dades.push(aux);
    }

}


function llegir_usuaris(){
    var fileName = "users.json";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange= function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var dades =[];
            extraccioUsuaris(xmlhttp.responseText, dades);
        }
    }
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open("GET", "/data/"+fileName, true);
    xmlhttp.send();
};

function extraccioUsuaris(response, dades){
    jsonArray = JSON.parse(response);
    for ( i = 0; i < jsonArray.usuaris.length; i++ ){
        dades.push( jsonArray.usuaris[i].userName);
    }
};

