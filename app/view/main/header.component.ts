import { Component } from '@angular/core';

@Component({
	selector: 'header',
	styleUrls: ['app/view/main/header.component.css'],
	templateUrl: 'app/view/main/header.component.html',
})
export class HeaderComponent { 
	toggleSidebar() {
		alert('hi');
	}

	toggleDetail() {
		var c = $('#center');
		if(!c.hasClass('center-detail')){
			c.addClass('center-detail');
		} else {
			c.removeClass('center-detail');
		}
	}

}
