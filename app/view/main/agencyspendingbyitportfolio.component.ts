import { Component } from '@angular/core';
import { AgencyService }  from '../../service/agency.service';

@Component({
	template: `
		<extjs-pivotgrid [config]='pivotgridConfig'></extjs-pivotgrid>
	`
})
export class AgencySpendingByITPortfolioComponent {
	private border:any = 0;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
		private pivotgridConfig:any;

	constructor(private agencyService: AgencyService) {

		this.pivotgridConfig = { 
			left: this.border, top: this.border,
			style: { width: this.size, height: this.size },
			matrix: {
				type: 'local',
				store: agencyService.getAgencyPortfolioStore(),
				topAxis: [{ dataIndex:  'partOfITPortfolio' }],
				leftAxis: [{ dataIndex: 'agency', locked : true, header: 'Agency', id: 'agency', width: 375 }],
				aggregate: [{ dataIndex: 'totalITspendingCYB', id: 'totalITspendingCYB', header: 'Total IT spending', width: 440 }],
			}
		};

	}


}
