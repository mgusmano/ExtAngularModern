import { Component } from '@angular/core';
import { AgencyPortfolioStore } from '../../store/agencyportfolio.store';

@Component({
	template: `
	<button style="margin-top:10px;margin-left:10px;" (click)="showConfigurator2()">Show Configurator</button>
		<extjs-pivotgrid
			(ready)='readyPivotGrid($event)'
			[config]='configuratorConfig'
		></extjs-pivotgrid>
	`
})
export class ConfiguratorComponent {
	private border:any = 50;
	private width: any = 'calc(100% - 0px)';
	private height: any = 'calc(100% - ' + this.border + 'px)';
	//private configuratorConfig:any;
	private thePivotGrid; any;

	readyPivotGrid(thePivotGrid) {
		this.thePivotGrid = thePivotGrid;
	}

	showConfigurator2() {
		this.thePivotGrid.extjsObject.showConfigurator();
	}

	//constructor() {
			private configuratorConfig:any = { 
			left: 0, top: this.border,
			style: { width: this.width, height: this.height },
			store: new AgencyPortfolioStore().extjsObject,

    plugins: [
			{ type: 'columnresizing' }, 
			{
        type: 'pivotconfigurator',
        fields: [
					{
						dataIndex:  'totalITspendingCYB',
						header:     'spending',
						aggregator: 'sum',
						formatter: 'number("$0,000.00")',
						settings: {
							allowed: ['aggregate'],
							style: { fontWeight: 'bold' }
						}
					}, 
					{
							dataIndex:  'agencyName',
							header:     'Agency',
							settings: {
									aggregators: ['count']
									// renderers: {
									//     'Colored 0,000.00': 'coloredRenderer'
									// },
									// Define here custom formatters that ca be used on this dimension
							}
					}, 
					{
							dataIndex:  'bureauName',
							header:     'Bureau',
							settings: {
									aggregators: ['count']
							}
					}, 


					{
							dataIndex:  'feaBRMservicesPrimaryServiceArea',
							header:     'Primary Service Area',
							settings: {
									aggregators: ['count']
							}
					},

					{
							dataIndex:  'partOfITPortfolio',
							header:     'IT Portfolio',
							settings: {
									aggregators: ['count']
							}
					},



					{
							dataIndex:  'typeOfInvestment',
							header:     'Type Of Investment',
							settings: {
									aggregators: ['count']
							}
					} 
				]
		}],
		matrix: {
			type: 'local',
			viewLayoutType: 'outline',
			store: new AgencyPortfolioStore().extjsObject,
			enableLocking: true,
			//plugins: [{ ptype: 'pivotdrilldown' }],
			// topAxis: [
			// 	{
			// 		dataIndex:  'typeOfInvestment'
			// 	}
			// ],
			// leftAxis: [
			// 	{
			// 		dataIndex: 'agency',
			// 							locked   : true,

			// 		header: 'Agency',
			// 		id: 'agency',
			// 		width: 375
			// 	}

			// ],
			// aggregate: [
			// 	{
			// 		dataIndex: 'totalITspendingCYB',
			// 		id: 'totalITspendingCYB',
			// 		header: 'Total IT spending CYB',
			// 		width: 210
			// 	}
			// ]
		}
		}
	//}



}