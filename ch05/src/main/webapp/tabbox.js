// DOM Level 2 Event 처리 : 특정 Elements의 Event의 Listener를 등록하는 방식
// 특정 이벤트 핸들러(Listener)를 여러개 등록할 수 있음
var TabBox = {	
	init: function() {
		window.addEventListener('load', this._onWindowLoad);
	},
	_onWindowLoad: function(){ 
			// div : class='tab-box'
			var divTabBox = document.getElementsByClassName('tab-box')[0];
			var ulTabBox = divTabBox.childNodes[1];
			var liTabs = ulTabBox.getElementsByTagName('li');
			
			for(var i = 0; i < liTabs.length; i++) {		
				liTabs[i].addEventListener('click', TabBox._onTabClicked);
			}
			
	},
	_onTabClicked : function() {
		//unselect
		var liSelecteds = document.getElementsByClassName('selected');
		
		(liSelecteds.length == 1) && (liSelecteds[0].className = ''); // true면 && 뒤 실행, false면 무시
	
		// select
		this.className = 'selected';
	}

}
