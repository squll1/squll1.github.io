/**
 * Created by Jun on 16. 3. 27..
 */
var ViewFooter = Backbone.View.extend({
	el:'body',
	initialize:function(){
		this.render();
	},
	render:function(){
		console.log('footer');
		var self = this;
		$.get('public/dist/view/footer.html', function(data){
			var template = _.template(data);
			self.$el.append(template);

			self.name = $('#y-name');
			self.email = $('#y-email');
			self.message = $('#y-message');
		});
	},
	events:{
		'submit #send-email':'sendEmail'
	},
	sendEmail:function(){
		console.log(this.name.val(), this.email.val(), this.message.val());
		var self = this;

		var name = this.name.val();
		var email = this.email.val();
		var message = this.message.val();

		if(!name){
			alert('이름을 입력해 주세요!');
			return false;
		}else if(!email) {
			alert('이메일을 입력해 주세요!');
			return false;
		}else if(!commonFunction.validateEmail(email)){
			alert('이메일 형식에 맞게 입력해 주세요!');
			return false;
		}else if(!message){
			alert('메시지를 입력해 주세요!');
			return false;
		}

		return false;
	}
});
