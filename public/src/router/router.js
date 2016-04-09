/**
 * Created by Jun on 16. 3. 27..
 */
var Router = Backbone.Router.extend({
	routes:{
		'portfolio/:project':'portfolio_info',
		'*notFound': 'home'
	},
	initialize:function(){
		this.initUI();
	},
	initUI:function(){
		new ViewHeader();
		this.viewContent = new ViewContents();
	},
	home:function(){
		this.viewContent.setBodyScroll(true);
		this.viewContent.closeModal();

		commonFunction.addHistory();
	},
	portfolio_info:function(project){
		console.log(project);
		this.viewContent.setBodyScroll(false);

		if(this.viewPortfolioModal){
			this.viewPortfolioModal.id = project;
			this.viewPortfolioModal.render();
		}else{
			this.viewPortfolioModal = new ViewPortfolioModal({id:project});
		}

		commonFunction.addHistory();
	}
});

$(function(){
	var router = new Router();
	Backbone.history.start();
});
