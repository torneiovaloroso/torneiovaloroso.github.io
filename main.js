//document.getElementById("videobackground").pause();

document.addEventListener("mousemove", parallax);

var mover = false;

function parallax(e){
    // if(!mover)
    //     return;
    $('.movable').each(function(move){
        var moving_value = $(this).attr("data-move-value");
        var x = (e.clientX * moving_value) / 150;
        var y = (e.clientY * moving_value) / 150;

        $(this).css("transform", "translateX(" + -x + "px) translateY(" + -y + "px)");
    });
}

$('.nav-dot').click(function(){
    $('.nav-dot').removeClass("active");
    $(this).addClass("active");
    
    if($(this).index() == 1) {
        $('#t1').addClass("active")
    }
    
    if($(this).index() == 0) {
        $('#t1').removeClass("active")
    }
});

//animation: flarerotation 100s infinite linear;
$('.flares img').eq(0).css("animation", "flarerotation 200s infinite linear");
$('.flares img').eq(1).css("animation", "counterflarerotation 10s infinite linear");
$('.flares img').eq(2).css("animation", "flarerotation 10s infinite linear");
$('.flares img').eq(3).css("animation", "counterflarerotation 50s infinite linear");
$('.flares img').eq(4).css("animation", "flarerotation 50s infinite linear");


$('.flares img').each(function(){
    var v = getRandomInt(1, 3);
    $(this).css("transform", "Rotade(360deg)")
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
  


$(document).ready(function() {
    $(".bouncetext").lettering();
  });
  
  
  
  
  
  $(document).ready(function() {
    animation();
  }, 1000);
  
  
  function animation() {
    var title1 = new TimelineMax();
    title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
    title1.staggerFromTo(".bouncetext span", 0.5, 
    {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
  }


  /*global jQuery */
/*!
* Lettering.JS 0.7.0
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
	function injector(t, splitter, klass, after) {
		var text = t.text()
		, a = text.split(splitter)
		, inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
				inject += '<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
			});
			t.attr('aria-label',text)
			.empty()
			.append(inject)

		}
	}


	var methods = {
		init : function() {

			return this.each(function() {
				injector($(this), '', 'char', '');
			});

		},

		words : function() {

			return this.each(function() {
				injector($(this), ' ', 'word', ' ');
			});

		},

		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
				// (of the word "split").  If you're trying to use this plugin on that
				// md5 hash string, it will fail because you're being ridiculous.
				injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);

