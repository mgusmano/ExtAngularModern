import { Component } from '@angular/core';
import { AgencyService }  from '../../service/agency.service';

@Component({
  selector: '',
	template: `
		<extjs [xtype]="'d3-heatmap'" [config]='d3heatmapConfig' ></extjs>
	`
})
export class PurchasesByDayComponent { 
	private border:any = 0;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	private d3heatmapConfig:any = {};

	constructor(private agencyService: AgencyService) {

		this.d3heatmapConfig = {
			left: this.border, top: this.border,
			style: { width: this.size, height: this.size },
			store: this.agencyService.getSampleData2(),
			padding: { top: 20, right: 30, bottom: 50, left: 80 },
			legend: {
					docked: 'bottom',
					padding: 60,
					items: {
							count: 7,
							slice: [1],
							reverse: true,
							size: {
									x: 60,
									y: 30
							}
					}
			},

			// labels: {
			// 		attr: {
			// 				'font-size': '10px'
			// 		}
			// },

			xAxis: {
					// platformConfig: {
					// 		desktop: {
					// 				title: {
					// 						text: 'Date'
					// 				}
					// 		}
					// },
					axis: {
							ticks: 'd3.time.days',
							tickFormat: "d3.time.format('%b %d')",
							orient: 'bottom'
					},
					scale: {
							type: 'time'
					},
					field: 'date',
					step: 24 * 60 * 60 * 1000
			},
			yAxis: {
					// platformConfig: {
					// 		desktop: {
					// 				title: {
					// 						text: 'Total'
					// 				}
					// 		}
					// },
					axis: {
							orient: 'left',
							tickFormat: "d3.format('$ %d')"
					},
					scale: {
							type: 'linear'
					},
					field: 'bucket',
					step: 100
			},
			colorAxis: {
					scale: {
							type: 'linear',
							range: ['white', 'green']
					},
					field: 'count',
					minimum: 0
			},
			tiles: {
					attr: {
							'stroke': 'green',
							'stroke-width': 1
					}
			},
			// tooltip: {
			// 		renderer: 'onTooltip'
			// }
		};

	}

}
