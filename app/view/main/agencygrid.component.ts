import { Component } from '@angular/core';
import { AgencyStore } from '../../store/agency.store';

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
export class AgencyGridComponent { 

	private gridConfig:any = { 
		style: { width: '100%', height: '100%' },
		store: new AgencyStore().extjsObject,
		columns: [
			{ text: 'agencyCode', width:200, dataIndex: 'agencyCode' },
			{ text: 'agencyAbbreviation', width: 200, dataIndex: 'agencyAbbreviation'},
			{ text: 'agencyName', dataIndex: 'agencyName', flex: 1 }
		]
	};

	selectGrid(o) {
		console.log(o.record);
	}

	columnsortGrid(o) {
		//console.log(o.control);
		//console.log(o.column);
		console.log(o.direction);
		//console.log(o.eOpts);
	}

	readyGrid(theGrid) {
		//console.log(theGrid);
	}

}
