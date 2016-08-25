import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'my-appM',
	styles:  [`
		.center {
			position: absolute;
			color: #111;
			background-color: white;
			background:#f1f5f6;
			top: 0px;													/* topHeight */
			left: 0px; 												/* leftWidth */
			width: calc(100% - 225px - 0px); 	/* 100% - leftWidth - rightWidth */
			height: calc(100% - 50px - 30px); 	/* 100% - topHeight - bottomHeight */
			transition: all 0.2s ease-in-out;
		}
		.center-detail {
			width: calc(100% - 225px - 700px); 	/* 100% - leftWidth - rightWidth */
		}
	`],
	template: `
		<header></header>
		<sidebar></sidebar>
		<section [ngClass]="detail" class="main-container center" [ngClass]="{sidebarPushRight: isActive}">
			<router-outlet></router-outlet>
		</section>
		<detail></detail>
		<footer></footer>
	`
})
export class MainMComponent {
	private detail:any = '';

	constructor(private router: Router) {
		router.events.subscribe(value => {
			if (value instanceof NavigationEnd) {
   			//console.log('Current routes data: ', this.router.routerState.snapshot.url);
				if (this.router.routerState.snapshot.url == '/dataview') {
						this.detail = 'center-detail'
					} else {
						this.detail = '';
					}
 			}
		});

	}
}


		// <!--
		// 	<div class="container-fluid">
		// 			<!-- Page Heading -->
		// 			<div class="row">
		// 					<div class="col-xl-12">
		// 						<div style="width:100%;height:100%;">
		// 							<router-outlet></router-outlet>
		// 						</div>
		// 					</div>
		// 			</div>
		// 		</div>


		// <div>
		// 	<div class="top"><header></header></div>
		// 	<div class="left"><sidebar></sidebar></div>
		// 	<div class="center"><router-outlet></router-outlet></div>
		// 	<div class="bottom"><div class="footer">Copyright 2016 Sencha</div></div>
		// </div>
		// -->

