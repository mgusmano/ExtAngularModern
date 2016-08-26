import { Component } from '@angular/core';
import { AgencyService }  from '../../service/agency.service';

@Component({
	template: `
		<extjs-pivotgrid (ready)='readyPivotGrid($event)' [config]='pivotgridConfig'></extjs-pivotgrid>
	`
})
export class AgencySpendingByBureauComponent {
	private border:any = 0;
	private width: any = 'calc(100% - 0px)';
	private height: any = 'calc(100% - ' + this.border + 'px)';
	private thePivotGrid; any;
	private pivotgridConfig:any;

	readyPivotGrid(thePivotGrid) {
		this.thePivotGrid = thePivotGrid;
	}

	constructor(private agencyService: AgencyService) {

		this.pivotgridConfig = { 
			left: 0, top: this.border,
			style: { width: this.width, height: this.height },
			matrix: {
				type: 'local',
				store: agencyService.getAgencyPortfolioStore(),
				topAxis: [{ dataIndex:  'agencyName' }],
				leftAxis: [{ dataIndex: 'bureauName', header: 'Bureau', width: 375 }],
				aggregate: [{ dataIndex: 'totalITspendingCYB', id: 'totalITspendingCYB', header: 'Total IT spending', width: 440 }],
			}
		};

	}


}
