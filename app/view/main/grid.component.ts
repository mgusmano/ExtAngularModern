import { Component } from '@angular/core';
import { CompanyStore } from '../../store/company.store';
import { SalesStore } from '../../store/sales.store';

@Component({
  selector: '',
	template: `
		<extjs [xtype]='"grid"'
			[config]='gridConfig'
		></extjs>
	`
})
export class GridComponent { 
	private border:any = 20;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	private gridConfig:any;
	constructor() {
		this.gridConfig = { 
			left: this.border, top: this.border,
			style: { width: this.size, height: this.size },
			shadow: true, 
			//controller: 'grid-bigdata',
			//grouped: true,
			//rowLines: true,
			store: new SalesStore({}).extjsObject,
			columns: [
				{
					text: 'salesperson',
					width:200,
					dataIndex: 'salesperson'
				}
			],
			 plugins: [
				{ type: 'grideditable' }, 
				{ type: 'gridviewoptions' }, 
				{ type: 'pagingtoolbar' }, 
				{ type: 'summaryrow'}, 
				{ type: 'columnresizing' }, 
				{ type: 'rowexpander' },
			// { type: 'gridexporter'}
			],

			// listeners: {
			// 		documentsave: 'onDocumentSave',
			// 		beforedocumentsave: 'onBeforeDocumentSave'
			// },

			// items: [{
			// 		docked: 'top',
			// 		xtype: 'toolbar',
			// 		shadow: false,
			// 		items: [{
			// 				xtype: 'button',
			// 				text: 'Export to ...',
			// 				handler: 'exportTo'
			// 		}]
			// }],

			// Instruct rows to create view models so we can use data binding
			// itemConfig: {
			// 		viewModel: {
			// 				type: 'grid-bigdata-row'
			// 		},
			// 		body: {
			// 				tpl: '<img src="{avatar}" height="100px" style="float:left;margin:0 10px 5px 0"><b>{name}<br></b>{dob:date}'
			// 		}
			// },


		};

	}
}
