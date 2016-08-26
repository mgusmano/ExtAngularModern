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

	private image: any = 'trump'; private name:any = 'Donald Trump';
	//private image: any = 'clinton'; private name:any = 'Hillary Clinton';
	//private image: any = 'obama'; private name:any = 'Barack Obama';


	toggle(item){
		this.expanded[item] = !this.expanded[item];
		if (this.chevron[item] === 'right') {
			this.chevron[item] = 'down';
		} else {
			this.chevron[item] = 'right';
		}
	}

	constructor(private router: Router){
	this.expanded = [false,false,false,false,false,false];
	this.chevron = ['right','right','right','right','right','right'];
	}

}
