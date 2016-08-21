import { Component } from '@angular/core';
import { CompanyStore } from '../../store/company.store';
import { SalesStore } from '../../store/sales.store';

@Component({
  selector: '',
	template: `
		<extjs-grid
			[config]='gridConfig' 
			(ready)="readyGrid($event)"
			(select)="selectGrid($event)"
			(columnsort)="columnsortGrid($event)"
		></extjs-grid>
	`
})
export class GridComponent { 
	private border:any = 20;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	private gridConfig:any;

	selectGrid(o) {
		console.log(o.record);
	}

	columnsortGrid(o) {
		console.log(o.control);
		console.log(o.column);
		console.log(o.direction);
		console.log(o.eOpts);
	}

	readyGrid(theGrid) {
		//console.log(theGrid);
	}

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
				{ text: 'salesperson',width:200,	dataIndex: 'salesperson' },
        { text: 'Amount', dataIndex: 'amount' },
        { text: 'Country', width: 125, dataIndex: 'country'},
        { text: 'Orderdate', width: 300, dataIndex: 'orderdate' },
        { text: 'Person - range', width: 150, dataIndex: 'person-range' },
        { text: 'Year', flex: 1, dataIndex: 'year' }
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

			items: [{
					docked: 'top',
					xtype: 'toolbar',
					shadow: false,
					items: [{
							xtype: 'button',
							text: 'Export to ...',
							//scope: this,
							handler: this.exportTo
					}]
			}]
		};
	}

	private exportTo() {
		alert('exportTo');
	}

}
