$.fn.strech_text = function(){
    var elmt          = jQuery(this),
        cont_width    = elmt.width();
        
    if(jQuery(this).find('.stretch_it').length > 0){
        console.log($(this).prop('tagName'));
        var txt           = jQuery(this).find('.stretch_it').html();
        jQuery(this).html(txt);
    }else{
        var txt           = elmt.html();
    }

    var one_line      = jQuery('<span class="stretch_it">' + txt + '</span>'),
        nb_char       = elmt.text().length,
        spacing       = cont_width/nb_char,
        txt_width;
    
    elmt.html(one_line);
    txt_width = one_line.width();
    
    if (txt_width < cont_width){
        var  char_width     = txt_width/nb_char,
        ltr_spacing    = spacing - char_width + (spacing - char_width)/nb_char ; 
        one_line.css({'letter-spacing': ltr_spacing});
    } else {
        one_line.contents().unwrap();
        // elmt.addClass('justify');
    }
};


$(document).ready(function () {
    $('.stretch').each(function(){
        $(this).strech_text();
    });
});

jQuery(window).on("load", function(){
    jQuery('.stretch').each(function(){
        jQuery(this).strech_text();
    });
});

jQuery(window).unload(function(){
    jQuery('.stretch').each(function(){
        jQuery(this).strech_text();
    });
});

jQuery(window).onbeforeload(function(){
    jQuery('.stretch').each(function(){
        jQuery(this).strech_text();
    });
});

jQuery(window).resize(function(){
    jQuery('.stretch').each(function(){
        jQuery(this).strech_text();
    });
});