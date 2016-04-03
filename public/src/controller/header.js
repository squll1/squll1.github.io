/**
 * Created by Jun on 16. 3. 27..
 */
var ViewHeader = Backbone.View.extend({
	el:'body',
	initialize:function(){
		this.render();
		$(window).scroll(this.setHeaderBorder).scroll(this.setMenuActive);
	},
	render:function(){
		console.log('header');
		var self = this;
		$.get('public/dist/view/header.html', function(data){
			var template = _.template(data);
			self.$el.append(template);
		});
	},
	setHeaderBorder:function(){
		if(commonFunction.getScrollPosition().Y==0){
			$('header').css('border-bottom','1px solid #fff');
		}else{
			$('header').css('border-bottom','1px solid #ccc');
		}
	},
	setMenuActive:function(){
		var about = $('#about').outerHeight();
		var portfolio = $('#portfolio').outerHeight();
		var contact = $('#contact').outerHeight();
		var headerMenuItem = $('header .nav-main .nav-list .item');

		var documentHeight = $(document).height();
		var scrollDifference = $(window).height() + $(window).scrollTop();

		var windowY = commonFunction.getScrollPosition().Y;
		if(documentHeight == Math.round(scrollDifference)){
			if(this.current_status != 'contact'){
				headerMenuItem.removeClass('active');
				headerMenuItem.eq(2).addClass('active');
				this.current_status = 'contact';
			}
		}else if(windowY < (about - 51)){
			if(this.current_status != 'about'){
				headerMenuItem.removeClass('active');
				headerMenuItem.eq(0).addClass('active');
				this.current_status = 'about';
			}
		}else if(windowY > (about - 51) && windowY < (about + portfolio - 51)){
			if(this.current_status != 'portfolio'){
				headerMenuItem.removeClass('active');
				headerMenuItem.eq(1).addClass('active');
				this.current_status = 'portfolio';
			}
		}
	}
});
