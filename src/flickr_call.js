import $ from 'jquery';
import './App.css';

function loadJquery() {
$(function(){
	var flickrAPIUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	$.getJSON(flickrAPIUrl, {
		//options
		tagmode: "any", 
		format:"json",
		id: "93254817@N05"
	}).done(function(data){
		//success
		$.each(data.items, function(index, item) {
			var source = item.media.m.replace('_m', '_c');

			//create image and include in gallery div, and wrap each image in an anchor 
			$("<img>").attr("src", source).appendTo("#gallery").wrap($('<a>',{href: source, 'data-attribute':'SRL'}));;

			if (index === 15){
			return false;
		}
		});

		$('#gallery').css({
  			margin: '10px 50px 100px 50px',
  			'display': 'grid',
    		'grid-template-columns': 'repeat(4, 1fr)',
    		'grid-template-rows': 'repeat(4, 25vw)',
    		'grid-gap': '15px'
			});

		$('img').css({
			  padding: '05px',
			  transition: '0.2s',
			  'width': '100%', 
			  'height': '100%',
			  'object-fit': 'cover', 
			  transition: '0.5s', 
			  //filter: 'grayscale(100%)'
			});

		$("img").hover(function() {
            $(this).css("transform","scale(1.05)")
            //$(this).css("filter","grayscale(0)")
          }).mouseout(function(){
              $(this).css({"transform":"scale(1)"});
          });

	}).fail(function(){
		alert("ajax call failed");
	})
});
}
export default loadJquery;



