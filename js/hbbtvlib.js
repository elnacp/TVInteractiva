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
  

};

//executa els temps que el boto inicial a d'apareixer i desapareixer
function redButton(){
  
  $('#segonPanell').hide();
  $('#okContainer').hide();
  $('#catalog').hide();
  $('#buttonContainerBlue').hide();
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

//genera el numero de sincronitzacio de forma aleatoria
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

//mostra el menu de sincronitzacio
function hbbtvlib_synchronization(){

    $('#catalog').hide();
    $('#buttonContainerBlue').hide();
    var button = document.getElementById('divGraphic');
    button.style.display = "none";
    $('#segonPanell').show();
    $('#okContainer').show();
    var num = generarNumero();
    document.getElementById('numeroRandom').innerHTML = num;
    //console.log(num);

};

//mostra el menu del cataleg
function hbbtvlib_catalog(){

    $('#segonPanell').hide();
    $('#okContainer').hide();
    $('#buttonContainer').hide();
    $('#buttonContainerBlue').hide();
    $('#catalog').show();
    document.getElementById('img1').src = "./img/1.jpg";
    document.getElementById('img1').style.height = "84px";
    document.getElementById('img1').style.width= "84px";
    document.getElementById('img2').src = "./img/2.jpg";
    document.getElementById('img2').style.height = "84px";
    document.getElementById('img2').style.width= "84px";
    document.getElementById('img3').src = "./img/3.jpg";
    document.getElementById('img3').style.height = "84px";
    document.getElementById('img3').style.width= "84px";
    document.getElementById('img4').src = "./img/4.jpg";
    document.getElementById('img4').style.height = "84px";
    document.getElementById('img4').style.width= "84px";
    document.getElementById('img5').src = "./img/5.jpg";
    document.getElementById('img5').style.height = "84px";
    document.getElementById('img5').style.width= "84px";

};

//llegeix el fitxer json dels videos del cataleg
function llegir_json() {

    var fileName = "dades.json";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange= function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
             document.getElementById("videosList").innerHTML = xmlhttp.responseText;
            
      
        }
    }
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open("GET", "/data/"+fileName, true);
    xmlhttp.send();

};

//llegeix el fitxer json que conte els usuaris
function llegir_usuaris(){
    var fileName = "users.json";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange= function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
           
           document.getElementById("usuaris").innerHTML = xmlhttp.responseText;
          
        }
    }
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open("GET", "/data/"+fileName, true);
    xmlhttp.send();
};

//printa les dades inicials del cataleg
function printCatalog(dades, j){

    index = 1;
    
    
    for(i = j; i < j + 5; i++){
       
      document.getElementById("albumname" + index).innerHTML = dades.videos[i].albumName;
      document.getElementById("artistname" + index).innerHTML = dades.videos[i].artistName;
      document.getElementById("Views" + index).innerHTML = dades.videos[i].votes;
      index++;

    }

}

//printa els usuaris del cataleg
function printUsers(usuaris){
    
    for(i = 1; i < usuaris.users.length; i++){
        
        document.getElementById("user"+ i).innerHTML = usuaris.users[i].userName;
    }
}

//printa la descripcio de cada video
function printDescription(dades,j){
    
    document.getElementById("albumname").innerHTML = dades.videos[j].albumName;
    document.getElementById("artistname").innerHTML = dades.videos[j].artistName;
    document.getElementById("Views").innerHTML = dades.videos[j].votes;
    document.getElementById("Description").innerHTML = dades.videos[j].description;
    
}

//crea el canal per emetre video a la pantalla lateral petita
function TVpetita(video){
    video = document.getElementById("tinyScreen");
    video.type = "video/broadcast";
    video.style.width = "350px";
    video.style.height = "250px";
    video.bindToCurrentChannel();
}

//activa el fullscreen dels videos del cataleg
function fullScreen(fullscreen){
    console.log("dintre");
    document.getElementById("tinyScreen").style.width="1280px";
    document.getElementById("tinyScreen").style.height="720px";
    fullscreen = 1;
    $('#catalog').hide();
    $('buttonContainerBlue').show();
    $('#buttonContainerBlue').show().delay(5000).fadeOut( function(){});
}