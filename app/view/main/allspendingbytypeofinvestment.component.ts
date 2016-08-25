import { Component } from '@angular/core';
import { AgencyService }  from '../../service/agency.service';
//import { AgencyPortfolioStore } from '../../store/agencyportfolio.store';

@Component({
	template: `
		<extjs-pivotgrid [config]='pivotgridConfig'></extjs-pivotgrid>
		<extjs [xtype]='"polar"' [config]='polarConfig' ></extjs>
	`
})
export class AllSpendingByTypeOfInvestmentComponent {
	private border:any = 0;
	private size: any = 'calc(50% - ' + (this.border * 2) + 'px)';
	private pivotgridConfig:any;
	
	constructor(private agencyService: AgencyService) {

		this.pivotgridConfig = { 
			left: this.border, top: this.border,
			style: { width: this.size, height: this.size },
			matrix: {
				type: 'local',
				viewLayoutType: 'outline',
	//			store: new AgencyPortfolioStore().extjsObject,
				store: agencyService.getAgencyPortfolioStore(),
				enableLocking: true,
				plugins: [{ ptype: 'pivotdrilldown' }],
				topAxis: [],
				leftAxis: [{ dataIndex: 'typeOfInvestment', locked : true, header: 'Type Of Investment', width: 250 }],
				aggregate: [{ dataIndex: 'totalITspendingCYB', id: 'totalITspendingCYB', header: 'Total IT spending CYB', width: 250 }],
			}
		};


	}



	private polarConfig:any = {
		left: this.border, 
		top: 400,
		style: { width: this.size, height: this.size },
		store: {
				fields: ['name', 'data1'],
				data: [
						{'name':'01 - Major', 'data1':42826755145, 'data2':12, 'data3':14, 'data4':8, 'data5':13},
						{'name':'02 - Non Major', 'data1':38237906061, 'data2':8, 'data3':16, 'data4':10, 'data5':3},
						{'name':'03 - Migration/Implementation', 'data1':454630, 'data2':2, 'data3':14, 'data4':12, 'data5':7},
						{'name':'04 - Funding Contribution', 'data1':435802930, 'data2':14, 'data3':6, 'data4':1, 'data5':23},
				]
		},

		interactions: 'rotate',
		colors: ["#115fa6", "#94ae0a", "#a61120", "#ff8809"],
		series: {
				type: 'pie',
				label: {
						field: 'name',
						display: 'rotate'
				},
				xField: 'data1',
				donut: 30
		}
	};

}
