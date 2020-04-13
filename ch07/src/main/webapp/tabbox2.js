// jQuery 버젼
var tabBox = {	
	init: function() {
		$(this._init);
	},	
	_init: function(){ 	
		$('.tab-box li').click(tabBox._changeTab);	
		tabBox._changeTab();
	},
	_changeTab : function() {		
		 $('.tab-box li.selected').removeClass('selected');
		 
		 var $liTab = (this == tabBox) ? $('.tab-box li:first-child') :	$(this);
				 		
		$('.tab-box div').text($liTab.data('no') + "의 탭뷰입니다.");	//$liTab.attr('data-no')
		$liTab.addClass('selected');
		
	}

}
