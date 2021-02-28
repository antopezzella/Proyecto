$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});



$('#contacto-enviar').click(function(){
	$('#prueba').show(500);
});

$('#contacto-enviar').click(function(event) {
    $("#email-contacto")[0].reset(event);
});