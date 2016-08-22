import { Component } from '@angular/core';
import { AgencyStore } from '../../store/agency.store';

@Component({
	styles: [`
	`],
  selector: '',
	template: `
		<extjs-dataview
			[config]='dataviewConfig' 
			(ready)="readyDataView($event)"
			(select)="selectDataView($event)"
			(itemmouseenter)="itemmouseenterDataView($event)"
			(itemmouseleave)="itemmouseleaveDataView($event)"
		></extjs-dataview>
	`
})
export class DataViewComponent { 
	private border:any = 20;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'

	dataviewConfig: any = { 
		left: this.border, top: this.border,
		style: { width: this.size, height: this.size, background: 'lightgray' },
		shadow: true,
		
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
	}

	itemmouseleaveDataView(o) {
		console.log(o.record);
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