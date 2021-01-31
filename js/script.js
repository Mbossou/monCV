$(function(){

    $(".navbar a, footer a").on("click", function(event){

        event.preventDefault();
        var hash = this.hash;

        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})

    });

})

var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}

var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
function closeModal() {
    overlay.style.display='none';
    }
    
//$(function(){

  //  $('#accordeon').accordion(); // appel du plugin
  //  $('#accordeon').accordion({
    //  collapsible : true;
    //  header : '.titre';

//});

//})
