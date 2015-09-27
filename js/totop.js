(function($) { 
	// When to show the scroll link
	// higher number = scroll link appears further down the page   
	var upperLimit = 150;
	
	// Our scroll link element
	var scrollElem = $('#totop');
   
	// Scroll to top speed
	var scrollSpeed = 800;

	// Show and hide the scroll to top link based on scroll position   
	scrollElem.hide();
	$(window).scroll(function () {       
		
		//解决多说评论框冲突     
		var scrollTop = $(document).scrollTop();  
		var hidenButton = $(document).height()-$(window).height()-100;
		console.log("scrollTop-->"+scrollTop+"dh-->"+$(document).height()+" wh-->"+$(window).height()+" hidenButton-->"+hidenButton );     
		
		if(scrollTop > upperLimit){
			$(scrollElem).stop().fadeTo(300, 1); // fade back in
		}else if (scrollTop>=hidenButton) {
			$(scrollElem).stop().fadeTo(300, 0); //遇到多说最下面的评论框 隐藏           
		}else{       
			$(scrollElem).stop().fadeTo(300, 0); // fade out
		}
	});
	// Scroll to top animation on click
	$(scrollElem).click(function(){
		$('html, body').animate({scrollTop:0}, scrollSpeed); return false;
	});
})(jQuery);