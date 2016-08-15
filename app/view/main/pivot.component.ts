import { Component } from '@angular/core';
import { SalesStore } from '../../store/sales.store';

@Component({
	template: `
		<extjs [xtype]='"pivotgrid"'
			[config]='pivotgridConfig'
		></extjs>
	`
})
export class PivotComponent {
	private border:any = 20;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	private pivotgridConfig:any;
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