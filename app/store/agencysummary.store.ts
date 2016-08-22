import {ExtJSClass} from '../extangular/extjs.class';

export class AgencySummaryStore extends ExtJSClass {
	constructor (createConfig: any) {
		let className: any = 'AgencySummaryStore';
		let extend: any = 'Ext.data.Store';
		let defineConfig: any = {
			autoLoad:   true,
			proxy: {
				type: 'ajax',
				reader: {
					type: 'json',
					implicitIncludes: false
				},
				url: 'data/AgencySummary.json'
			},
			fields: [
				{name: 'agencyName'},
				{name: 'agencyCode'}
			]
		};

		super(className, extend, defineConfig, createConfig);
	}
}