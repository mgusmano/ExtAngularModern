import { Component } from '@angular/core';
import { CompanyStore } from '../../store/company.store';

@Component({
  selector: '',
	template: `
		<extjs-list
			[config]='listConfig' 
			(ready)="readyList($event)"
			(select)="selectList($event)"
		></extjs-list>
	`
})
export class ListComponent { 
	private border:any = 20;
	private size: any = 'calc(100% - ' + (this.border * 2) + 'px)'
	listConfig: any = { 
		left: this.border, top: this.border,
		style: { width: this.size, height: this.size },
		shadow: true,
		showAnimation: 'flip',
		rowLines: true,
		itemTpl: '{name} - {phone}',
		store: new CompanyStore({}).extjsObject,

		// listeners: {
		// 	select: this.onSelect,
		// }

	};

	selectList(o) {
		console.log(o.record);
	}

	// onSelect(list, record, eOpts) {
	// 	console.log(record);
	// }

	readyList(theList) {
		//console.log(theList);
	}
}
