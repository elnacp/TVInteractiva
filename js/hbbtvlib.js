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

function hbbtvlib_synchronization(){

    var button = document.getElementById('divGraphic');
    button.style.display = "none";

}
