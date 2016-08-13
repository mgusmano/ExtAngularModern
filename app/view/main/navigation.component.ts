import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'navigation',
	styles:  [`
		.router {
			font-size: 24px;
			color: #FFFFFF;
			text-decoration: none;
		}
	`],


	template: `
	<div style="margin-left:60px;margin-top:60px;">
	<ul>
			<li><a class="router" routerLink="/basic">Basic</a>
			<li><a class="router" routerLink="/list">List</a>
			<li><a class="router" routerLink="/pivot">Pivot</a>
			<li><a class="router" routerLink="/grid">Grid</a>
	</ul>
	</div>
<!--
		<div class="sidenav">
			<div style="height:60px;padding-bottom:1px">
			<img class="logoImage" src="ExtAngular.png" alt="ExtAngular" >
			<span class="logoText">ExtAngular</span>
			</div>
			<extjs #theTreeList
				fit
				[xtype]= "xtype" 
				[config]="config"
				(selectionchange)="onSelectionChange($event)"
			></extjs>
		</div>
-->

	`
})

export class NavigationComponent {
	private xtype: any = 'treelist';
	private config: any;

	constructor (private router: Router) {
		this.config = {
			ui: 'nav',			
			expanderOnly: false, expanderFirst: false, singleExpand: true,
			store: { root: { children: [
						{ text: 'Basic Grid', leaf: true, iconCls: 'fa fa-home', link: 'basic' },
						{ text: 'List', leaf: true, iconCls: 'fa fa-home', link: 'list' },
					]
				}
			}
		}
	}

	private onSelectionChange( event ) {
		this.router.navigate(['/' + event.node.data.link]);
	}

}
