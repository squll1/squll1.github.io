/**
 * Created by Jun on 16. 3. 27..
 */
var ViewPortfolioModal = Backbone.View.extend({
	el:'body',
	initialize:function(){
		this.render();
	},
	render:function(){
		var self = this;
		$.get('public/dist/view/portfolio_info.html', function(data){
			var template = _.template(data);
			self.$el.append(template);

			self.title = $('#portfolio-info .contents .intro .description .title');
			self.date = $('#portfolio-info .contents .intro .description .date');
			self.introduce = $('#portfolio-info .contents .intro .description .introduce');
			self.cover_img = $('#portfolio-info .wrapper .contents .intro .cover img');
			self.screenshots = $('#portfolio-info .contents .screenshots .list');
			self.work = $('#portfolio-info .contents .work .description');
			self.range = $('#portfolio-info .contents .range .description');
			self.skills = $('#portfolio-info .contents .skills .description');

			self.getContent();
		});
	},
	events:{
		'click #portfolio-info .close':'closeModal',
		'click #portfolio-info':'closeModal',
		'click #portfolio-info .contents':'blockEvent'
	},
	closeModal:function(){
		console.log('closeModal');

		if(history.length < 3){
			location.href = '';
		}else{
			history.back();
		}
	},
	blockEvent:function(e){
		e.stopPropagation();
		e.preventDefault();
	},
	getContent:function(){
		console.log(this.id);
		this.resetData();
		var self = this;
		$.ajax({
			url:'public/data/portfolio.json',
			type:'get',
			success:function(data){
				console.log(data);

				for(var i = 0, length = data.length; i < length; i++){
					console.log(data[i].id);
					console.log(self.id);
					if(data[i].id == self.id){
						console.log(data[i]);
						if(data[i].link){
							self.title.html(data[i].title+' <a class="link" target="_blank" href="'+data[i].link+'"><img src="public/img/link.png"></a>');
						}else{
							self.title.html(data[i].title);
						}


						self.date.html(data[i].date);
						self.introduce.html(data[i].introduce);
						console.log(self.cover_img);
						console.log(data[i].cover_image);
						self.cover_img.attr('src', data[i].cover_image);
						self.screenshots.empty();
						for(var screenshot_count = 0, screeenshot_length = data[i].screenshots.length; screenshot_count < screeenshot_length; screenshot_count++){
							self.screenshots.append('<li class="item"><img src="'+data[i].screenshots[screenshot_count]+'" alt="screenshot image"></li>');
						}
						self.work.html(data[i].work);
						self.range.html(data[i].range);
						self.skills.html(data[i].skills);

						break;
					}
				}
			}
		});
	},
	resetData:function(){
		//this.title.html('');
		//this.date
		//this.introduce
		//this.cover_img
		//this.screenshots
		//this.work
		//this.range
		//this.skills
	}
});
