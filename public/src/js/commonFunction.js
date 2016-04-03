/**
 * Created by Jun on 16. 3. 27..
 */
var commonFunction = (function(){
	return {
		getScrollPosition:function(){
			var d = document.documentElement;
			var a = document.body;
			var c = {};
			c.X = document.all ? (!d.scrollLeft ? a.scrollLeft : d.scrollLeft) : (window.pageXOffset ? window.pageXOffset : window.scrollX);
			c.Y = document.all ? (!d.scrollTop ? a.scrollTop : d.scrollTop) : (window.pageYOffset ? window.pageYOffset : window.scrollY);
			return c
		},
		resizeHeight:function(ratio_width, ratio_height, width){
			return width * ratio_height / ratio_width;
		},
		validateEmail:function(email){
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
	}
})();
