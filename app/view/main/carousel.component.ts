import { Component } from '@angular/core';
//import { CompanyStore } from '../../store/company.store';

@Component({
  selector: '',
	styles:  [`
		carousel-item > * {
			position: absolute !important;
			width: 100%;
			height: 100%;
		}
	`],
	template: `
		<extjs [xtype]='"carousel"' 
			[config]='carouselConfig' 
		></extjs>
	`
})
export class CarouselComponent { 
	private border:any = 20;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	
	carouselConfig: any = { 
		left: this.border, top: this.border,
		style: { width: this.size, height: this.size },
		shadow: true,

		items: [
			{
				html: '<p>Swipe left to show the next card…</p>',
				cls: 'card'
			},
			{
				html: '<p>You can also tap on either side of the indicators.</p>',
				cls: 'card'
			},
			{
				html: 'Card #3',
				cls: 'card'
			}
		]
	};

}
