import { Component } from '@angular/core';
import { SalesStore } from '../../store/sales.store';

@Component({
		// <extjs [xtype]='"pivotgrid"'
		// 	[config]='pivotgridConfig'
		// ></extjs>

	template: `
		<extjs-pivotgrid
			[config]='pivotgridConfig'
			(ready)='readyPivotGrid($event)'
			(select)='selectPivotGrid($event)'
		></extjs-pivotgrid>
	`
})
export class PivotComponent {
	private border:any = 20;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	private pivotgridConfig:any;
	private thePivotGrid; any;

	readyPivotGrid(o) {
		console.log(o);
		//this.thePivotGrid = thePivotGrid;
	}

	selectPivotGrid(o) {
		console.log(o);
	}

	constructor() {

		this.pivotgridConfig = { 
			left: this.border, top: this.border,
			style: { width: this.size, height: this.size },
			shadow: true,
			matrix: {
				type: 'local',
				viewLayoutType: 'outline',
				store: new SalesStore({}).extjsObject,
				leftAxis: [
					{
						dataIndex: 'country',
						direction: 'DESC',
						header: 'Countries',
						width: 150
					}
				],
				topAxis: [
					{
						dataIndex: 'salesperson',
						direction: 'ASC'
					}
				],
				aggregate: [
					{
						dataIndex: 'amount',
						header: 'Total',
						aggregator: 'sum',
						width: 120
					}
				]
			}
		};
		
	}
}