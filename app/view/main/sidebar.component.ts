import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import Template from 'sidebar.component.html';
//import Style    from 'sidebar.component.css';


@Component({
	//moduleId: module.id, 
	selector: 'sidebar',
	//styles:  [``],
	//template : Template,
  //styles   : [Style]
  //template: require('./sidebar.component.html'),
  //styles: [require('./sidebar.component.css')

	styleUrls: ['app/view/main/sidebar.component.css'],
	templateUrl: 'app/view/main/sidebar.component.html',
})

export class SideBarComponent {
	private expanded: any = [];
	private chevron: any = [];

	toggle(item){
		this.expanded[item] = !this.expanded[item];
		if (this.chevron[item] === 'down') {
			this.chevron[item] = 'left';
		} else {
			this.chevron[item] = 'down';
		}
	}

	constructor(private router: Router){
	this.expanded = [false,false,false,false,false,false];
	this.chevron = ['down','down','down','down','down','down'];
	}

}
