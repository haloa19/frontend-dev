// jQuery 버젼
var tabBox = {	
	init: function() {
		$(function(){
			tabBox._onWindowLoad();
		});
	},	
	_onWindowLoad: function(){ 			
		$('.tab-box > ul > li').on("click", tabBox._onTabClicked);			
	},
	_onTabClicked : function() {
			$('.tab-box > ul > li').removeClass('selected');
			$(this).addClass('selected');
			$('#content').text($(this).text() + ' 입니다~');
	}

}
