import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'navigation',
	styles:  [`
		ul a {
			font-size: 24px;
			padding: 5px 10px;
			text-decoration: none;
			margin-top: 10px;
			display: inline-block;
			color: #FFFFFF;
		}
		ul a:visited, a:link {
			//color: #607D8B;
		}
		ul a:hover {
			color: black;
			background-color: lightgray;
			width: 90%;
		}
		ul a.active {
			color: #00695c;
			background-color: white;
			width: 90%;
		}
	`],
	template: `
	<div style="margin-left:20px;margin-top:60px;">
	<ul>
			<li><a routerLink="/list" routerLinkActive="active" >List</a>
			<li><a routerLink="/grid" routerLinkActive="active" >Grid</a>
			<li><a routerLink="/widgetgrid" routerLinkActive="active" >Widget Grid</a>
			<li><a routerLink="/chart" routerLinkActive="active" >Chart</a>
			<li><a routerLink="/pie" routerLinkActive="active" >Pie</a>
			<li><a routerLink="/pivot" routerLinkActive="active" >Pivot</a>
			<li><a routerLink="/analyze" routerLinkActive="active" >Analyze</a>
			<li><a routerLink="/basic" routerLinkActive="active" >Basic</a>
	</ul>
	</div>
	`
})

export class NavigationComponent {

}
