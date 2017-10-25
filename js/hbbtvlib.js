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





}

