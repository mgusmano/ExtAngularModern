import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AgencyStore } from '../../store/agency.store';
import { AgencyService }  from '../../service/agency.service';

@Component({
	styles: [`
	`],
  selector: '',
	template: `
		<div style="padding:10px;background:#f1f5f6;">
		<extjs-dataview
			[config]='dataviewConfig' 
			(ready)="readyDataView($event)"
			(select)="selectDataView($event)"
			(itemmouseenter)="itemmouseenterDataView($event)"
			(itemmouseleave)="itemmouseleaveDataView($event)"
		></extjs-dataview>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.Default
})
export class DataViewComponent { 
	//private border:any = 20;
	//private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'

	constructor(private agencyService: AgencyService) {
	}

	dataviewConfig: any = { 
		//left: this.border, top: this.border,
		//style: { width: this.size, height: this.size, background: 'lightgray' },
		//shadow: true,
		style: { width: '80%', height: '100%', background: '#f1f5f6' },
//		style: { background: 'lightgray' },
		
		scrollable: 'vertical',
		inline: true,
		store: new AgencyStore().extjsObject,
		itemTpl: [
			'<div class="dataview">',
				'<img class="dataview-image" src="resources/logos/{agencyCode}.svg" />',
				'<div class="dataview-text">',
					'<div>{agencyAbbreviation}&nbsp;({agencyCode})</div>',
					'<div>{agencyName}</div>',
				'</div>',
			'</div>',
		]
		//https://itdashboard.gov/drupal/sites/itdb/themes/itdb/assets/img/department-logos/by-id/{agencyCode}.svg',
	};

	itemmouseenterDataView(o) {
		console.log(o.record);
		this.agencyService.announceAgency(o.record.data);
		//this.agencyService.setAgency(o.record.data.agencyAbbreviation);
	}

	itemmouseleaveDataView(o) {
		console.log(o.record);
		//console.log(this.agencyService.getAgency())
	}

	selectDataView(o) {
		Ext.Msg.alert(o.record.data.agencyAbbreviation, o.record.data.agencyName, Ext.emptyFn);
	}

	readyDataView(theDataView) {
		console.log(theDataView);
	}
}




		// store: {
		// 	autoLoad: true,
		// 	proxy: {
		// 		type: 'jsonp',
		// 		reader: {
		// 			type: 'json',
		// 			rootProperty: 'result'
		// 		},
		// 		url: 'https://itdashboard.gov/api/v1/ITDB2/dataFeeds/agency?json=true'
		// 	}
		// 	fields: [
		// 		{name: 'agencyName'},
		// 		{name: 'agencyCode'},
		// 		{name: 'agencyAbbreviation'},
		// 		{name: 'agencyType'}
		// 	],
		// 	filters: [
		// 		function(item) {
		// 			return item.data.agencyType == '1-CFO Act';
		// 		}
		// 	]
		// }