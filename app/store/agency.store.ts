import {ExtJSClass} from '../extangular/extjs.class';

export class AgencyStore extends ExtJSClass {
	constructor (createConfig?: any) {
		let className: any = 'AgencyStore';
		let extend: any = 'Ext.data.Store';
		let defineConfig: any = {
			autoLoad: true,
			proxy: {
				//type: 'jsonp',
				type: 'ajax',
				reader: {
					type: 'json',
					rootProperty: 'result'
				},
				//url: 'https://itdashboard.gov/api/v1/ITDB2/dataFeeds/agency?json=true'
				//url: 'data/agencyJsonP.json'
				url: 'data/agency.json'
			},
			fields: [
				{name: 'agencyName'},
				{name: 'agencyCode'},
				{name: 'agencyAbbreviation'},
				{name: 'agencyType'}
			],
			filters: [
				function(item) {
					return item.data.agencyType == '1-CFO Act';
				}
			]
		};

		super(className, extend, defineConfig, createConfig);
	}
}