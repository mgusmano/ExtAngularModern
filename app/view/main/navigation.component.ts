import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'navigation',
	styles:  [`

h1 {
  font-size: 1.2em;
  color: #999;
  margin-bottom: 0;
}
h2 {
  font-size: 2em;
  margin-top: 0;
  padding-top: 0;
}
ul a {
	font-size: 24px;
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
	color: #FFFFFF;
  //background-color: #eee;
  //border-radius: 4px;
}
ul a:visited, a:link {
  //color: #607D8B;
}
ul a:hover {
  color: black;
  background-color: white;
	width: 90%;
}
ul a.active {
  color: #039be5;
}



	`],


	template: `
	<div style="margin-left:20px;margin-top:60px;">

	<ul>
			<li><a class="router" routerLink="/basic">Basic</a>
			<li><a class="router" routerLink="/list">List</a>
			<li><a class="router" routerLink="/pivot">Pivot</a>
			<li><a class="router" routerLink="/grid">Grid</a>
			<li><a class="router" routerLink="/analyze">Analyze</a>
			<li><a class="router" routerLink="/chart">Chart</a>
			<li><a class="xrouter" routerLink="/widgetgrid">Widget Grid</a>
	</ul>
	</div>
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
