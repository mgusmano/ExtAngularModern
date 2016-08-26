import { Component } from '@angular/core';
import { AgencyService }  from '../../service/agency.service';

@Component({
  selector: '',
	template: `
		<extjs-polar [config]='polarConfig' ></extjs-polar>
	`
})
export class PieComponent { 
	private border:any = 0;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	private polarConfig:any = {};

	constructor(private agencyService: AgencyService) {

		this.polarConfig = {
			left: this.border, top: this.border,
			style: { width: this.size, height: this.size },
			store: this.agencyService.getSampleData1(),
			series: {
					type: 'pie',
					label: { field: 'name', display: 'rotate' },
					xField: 'data3',
					donut: 30
			}
		};

	}

}
