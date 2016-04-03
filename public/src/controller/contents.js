/**
 * Created by Jun on 16. 3. 27..
 */
var ViewContents = Backbone.View.extend({
	el:'body',
	initialize:function(){
		this.render();
	},
	render:function(){
		console.log('contents');
		var self = this;
		$.get('public/dist/view/contents.html', function(data){
			var template = _.template(data);
			self.$el.append(template);
			self.fortfolio_item = $('#portfolio .list .item');

			new ViewFooter();
			self.setImageHeight();
		});

		$(window).resize(function(){
			self.setImageHeight();
		});
	},
	events:{
		'mouseover #portfolio .list .item':'itemMouseOver',
		'mouseout #portfolio .list .item':'itemMouseOut'
	},
	itemMouseOver:function(e){
		var hover_item = $(e.currentTarget);
		hover_item.siblings().css('opacity','.4');
	},
	itemMouseOut:function(e){
		var hover_item = $(e.currentTarget);
		hover_item.siblings().css('opacity','1');
	},
	setImageHeight:function(){
		var width = $('#portfolio .contents .list .item .thumb').width();
		var height = commonFunction.resizeHeight(350,250,width);

		$('#portfolio .contents .list .item .thumb').height(height);
	},
	closeModal:function(){
		$('#portfolio-info').remove();
	},
	setBodyScroll:function(type){
		if(type){
			$('body').css('overflow','auto');
		}else{
			$('body').css('overflow','hidden');
		}
	}

});
