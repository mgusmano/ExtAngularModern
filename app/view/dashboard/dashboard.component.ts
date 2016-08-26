import { Component } from '@angular/core';
import { AgencyService }  from '../../service/agency.service';
import { AgencyStore } from '../../store/agency.store';

@Component({
  selector: '',
	styleUrls: ['app/view/dashboard/dashboard.component.css'],
	templateUrl: 'app/view/dashboard/dashboard.component.html'
})
export class DashboardComponent { 
	private pivotgridConfig:any = {};
	private polarConfig:any = {};
	private cartesianConfig:any = {};
	private listConfig:any = {};

	constructor(private agencyService: AgencyService) {

		this.pivotgridConfig = { 
			left: 0, top: 40,
			style: { width: '100%', height: 'calc(100% - 40px)' },
			matrix: {
				type: 'local',
				store: agencyService.getAgencyPortfolioStore(),
				topAxis: [],
				leftAxis: [{ dataIndex: 'typeOfInvestment', locked : true, header: 'Type Of Investment', width: 250 }],
				aggregate: [{ dataIndex: 'totalITspendingCYB', id: 'totalITspendingCYB', header: 'Total IT spending', width: 250 }],
			}
		};

		this.polarConfig = {
			left: 0, top: 40,
			style: { width: '100%', height: 'calc(100% - 40px)' },
			store: this.agencyService.getSampleData1(),
			series: {
					type: 'pie',
					//label: { field: 'name', display: 'rotate' },
					xField: 'data3',
					donut: 30
			}
		};

		this.cartesianConfig = {
			left: 0, top: 40,
			style: { width: '100%', height: 'calc(100% - 40px)' },
			store: this.agencyService.getSampleData1(),
			series: [
				{
					type: 'bar',
					xField: 'name',
					yField: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'],
					title: ['Apples', 'Oranges', 'Bananas', 'Plums', 'Mangos', 'Pears'],
					stacked: false,
					style: { lineWidth: 2 }
				}
			],
			axes: [
				{
					type: 'numeric',
					position: 'left',
					fields: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'],
					label: {
							rotate: {
									degrees: -30
							}
					}
				}, 
				{
					type: 'category',
					position: 'bottom',
					fields: 'name'
				}
			]
		};

		this.listConfig = { 
			left: 0, top: 40,
			style: { width: '100%', height: 'calc(100% - 40px)' },
			store: new AgencyStore().extjsObject,
			//store: agencyService.getAgencyStore(),
			itemTpl: '{agencyCode} - {agencyName} ({agencyAbbreviation})',
		};

	}

}
