import { Component } from '@angular/core';
import { AgencyService }  from '../../service/agency.service';
//import { AgencyPortfolioStore } from '../../store/agencyportfolio.store';

@Component({
	template: `
		<extjs-pivotgrid [config]='pivotgridConfig'></extjs-pivotgrid>
	`
})
export class AllSpendingByPrimaryServiceAreaComponent {
	private border:any = 0;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)';
	private pivotgridConfig:any;

	constructor(private agencyService: AgencyService) {

		this.pivotgridConfig = { 
			left: this.border, top: this.border,
			style: { width: this.size, height: this.size },
			matrix: {
				type: 'local',
				store: agencyService.getAgencyPortfolioStore(),


//changing to all because of performance, this would be AgencySpendingByPrimaryServiceAreaComponent
				//topAxis: [{ dataIndex:  '' }],
				//leftAxis: [{ dataIndex: 'agency', locked : true, header: 'Agency', id: 'agency', width: 375 }],

				topAxis: [],
				leftAxis: [{ dataIndex: 'feaBRMservicesPrimaryServiceArea', locked : true, header: 'Primary Service Area', width: 400 }],

				aggregate: [{ dataIndex: 'totalITspendingCYB', id: 'totalITspendingCYB', header: 'Total IT spending', width: 250 }],
			}
		};

	}


}
